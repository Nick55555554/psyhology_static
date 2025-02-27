import { useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { motion } from "motion/react";

export default function Text({text, className, place}:{text: string, className?: string, place: number}){
    const el = useRef<HTMLSpanElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const options = {
            strings: [text],
            typeSpeed: 10,
            loop: false,
            cursorChar: " ",
        }
        let typed: Typed | null = null;

        if (isVisible && el.current) {
            typed = new Typed(el.current, options);
        }
        

        return () => {
            if (typed) {
                typed.destroy();
            }
        };
    }, [text, isVisible]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() =>{
                        setIsVisible(true);
                    },1000 * place)
                    observer.disconnect(); 
                }
            },
            { threshold: 1 } 
        );

        const currentEl = el.current;
        if (currentEl) {
            observer.observe(currentEl);
        }

        return () => {
            if (el.current) {
                observer.unobserve(el.current);
            }
        };
    }, []);

    
    return(
        <div className={`${className} text`}>
            <span ref={el}/>
            <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    default: { type:"spring"},
                    opacity: { ease: "linear", duration: 2, repeat: Infinity, delay: 5 + place }
                }
            }}
            >
            </motion.div>
        </div>
    )
}