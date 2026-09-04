import { useRef, useState } from "react";
import { TESTIMONIALS } from "../../data/testimonials";

const EXCERPT_WORDS = 40;

function excerptQuote(quote: string) {
    const words = quote.trim().split(/\s+/);

    if (words.length <= EXCERPT_WORDS) {
        return { text: quote, truncated: false };
    }

    return {
        text: `${words.slice(0, EXCERPT_WORDS).join(" ")}...`,
        truncated: true,
    };
}

function Testimonials() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [index, setIndex] = useState(0);
    const total = TESTIMONIALS.length;
    const item = TESTIMONIALS[index];
    const excerpt = excerptQuote(item.quote);
    const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

    const goTo = (next: number) => {
        setIndex((next + total) % total);
    };

    const openFull = () => {
        dialogRef.current?.showModal();
    };

    const closeFull = () => {
        dialogRef.current?.close();
    };

    return (
        <section id="testimonials">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-sm font-medium tracking-[0.18em] text-muted">
                    06 / TESTIMONIALS
                </h2>
                <p className="font-mono text-xs text-muted">{counter}</p>
            </div>

            <blockquote
                key={index}
                className="mt-8 motion-safe:animate-[fade-in_200ms_ease-out] motion-reduce:animate-none"
            >
                <p className="font-serif text-xl leading-snug tracking-tight">
                    {excerpt.text}
                </p>
                {excerpt.truncated ? (
                    <button
                        type="button"
                        onClick={openFull}
                        className="mt-4 text-sm text-muted transition-colors hover:text-foreground"
                    >
                        READ FULL TESTIMONIAL →
                    </button>
                ) : null}
                <footer className="mt-8">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                </footer>
            </blockquote>

            <div className="mt-8 flex items-center gap-6">
                <button
                    type="button"
                    onClick={() => goTo(index - 1)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    aria-label="Previous testimonial"
                >
                    ←
                </button>
                <button
                    type="button"
                    onClick={() => goTo(index + 1)}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                    aria-label="Next testimonial"
                >
                    →
                </button>
            </div>

            <dialog
                ref={dialogRef}
                className="h-full max-h-none w-full max-w-none border-0 bg-transparent p-0"
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        closeFull();
                    }
                }}
            >
                <div
                    className="relative flex min-h-full items-center justify-center bg-foreground/80 p-6"
                    onClick={closeFull}
                >
                    <button
                        type="button"
                        onClick={closeFull}
                        className="absolute right-6 top-6 text-sm text-background transition-opacity hover:opacity-80"
                    >
                        Close
                    </button>
                    <div
                        className="max-w-xl border border-border bg-background px-8 py-10"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <p className="text-lg leading-relaxed text-foreground">
                            {item.quote}
                        </p>
                        <p className="mt-8 text-sm font-medium text-foreground">
                            {item.name}
                        </p>
                        <p className="mt-1 text-sm text-muted">{item.role}</p>
                    </div>
                </div>
            </dialog>
        </section>
    );
}

export default Testimonials;
