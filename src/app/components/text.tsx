import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Text({
    text,
    className,
    place,
}: {
    text: string;
    className?: string;
    place: number;
}) {
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => { }, 1000 * place);
                    observer.disconnect();
                }
            },
            { threshold: 1 },
        );

        const currentEl = el.current;
        if (currentEl) {
            observer.observe(currentEl);
        }

        return () => {
            if (currentEl) {
                observer.unobserve(currentEl);
            }
        };
    }, [place]);

    const lines = text.split("\n");

    return (
        <div className={`${className} text`}>
            <div ref={el} />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        default: { type: "spring" },
                        opacity: { ease: "linear", duration: 2 },
                    },
                }}
            >
                {lines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </motion.div>
        </div>
    );
}
