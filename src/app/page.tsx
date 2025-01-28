'use client';
import Diplom_MIP_2024 from '../../public/Diplom_MIP_2024/Diplom_MIP_2024_page-0001.jpg'
import Diplom_NGTU_2022_1_srt from "../../public/Diplom_NGTU_2022_1_str/Diplom_NGTU_2022_1_str_page-0001.jpg"
import Mezhdunarodny_Sertifikat from '../../public/Mezhdunarodny_Sertifikat_MShGA_160ch_2023/Mezhdunarodny_Sertifikat_MShGA_160ch_2023_page-0001.jpg'
import Sertifikat_NGPU_2024 from '../../public/Sertifikat_NGPU_2024/Sertifikat_NGPU_2024_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Eka from '../../public/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023/Sertifikat_NPK_EARPP_RO-Ekaterinburg_2023_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_Nov_21 from '../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021/Sertifikat_NPK_EARPP_RO-Novosibirsk_2021_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_22 from '../../public/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022/Sertifikat_NPK_EARPP_RO-Novosibirsk_2022_page-0001.jpg'
import Sertifikat_NPK_EARPP_RO_23 from '../../public/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023/Sertifikat_NPK_EARPP_RO-Sankt-Peterburg_2023_page-0001.jpg'
import Udostoverenie_GTsOZ_Magistr_2023 from '../../public/Udostoverenie_GTsOZ_Magistr_2023/Udostoverenie_GTsOZ_Magistr_2023_page-0001.jpg'
import Udostoverenie_ISPiP_Yan_Fyodorov_2021 from '../../public/Udostoverenie_ISPiP_Yan_Fyodorov_2021/Udostoverenie_ISPiP_Yan_Fyodorov_2021_page-0001.jpg'
import Udostoverenie_NIPKiPRO_2024 from '../../public/Udostoverenie_NIPKiPRO_2024/Udostoverenie_NIPKiPRO_2024_page-0001.jpg'
import title_image from "../../public/title-image.jpg";
import tg from "../../public/tg.png"
import wp from "../../public/wp.png"
import email from "../../public/email.png"

import "./styles.scss";
import { FaTelegram } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ScrollCheck } from "./ui/scrollCheck";
import { ImgAtom, MainEdu } from "./components/MainEdu";
import { ExtraEdu } from "./components/ExtraEdu";
import Image from "next/image";
import { useAtom } from "jotai";


