import Sertifikat_NGPU_2024 from "../../../public/Sertifikat_NGPU_2024/Sertifikat_NGPU_2024_page-0001.jpg";
import Sertifikat_NPK_EARPP_RO_Eka from "../../../public/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023_page-0001.jpg";
import Sertifikat_NPK_EARPP_RO_Nov_21 from "../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021_page-0001.jpg";
import Sertifikat_NPK_EARPP_RO_22 from "../../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022_page-0001.jpg";
import Sertifikat_NPK_EARPP_RO_23 from "../../../public/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023_page-0001.jpg";
import Udostoverenie_GTsOZ_Magistr_2023 from "../../../public/Udostoverenie_GTsOZ_Magistr_2023/Udostoverenie_GTsOZ_Magistr_2023_page-0001.jpg";
import Udostoverenie_ISPiP_Yan_Fyodorov_2021 from "../../../public/Udostoverenie_ISPiP_Yan_Fyodorov_2021/Udostoverenie_ISPiP_Yan_Fyodorov_2021_page-0001.jpg";
import Udostoverenie_NIPKiPRO_2024 from "../../../public/Udostoverenie_NIPKiPRO_2024/Udostoverenie_NIPKiPRO_2024_page-0001.jpg";
import Diplom_MIP_2024 from "../../../public/Diplom_MIP_2024/Diplom_MIP_2024_page-0001.jpg";
import Diplom_NGTU_2022_1_srt from "../../../public/Diplom_NGTU_2022_1_str/Diplom_NGTU_2022_1_str_page-0001.jpg";
import Mezhdunarodny_Sertifikat from "../../../public/Mezhdunarodny_Sertifikat_MShGA_160ch_2023/Mezhdunarodny_Sertifikat_MShGA_160ch_2023_page-0001.jpg";
import XVIISertificat from "../../../public/Сертификат XVII ЗШ_page-0001.jpg";
import XIISERTIFICAT from "../../../public/Сертификат_НПК_ЕАРПП_РО_Новосибирск_2025_page-0001.jpg";
import sertificatXIII from "../../../public/13/13_page-0001.jpg";
import setrificatXIV from "../../../public/14/14_page-0001.jpg";
import sertificatXV from "../../../public/2025_Сертификат_НПК_ЕАРПП_РО_Санкт_Петербург_8ч_page-0001.jpg";

import "../styles.scss";
import Image from "next/image";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.scss";
import "swiper/css/navigation";
import { useAtom } from "jotai";
import { imgAtom } from "./MainEdu";

export const eduSet = [
  {
    id: 0,
    text: "Удостоверение ИСПиП 2021",
    image: Udostoverenie_ISPiP_Yan_Fyodorov_2021,
  },
  {
    id: 1,
    text: "Сертификат НПК ЕАРПП РО-Новосибирск 2021",
    image: Sertifikat_NPK_EARPP_RO_Nov_21,
  },
  {
    id: 2,
    text: "Сертификат НПК ЕАРПП РО-Новосибирск 2022",
    image: Sertifikat_NPK_EARPP_RO_22,
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
    text: "Удостоверение НИПКиПРО 2024",
    image: Udostoverenie_NIPKiPRO_2024,
  },
  {
    id: 7,
    text: "Сертификат НГПУ 2024",
    image: Sertifikat_NGPU_2024,
  },
  {
    id: 8,
    text: "Сертифкат Зимней Школы",
    image: XVIISertificat,
  },
  {
    id: 9,
    text: "Сертификат участника V межрегиональной научно-практической конференции",
    image: XIISERTIFICAT,
  },
  {
    id: 10,
    text: "Сертификат за участие на XI Всероссийской научно-практической конференции с международным участием",
    image: sertificatXIII,
  },
  {
    id: 11,
    text: "Сертификат участия во II Уральской международной конференции",
    image: setrificatXIV,
  },
  {
    id: 12,
    text: "Сертифкат участника научно-практической конференции",
    image: sertificatXV,
  },
  {
    id: 13,
    text: "Диплом о базовом психологическом образовании",
    image: Diplom_NGTU_2022_1_srt,
  },
  {
    id: 14,
    text: "Диплом о психоаналитической переподготовке",
    image: Diplom_MIP_2024,
  },
  {
    id: 15,
    text: "Международный сертификат МШГА, COIRAG, EGATIN, EAP",
    image: Mezhdunarodny_Sertifikat,
  },
];
export const ExtraEdu = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [img, setImage] = useAtom(imgAtom);

  const filteredEduSet = eduSet.slice(0, -3);

  return (
    <Swiper
      slidesPerView={"auto"}
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
      modules={[Pagination, Autoplay, Navigation]}
    >
      {filteredEduSet.map((one) => (
        <SwiperSlide
          key={one.id}
          style={{ width: "auto", maxHeight: "210px" }}
        >
          <Image
            onClick={() => setImage(one.id)}
            alt={one.text}
            src={one.image}
            className="slImg"
            loading="eager"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
