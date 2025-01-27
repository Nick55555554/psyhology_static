import { useState } from 'react'
import Sertifikat_NGPU_2024 from '../../../public/Sertifikat_NGPU_2024/Sertifikat_NGPU_2024_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Eka from '../../../public/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Nov_21 from '../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_22 from '../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_23 from '../../../public/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023_page-0001.jpg'
import Udostoverenie_GTsOZ_Magistr_2023 from '../../../public/Udostoverenie_GTsOZ_Magistr_2023/Udostoverenie_GTsOZ_Magistr_2023_page-0001.jpg'
import Udostoverenie_ISPiP_Yan_Fyodorov_2021 from '../../../public/Udostoverenie_ISPiP_Yan_Fyodorov_2021/Udostoverenie_ISPiP_Yan_Fyodorov_2021_page-0001.jpg'
import Udostoverenie_NIPKiPRO_2024 from '../../../public/Udostoverenie_NIPKiPRO_2024/Udostoverenie_NIPKiPRO_2024_page-0001.jpg'
import { ScrollCheck } from '../ui/scrollCheck'
import "../styles.scss"
import Image from 'next/image'

export const ExtraEdu =({
    className,
}:{
    className?: string
}) => {
    const [extraEdu, setVisibleExtraEdu] = useState<number | null>(null)
    const handleMainEdu = (id: number) => {
        setVisibleExtraEdu((prev:number | null) => (prev === id ? null : id));
    };
    
    const mainEduSet = [
        {
            id: 1,
            text: "Сертификат НГПУ 2024",
            image: Sertifikat_NGPU_2024,
        },
        {
            id: 2,
            text: "Удостоверение НИПКиПРО 2024",
            image: Udostoverenie_NIPKiPRO_2024,
        },
        {
            id: 3,
            text: "Удостоверение ГЦОЗ Магистр 2023",
            image: Udostoverenie_GTsOZ_Magistr_2023,
        },
        {
            id: 4,
            text: "Сертификат НПК ЕАРПП РО-Санкт-Петербург 2023",
            image: Sertifikat_NPK_EARPP_RO_23,
        },
        {
            id: 5,
            text: "Сертификат НПК ЕАРПП РО-Екатеринбург 2023",
            image: Sertifikat_NPK_EARPP_RO_Eka,
        },
        {
            id: 6,
            text: "Сертификат НПК ЕАРПП РО-Новосибирск 2022",
            image: Sertifikat_NPK_EARPP_RO_22,
        },
        
        {
            id: 7,
            text: "Сертификат НПК ЕАРПП РО-Новосибирск 2021",
            image: Sertifikat_NPK_EARPP_RO_Nov_21,
        },
        {
            id: 8,
            text: "Удостоверение ИСПиП 2021",
            image: Udostoverenie_ISPiP_Yan_Fyodorov_2021,
        },
            
    ]
    return(
        <ScrollCheck className={`${ExtraEdu != null  ? "" : ""} mt-12 ${className}`}>
            <h1 className="pt-8 pl-12 edu_head">Дополнительное образование:</h1>
            <ul className="pl-3 pb-10">
            {mainEduSet.map((item) => (
                <li 
                    key={item.id} 
                    className={`edu ${extraEdu === item.id-1 ? 'edu_active' : ''}`} 
                    onClick={() => handleMainEdu(item.id)}
                >
                    {item.text}
                    {item.image && (
                        <Image 
                            src={item.image} 
                            width={450} 
                            height={300} 
                            alt={item.text} 
                            className={`edu_Image  ${extraEdu  === item.id ? 'Image_visible' : ''}`} 
                        />
                    )}
                </li>
            ))}
            </ul>
    </ScrollCheck>
    )
    
}
