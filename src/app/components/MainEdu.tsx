import { useState } from 'react'
import Image from 'next/image'
import Diplom_MIP_2024 from '../../../public/Diplom_MIP_2024/Diplom_MIP_2024_page-0001.jpg'
import Diplom_NGTU_2022_1_srt from "../../../public/Diplom_NGTU_2022_1_str/Diplom_NGTU_2022_1_str_page-0001.jpg"
import Mezhdunarodny_Sertifikat from '../../../public/Mezhdunarodny_Sertifikat_MShGA_160ch_2023/Mezhdunarodny_Sertifikat_MShGA_160ch_2023_page-0001.jpg'
import { ScrollCheck } from '../ui/scrollCheck'
import "@/app/styles.scss"
export const MainEdu =() => {
    const [mainEdu, setVisibleMainEdu] = useState<number | null>(null)
    const handleMainEdu = (id: number) => {
        setVisibleMainEdu((prev:number | null) => (prev === id ? null : id));
    
    };
    
    const mainEduSet = [
        {
            id: 1,
            text: "Диплом о базовом психологическом образовании",
            image: Diplom_NGTU_2022_1_srt,
        },
        {
            id: 2,
            text: "Диплом о психоаналитической переподготовке",
            image: Diplom_MIP_2024,
        },
        {
            id: 3,
            text: "Международный сертификат МШГА, COIRAG, EGATIN, EAP",
            image: Mezhdunarodny_Sertifikat,
        },
        
    ]
    return(
        <ScrollCheck className={`${mainEdu != null  ? "" : ""} mt-12`}>
            <h1 className="pt-8 pl-12">Основное образование:</h1>
            <ul className="pl-3 pb-10">
            {mainEduSet.map((item) => (
                <li 
                    key={item.id} 
                    className={`edu ${mainEdu === item.id-1 ? 'edu_active' : ''}`} 
                    onClick={() => handleMainEdu(item.id)}
                >
                    {item.text}
                    {item.image && (
                        <Image 
                            src={item.image} 
                            width={450} 
                            height={300} 
                            alt={item.text} 
                            className={`edu_Image  ${mainEdu  === item.id ? 'Image_visible' : ''}`} 
                        />
                    )}
                </li>
            ))}
            </ul>
    </ScrollCheck>
    )
    
}
