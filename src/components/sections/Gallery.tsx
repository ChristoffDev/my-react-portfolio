import { useEffect, useRef, useState } from "react";
import { GALLERY } from "../../data/gallery";

function Gallery() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const total = GALLERY.length;
    const cover = GALLERY[0];
    const current = GALLERY[index];
    const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    const goTo = (next: number) => {
        setIndex((next + total) % total);
    };

    const play = () => {
        setIndex(0);
        setOpen(true);
        dialogRef.current?.showModal();
    };

    const close = () => {
        setOpen(false);
        dialogRef.current?.close();
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion) {
            return;
        }

        const timer = window.setInterval(() => {
            setIndex((currentIndex) => (currentIndex + 1) % total);
        }, 4000);

        return () => window.clearInterval(timer);
    }, [open, index, total]);

    return (
        <section id="gallery">
            <div className="relative overflow-hidden border border-border">
                <img
                    src={cover.src}
                    alt={cover.caption}
                    className="aspect-[4/3] w-full object-cover object-center grayscale"
                />
                <button
                    type="button"
                    onClick={play}
                    aria-label="Play gallery"
                    aria-haspopup="dialog"
                    className="absolute inset-0 flex items-center justify-center text-background"
                >
                    <span className="flex size-12 items-center justify-center border border-background/80 bg-foreground/50">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
                            <path d="M2 1.5v13L13 8 2 1.5Z" />
                        </svg>
                    </span>
                </button>
            </div>

            <p className="mt-3 font-mono text-xs text-muted">{cover.caption}</p>

            <dialog
                ref={dialogRef}
                className="h-full max-h-none w-full max-w-none border-0 bg-transparent p-0"
                onClose={() => setOpen(false)}
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        close();
                    }
                }}
            >
                <div
                    className="relative flex min-h-full flex-col items-center justify-center bg-foreground/80 p-6"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={close}
                        className="absolute right-6 top-6 text-sm text-background transition-opacity hover:opacity-80"
                    >
                        Close
                    </button>

                    <div
                        className="flex max-w-[90vw] flex-col items-center"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={current.src}
                            alt={current.caption}
                            className="max-h-[75svh] max-w-full object-contain"
                        />
                        <p className="mt-4 text-sm text-background">{current.caption}</p>
                        <p className="mt-2 font-mono text-xs text-background/70">{counter}</p>
                        <div className="mt-6 flex items-center gap-6">
                            <button
                                type="button"
                                onClick={() => goTo(index - 1)}
                                className="text-sm text-background/80 transition-opacity hover:text-background"
                                aria-label="Previous photo"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={() => goTo(index + 1)}
                                className="text-sm text-background/80 transition-opacity hover:text-background"
                                aria-label="Next photo"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </section>
    );
}

export default Gallery;