export default function Home() {
  const [popupVisible, setPopupVisible] = useState({
    tele: false,
    email: false,
  });
  const [layout, setLayout] = useState<boolean>(false)
  const [popUp, setPopUp] = useState<boolean>(false)
  const educationRef = useRef<HTMLDivElement | null>(null);
  const workFormRef = useRef<HTMLDivElement | null>(null);
  const teleRef = useRef<HTMLSpanElement | null>(null);
  const emailRef = useRef<HTMLSpanElement | null>(null);
  const tgRef = useRef<HTMLSpanElement | null>(null);
  const [img, setImage] = useAtom(ImgAtom)

  
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handlePopUp = (e: React.MouseEvent<HTMLSpanElement>, type: string) => {
    const target = e.currentTarget;
    navigator.clipboard.writeText(target.innerText)
    .then(() => {
      setPopupVisible(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setPopupVisible(prev => ({ ...prev, [type]: false }));
      }, 1000);
    })
    .catch(err => {
      console.error("Ошибка при копировании текста: ", err);
    });
  }
  const allEduSet = [
    {
          id: 0,
          text: "Диплом о базовом психологическом образовании",
          image: Diplom_NGTU_2022_1_srt,
    },
    {
          id: 1,
          text: "Диплом о психоаналитической переподготовке",
          image: Diplom_MIP_2024,
    },
    {
          id: 2,
          text: "Международный сертификат МШГА, COIRAG, EGATIN, EAP",
          image: Mezhdunarodny_Sertifikat,
    },
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
      useEffect(() => {
        if(img == 0 || img && img  < 10000){
          setLayout(true)
        }
      },[img])
  return (
    <div className="page">
      <header>
        <div className="font- text-left logo ">
        ПСИХОЛОГ-
        
          <br/>
          ПСИХОАНАЛИТИК</div>
          <div className="nav">
            <span className="cursor-pointer to767"
            onClick={() => scrollToSection(educationRef)}
            >Образование</span>
            <span className="cursor-pointer to767"
            onClick={() => scrollToSection(workFormRef)}
            >Формат работы</span>
            <span className="cursor-pointer zapis"
            onClick={() => {
              setLayout(true)
              setPopUp(true)
            }}
            ><span className="to568">
              Запись
              </span>
              <FaTelegram className="under568 tg_zap"/>
            </span>
          </div>
      </header>
      <main >

      {layout &&
        <div className="layout"
        onClick={() => {
          setLayout(false)
          if (popUp) setPopUp(false)
          else setImage(10000)
        }}>
        </div>
      }
      {img !== undefined &&  img < allEduSet.length  &&(
        <>
          <Image
          src={allEduSet[img].image}
          alt={allEduSet[img].text}
          className='popUpImage'
          />
        </>
        )}
        {popUp && (
          <>
            <div className="popUp">
              <div className="popUp_h"> 
                    Для записи:
              </div>  
              <div className="popUp_v">
                <div className="popUp_t wa">
                  <a href="https://wa.me/79994660717" target="_blank" rel="noopener noreferrer">
                  <Image
                  src={wp}
                  alt="Вацап"
                  width={400}
                  height={400}
                  />
                  </a>
                </div>

                <div className="popUp_t tm">
                  <a href="https://t.me/rpa4e8"
                    target="_blank" 
                    rel="noopener noreferrer">
                  <Image
                  src={tg}
                  alt="Телеграм"
                  width={400}
                  height={400}
                  />
                  </a>
                </div>
              <div className="popUp_t em">
            <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rp@4e8.ru&su=Запись%20на%20приём&body=" 
            target="_blank" rel="noopener noreferrer">
                <Image
                src={email}
                alt="Почта"
                width={400}
                height={200}
                />
              </a>
              </div>
              </div>
        </div>
      </>
      )}
        <div className="left gridim">
          <h1 className="name">Юрий Романович Грачёв</h1>
          <Image src={title_image}
          alt="Фото"
          width={600}
          height={400}
          priority 
          className="title_image"
          />
          <div className="text to767">
            Имею опыт работы с детьми, подростками и взрослыми. Специализируюсь на сфере отношений (партнёрские, детско-родительские, рабочие, отношение к себе) и выхода из кризисных ситуаций. В работе придерживаюсь психоаналитических принципов и этического кодекса.
          </div>
            <div className="text under768">
          Практикующий психоаналитически ориентированный психотерапевт и педагог-психолог. Член правления Новосибирского регионального отделения ЕАРПП, член Российского национального отделения Европейской Ассоциации Развития Психоанализа и Психотерапии, ЕАРПП НО ECPP (Vienna, Austria).
            </div>
            <ExtraEdu className="to767"/>
            <MainEdu className="under768"/>
            <div className="contacts to767">
                <p className="cont_label">
                  Контакты
                </p>
                <div className="contacts-head"> 
                  Телефон:
                  <span className="text-[#3B3EE3] ml cursor-pointer"
                onClick={(e) => handlePopUp(e, 'tele')}
                ref={teleRef}>
                +7 999 466-07-17
              </span>
              {popupVisible.tele ? (
                <div className="copy_popup visible">Телефон скопирован</div>
              ) :
              <div className="copy_popup">Телефон скопирован</div>
              }
            </div>
            <div className="contacts-head"> 
              Электронная почта:
              <span className="text-[#3B3EE3] ml cursor-pointer"
                ref={emailRef}
                onClick={(e) => handlePopUp(e, 'email')}>
                rp@4e8.ru
              </span>
              {popupVisible.email ? (
                <div className="copy_popup visible">Эл. почта скопирована</div>
              ) :
              <div className="copy_popup">Эл. почта скопирована</div>
              }
            </div>
            <div className="contacts-head"> 
              Телеграм-канал:
              <span className="text-[#3B3EE3] ml cursor-pointer"
                ref={tgRef}
                >
                  <a href="https://t.me/ncuxo_analiz" target="_blank" rel="noopener noreferrer">
                    t.me/ncuxo_analiz
                  </a>
              </span>
            </div>
          </div>
        </div>
        <div className="right gridim">
        <div className="text to767 mt">
          Практикующий психоаналитически ориентированный психотерапевт и педагог-психолог. Член правления Новосибирского регионального отделения ЕАРПП, член Российского национального отделения Европейской Ассоциации Развития Психоанализа и Психотерапии, ЕАРПП НО ECPP (Vienna, Austria).
            </div>
            <div className="text under768">
            Имею опыт работы с детьми, подростками и взрослыми. Специализируюсь на сфере отношений (партнёрские, детско-родительские, рабочие, отношение к себе) и выхода из кризисных ситуаций. В работе придерживаюсь психоаналитических принципов и этического кодекса.
            </div>
            <div ref={educationRef} className="to767"></div>
          <MainEdu className="to767"/>
          <ExtraEdu className="under768"/>

            <div className="text">
              Уверен, что источник изменений находится внутри человека. Работа с бессознательным – это совместный труд клиента и терапевта, результатом которого является личностный рост и принципиальное изменение качества жизни.
            </div>
            <div ref={workFormRef}></div>
            <ScrollCheck className="mt-10">
              <h1 className="pt-5 pl-16 pb-3 form_work">Формат работы:</h1>
              <ul className="pl-3 pb-10">
                  <li className="work">
                  Индивидуальный приём очно в кабинете в центре 
                  Новосибирска
                  </li>
                  <li className="work">
                  Онлайн из любой точки мира
                  </li>
                  <li className="work">
                  Время сессии ~ 50 минут
                  </li>
                  <li className="work">
                    Остальные условия 
                  обсуждаются индивидуально
                  </li>
              </ul>
            </ScrollCheck>
            <div className="contacts under768">
                <p className="cont_label">
                  Контакты
                </p>
                <div className="contacts-head"> 
                  Телефон:
                  <span className="text-[#3B3EE3] ml cursor-pointer"
                onClick={(e) => handlePopUp(e, 'tele')}
                ref={teleRef}>
                +7 999 466-07-17
              </span>
              {popupVisible.tele ? (
                <div className="copy_popup visible">Телефон скопирован</div>
              ) :
              <div className="copy_popup">Телефон скопирован</div>
              }
            </div>
            <div className="contacts-head"> 
              Электронная почта:
              <span className="text-[#3B3EE3] ml cursor-pointer"
                ref={emailRef}
                onClick={(e) => handlePopUp(e, 'email')}>
                rp@4e8.ru
              </span>
              {popupVisible.email ? (
                <div className="copy_popup visible">Эл. почта скопирована</div>
              ) :
              <div className="copy_popup">Эл. почта скопирована</div>
              }
            </div>
            <div className="contacts-head"> 
              Телеграм-канал:
              <span className="text-[#3B3EE3] ml cursor-pointer"
                ref={tgRef}
                >
                  <a href="https://t.me/ncuxo_analiz" target="_blank" rel="noopener noreferrer">
                    t.me/ncuxo_analiz
                  </a>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
