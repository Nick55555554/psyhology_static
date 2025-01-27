import { useEffect, useReducer, useRef } from "react";
import "../styles.scss"
interface State {
    isVisible: boolean;
}
type Action = 
    | { type: 'SET_VISIBLE' };

const initialState = {
        isVisible: false,
    };

const reducer = (state: State, action: Action) => {
    switch(action.type){
        case "SET_VISIBLE":
            return {...state, isVisible: true};
        default:
            return state;
    }
}
export const ScrollCheck = ({
    children,
    className
}:{
    children: React.ReactNode,
    className?: string
}) => {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dispatch({ type: 'SET_VISIBLE' });
                    observer.unobserve(boxRef.current!); 
                }
            });
        });
        const currentBoxRef = boxRef.current

        if (currentBoxRef) {
            observer.observe(currentBoxRef);
        }

        return () => {
            if (currentBoxRef) {
                observer.unobserve(currentBoxRef)
            }
        };
    }, []);
    return(
        <div className={`border ${ state.isVisible ? "visible_box" : "" } ${className}`}
        ref={boxRef}>
            {children}
        </div>
    )
}