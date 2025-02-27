import Sertifikat_NGPU_2024 from '../../../public/Sertifikat_NGPU_2024/Sertifikat_NGPU_2024_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Eka from '../../../public/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Nov_21 from '../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_22 from '../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_23 from '../../../public/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023_page-0001.jpg'
import Udostoverenie_GTsOZ_Magistr_2023 from '../../../public/Udostoverenie_GTsOZ_Magistr_2023/Udostoverenie_GTsOZ_Magistr_2023_page-0001.jpg'
import Udostoverenie_ISPiP_Yan_Fyodorov_2021 from '../../../public/Udostoverenie_ISPiP_Yan_Fyodorov_2021/Udostoverenie_ISPiP_Yan_Fyodorov_2021_page-0001.jpg'
import Udostoverenie_NIPKiPRO_2024 from '../../../public/Udostoverenie_NIPKiPRO_2024/Udostoverenie_NIPKiPRO_2024_page-0001.jpg'
import "../styles.scss"
import Image from 'next/image';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import "swiper/css/navigation";
import { useAtom } from 'jotai'
import { ImgAtom } from './MainEdu'

const ExtraEduSet = [
    {
        id: 3,
        text: "Сертификат НГПУ 2024",
        image: Sertifikat_NGPU_2024,
    },
    {
        id: 4,
        text: "Удостоверение НИПКиПРО 2024",
        image: Udostoverenie_NIPKiPRO_2024,
    },
    {
        id: 5,
        text: "Удостоверение ГЦОЗ Магистр 2023",
        image: Udostoverenie_GTsOZ_Magistr_2023,
    },
    {
        id: 6,
        text: "Сертификат НПК ЕАРПП РО-Санкт-Петербург 2023",
        image: Sertifikat_NPK_EARPP_RO_23,
    },
    {
        id: 7,
        text: "Сертификат НПК ЕАРПП РО-Екатеринбург 2023",
        image: Sertifikat_NPK_EARPP_RO_Eka,
    },
    {
        id: 8,
        text: "Сертификат НПК ЕАРПП РО-Новосибирск 2022",
        image: Sertifikat_NPK_EARPP_RO_22,
    },
    
    {
        id: 9,
        text: "Сертификат НПК ЕАРПП РО-Новосибирск 2021",
        image: Sertifikat_NPK_EARPP_RO_Nov_21,
    },
    {
        id: 10,
        text: "Удостоверение ИСПиП 2021",
        image: Udostoverenie_ISPiP_Yan_Fyodorov_2021,
    },
]
export const ExtraEdu =() => {
     // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [img,setImage] = useAtom(ImgAtom)


    return(
        <Swiper
        slidesPerView={'auto'}
        spaceBetween={40}
        loop={true}
        centeredSlides={true} 
        
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}>
        {ExtraEduSet.map((one) => (
                <SwiperSlide key={one.id} style={{ width: 'auto', maxHeight:"210px" }}> 
                <Image
                onClick={() => setImage(one.id)}
                alt={one.text}
                src={one.image}
                className='slImg' 
                />
            </SwiperSlide>
        ))}
        </Swiper>
    )
}
