import { useState } from "react";
import { ScrollCheck } from "../ui/scrollCheck";
import "@/app/styles.scss";
import Image from "next/image";
import { atom, useAtom } from "jotai";
import { eduSet } from "./ExtraEdu";

export const imgAtom = atom<number>();

export const MainEdu = ({ className }: { className?: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [img, setImage] = useAtom(imgAtom);
    const [mainEdu, setVisibleMainEdu] = useState<number | null>(null);
    const handleMainEdu = (id: number) => {
        setVisibleMainEdu((prev: number | null) => (prev === id ? null : id));
    };

    const maineduSet = eduSet.slice(-3);

    return (
        <ScrollCheck className={` mt-12 ${className}`}>
            <h1 className="pt-8 pl-12 edu_head">Моё образование:</h1>
            <ul className="pl-3 pb-10">
                {maineduSet.map((item) => (
                    <li
                        key={item.id}
                        className={`edu ${mainEdu === item.id ? "edu_active" : ""}`}
                    >
                        <div onClick={() => handleMainEdu(item.id)}>
                            {item.text}
                        </div>
                        {item.image && (
                            <Image
                                onClick={() => setImage(item.id)}
                                src={item.image}
                                width={450}
                                height={300}
                                alt={item.text}
                                className={`edu_Image  ${mainEdu === item.id ? "Image_visible" : "Image_hidden"} 
                        
                            `}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </ScrollCheck>
    );
};
