import { useEffect, useRef, useState } from "react";

type InkSpot = {
    x: number;
    y: number;
    r: number;
    life: number;
    decay: number;
    alpha: number;
    jitterX: number;
    jitterY: number;
};

const MAX_SPOTS = 48;
const INK_DARK = "23, 23, 23";
const INK_LIGHT = "245, 242, 234";
const POINTER_RADIUS = 3;
const POINTER_RADIUS_HOVER = 4.25;

function canUseInkCursor() {
    return (
        window.matchMedia("(hover: hover)").matches &&
        window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
}

function isModalOpen() {
    return Boolean(document.querySelector("dialog:modal"));
}

function InkCursor() {
    const layerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spotsRef = useRef<InkSpot[]>([]);
    const mouseRef = useRef({ x: -100, y: -100, ready: false, inside: false });
    const hoverRef = useRef<"none" | "link" | "view">("none");
    const overlayRef = useRef(false);
    const [enabled, setEnabled] = useState(false);
    const labelRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const hoverQuery = window.matchMedia("(hover: hover)");
        const pointerQuery = window.matchMedia("(pointer: fine)");
        const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const sync = () => setEnabled(canUseInkCursor());
        sync();

        hoverQuery.addEventListener("change", sync);
        pointerQuery.addEventListener("change", sync);
        motionQuery.addEventListener("change", sync);

        return () => {
            hoverQuery.removeEventListener("change", sync);
            pointerQuery.removeEventListener("change", sync);
            motionQuery.removeEventListener("change", sync);
        };
    }, []);

    useEffect(() => {
        if (!enabled) {
            document.documentElement.classList.remove("ink-cursor");
            return;
        }

        document.documentElement.classList.add("ink-cursor");
        const layer = layerRef.current;
        const canvas = canvasRef.current;
        if (!layer || !canvas) {
            return;
        }

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) {
            return;
        }

        const showLayer = () => {
            if (typeof layer.showPopover !== "function") {
                return;
            }
            try {
                if (layer.matches(":popover-open")) {
                    layer.hidePopover();
                }
                layer.showPopover();
            } catch {
                // Popover may already be open or unsupported in this context.
            }
        };

        const applyOverlayStyle = (open: boolean) => {
            canvas.classList.toggle("mix-blend-multiply", !open);

            const tag = labelRef.current;
            if (tag) {
                tag.classList.toggle("text-background", open);
                tag.classList.toggle("text-muted", !open);
            }
        };

        const syncOverlay = (restack: boolean) => {
            const open = isModalOpen();

            if (open === overlayRef.current) {
                return;
            }

            overlayRef.current = open;
            applyOverlayStyle(open);

            if (restack && open) {
                showLayer();
            }
        };

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(window.innerWidth * dpr);
            canvas.height = Math.floor(window.innerHeight * dpr);
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        resize();
        showLayer();
        overlayRef.current = isModalOpen();
        applyOverlayStyle(overlayRef.current);
        if (overlayRef.current) {
            showLayer();
        }

        const dialogObserver = new MutationObserver(() => syncOverlay(true));
        const watched = new Set<HTMLDialogElement>();

        const watchDialog = (dialog: HTMLDialogElement) => {
            if (watched.has(dialog)) {
                return;
            }
            watched.add(dialog);
            dialogObserver.observe(dialog, { attributes: true, attributeFilter: ["open"] });
        };

        document.querySelectorAll("dialog").forEach(watchDialog);

        const treeObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                mutation.addedNodes.forEach((node) => {
                    if (node instanceof HTMLDialogElement) {
                        watchDialog(node);
                    } else if (node instanceof Element) {
                        node.querySelectorAll("dialog").forEach(watchDialog);
                    }
                });
            }
        });
        treeObserver.observe(document.body, { childList: true, subtree: true });

        const hoverFromPoint = (x: number, y: number) => {
            const el = document.elementFromPoint(x, y);
            if (!el) {
                return "none" as const;
            }
            if (el.closest("[data-cursor='view']")) {
                return "view" as const;
            }
            if (el.closest("a, button, [role='button'], summary, label, input, textarea, select")) {
                return "link" as const;
            }
            return "none" as const;
        };

        const onMove = (event: PointerEvent) => {
            if (event.pointerType === "touch") {
                return;
            }

            const mouse = mouseRef.current;
            const dx = event.clientX - mouse.x;
            const dy = event.clientY - mouse.y;
            const speed = Math.min(Math.hypot(dx, dy), 48);

            mouse.x = event.clientX;
            mouse.y = event.clientY;
            mouse.inside = true;
            hoverRef.current = hoverFromPoint(event.clientX, event.clientY);

            if (!mouse.ready) {
                mouse.ready = true;
                return;
            }

            const overlay = overlayRef.current;
            const spots = spotsRef.current;
            const count = speed > 18 ? 2 : 1;
            const alpha = (0.08 + (speed / 48) * 0.1) * (overlay ? 1.8 : 1);

            for (let i = 0; i < count; i += 1) {
                if (spots.length >= MAX_SPOTS) {
                    spots.shift();
                }
                const t = i / count;
                spots.push({
                    x: event.clientX - dx * t + (Math.random() - 0.5) * 3,
                    y: event.clientY - dy * t + (Math.random() - 0.5) * 3,
                    r: 1.6 + speed * 0.07 + Math.random() * 1.2,
                    life: 1,
                    decay: 0.055 + Math.random() * 0.025,
                    alpha,
                    jitterX: (Math.random() - 0.5) * 0.35,
                    jitterY: (Math.random() - 0.5) * 0.35,
                });
            }
        };

        const onLeave = () => {
            mouseRef.current.inside = false;
            hoverRef.current = "none";
        };

        let frame = 0;
        const draw = () => {
            frame = window.requestAnimationFrame(draw);

            if (document.hidden) {
                return;
            }

            syncOverlay(true);

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            const overlay = overlayRef.current;
            const ink = overlay ? INK_LIGHT : INK_DARK;
            const spots = spotsRef.current;
            for (let i = spots.length - 1; i >= 0; i -= 1) {
                const spot = spots[i];
                spot.life -= spot.decay;
                spot.x += spot.jitterX;
                spot.y += spot.jitterY;
                spot.r *= 1.012;

                if (spot.life <= 0) {
                    spots.splice(i, 1);
                    continue;
                }

                const alpha = spot.life * spot.alpha;
                const gradient = ctx.createRadialGradient(
                    spot.x,
                    spot.y,
                    0,
                    spot.x,
                    spot.y,
                    spot.r * 2.4,
                );
                gradient.addColorStop(0, `rgba(${ink}, ${alpha})`);
                gradient.addColorStop(0.45, `rgba(${ink}, ${alpha * 0.35})`);
                gradient.addColorStop(1, `rgba(${ink}, 0)`);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(spot.x, spot.y, spot.r * 2.4, 0, Math.PI * 2);
                ctx.fill();
            }

            const mouse = mouseRef.current;
            const tag = labelRef.current;

            if (!mouse.inside) {
                if (tag) {
                    tag.style.opacity = "0";
                }
                return;
            }

            const hover = hoverRef.current;
            const radius = hover === "none" ? POINTER_RADIUS : POINTER_RADIUS_HOVER;
            const pointerAlpha = overlay
                ? hover === "none"
                    ? 0.92
                    : 0.98
                : hover === "none"
                  ? 0.72
                  : 0.9;
            ctx.beginPath();
            ctx.fillStyle = `rgba(${ink}, ${pointerAlpha})`;
            ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
            ctx.fill();

            if (tag) {
                if (hover === "view") {
                    tag.style.opacity = "1";
                    tag.style.transform = `translate(${mouse.x + 12}px, ${mouse.y - 6}px)`;
                } else {
                    tag.style.opacity = "0";
                }
            }
        };

        frame = window.requestAnimationFrame(draw);
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
        window.addEventListener("blur", onLeave);
        window.addEventListener("resize", resize);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("blur", onLeave);
            window.removeEventListener("resize", resize);
            dialogObserver.disconnect();
            treeObserver.disconnect();
            if (typeof layer.hidePopover === "function" && layer.matches(":popover-open")) {
                try {
                    layer.hidePopover();
                } catch {
                    // Already closed.
                }
            }
            document.documentElement.classList.remove("ink-cursor");
        };
    }, [enabled]);

    if (!enabled) {
        return null;
    }

    return (
        <div
            ref={layerRef}
            popover="manual"
            className="ink-cursor-layer"
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="pointer-events-none absolute inset-0 mix-blend-multiply"
            />
            <span
                ref={labelRef}
                className="pointer-events-none absolute top-0 left-0 font-mono text-[10px] tracking-[0.16em] text-muted opacity-0"
            >
                VIEW →
            </span>
        </div>
    );
}

export default InkCursor;
