'use client'
import Image from "next/image";
import title_image from "./images/title-image.jpg"
import "./styles.scss"
import {useRef, useState } from "react";
import { ScrollCheck } from "./ui/scrollCheck";
import { MainEdu } from "./components/MainEdu";
import { ExtraEdu } from "./components/ExtraEdu";



export default function Home() {
  const [popupVisible, setPopupVisible] = useState({
    tele: false,
    email: false,
    tg: false,
  });
  const educationRef = useRef(null);
  const workFormRef = useRef(null);
  const ContactsRef = useRef(null);
  const teleRef = useRef<HTMLSpanElement | null>(null);
  const emailRef = useRef<HTMLSpanElement | null>(null);
  const tgRef = useRef<HTMLSpanElement | null>(null);
  const scrollToSection = (ref:any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handlePopUp = (e:React.MouseEvent<HTMLSpanElement>, type: string) => {
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
        })
    }

  


  return (
    <div className="">
      <header>
        <div className="font-medium text-left pl-24 logo">
          Психолог-
          <br/>
          психоаналитик</div>
          <div className="nav">
            <span className="cursor-pointer"
            onClick={() => scrollToSection(educationRef)}
            >Образование</span>
            <span className="cursor-pointer"
            onClick={() => scrollToSection(workFormRef)}
            >Формат работы</span>
            <span className="cursor-pointer"
            onClick={() => scrollToSection(ContactsRef)}
            >Запись на приём</span>
          </div>
      </header>
      <main >
        <div className="left flexim">
          <h1 className="name">Юрий Романович Грачёв</h1>
            <Image src={title_image}
            alt="Фото"
            width={550}
            objectFit="cover"
            className="title_image"
            />
            <div className="text">
            Имею опыт работы с детьми, подростками и взрослыми. Специализируюсь на сфере отношений (партнёрские, детско-родительские, рабочие, отношение к себе) и выхода из кризисных ситуаций. В работе придерживаюсь психоаналитических принципов и этического кодекса.
            </div>
            <ExtraEdu/>
            <div className="contacts"ref={workFormRef}>
                <p className="cont_label">Запись на приём</p>
                <div className="contacts-head"> 
                  Телефон:
                  <span className="text-[#3B3EE3] ml-5 cursor-pointer"
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
              <span className="text-[#3B3EE3] ml-5 cursor-pointer"
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
              <span className="text-[#3B3EE3] ml-5 cursor-pointer"
                ref={tgRef}
                onClick={(e) => handlePopUp(e, 'tg')}>
                t.me/ncuxo_analiz
              </span>
              {popupVisible.tg ? (
                <div className="copy_popup visible">Ссылка скопирована</div>
              ) :
              <div className="copy_popup">Ссылка скопирована</div>
              }
            </div>
          </div>
        </div>
        <div className="right flexim">
        <div className="text mt-4">
          Практикующий психоаналитически ориентированный психотерапевт и педагог-психолог. Член Российского национального отделения Европейской Ассоциации Развития Психоанализа и Психотерапии, ЕАРПП НО ECPP (Vienna, Austria), член правления Новосибирского регионального отделения ЕАРПП.
            </div>
            <div ref={educationRef}></div>
          <MainEdu/>

            <div className="text">
              Уверен, что источник изменений находится внутри человека. Работа с бессознательным – это совместный труд клиента и терапевта, результатом которого является личностный рост и принципиальное изменение качества жизни.
            </div>
            <div ref={ContactsRef}></div>
            <ScrollCheck className="mt-10">
              <h1 className="pt-5 pl-16 pb-3">Формат работы:</h1>
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
        </div>
      </main>
    </div>
  );
}
