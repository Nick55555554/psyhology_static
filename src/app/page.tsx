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
import tg from "../../public/tg.png"
import ws from "../../public/wp.png"
import em from "../../public/email.png"
import { motion } from "motion/react"
import online from "../../public/fornat/online.webp"
import offline from "../../public/fornat/offline.png"
import clocks from "../../public/fornat/clocks.webp"
import individual from "../../public/fornat/individual.png"
import title_image from "../../public/title-image.jpg";
import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import { ImgAtom, MainEdu } from "./components/MainEdu";
import { ExtraEdu } from "./components/ExtraEdu";
import Image from "next/image";
import { useAtom } from "jotai";
import Text from './components/text';
import Im2 from "../../public/Im2.jpg"


export default function Home() {
  const [popupVisible, setPopupVisible] = useState({
    tele: false,
    email: false,
  });
  const [layout, setLayout] = useState<boolean>(false)
  const [popUp, setPopUp] = useState<boolean>(false)
  // const educationRef = useRef<HTMLDivElement>(null);
  // const workFormRef = useRef<HTMLDivElement>(null);
  const teleRef = useRef<HTMLSpanElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  // const tgRef = useRef<HTMLSpanElement>(null);
  const [img, setImage] = useAtom(ImgAtom);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); 
            }
          });
      },
      { threshold: 1 } 
    );

    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item) => observer.observe(item));


    const observer2 = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible2(true);
              observer2.unobserve(entry.target); 
            }
          });
      },
      { threshold: 1 } 
    );

    const listItems2 = document.querySelectorAll('.liJob.work');
    listItems2.forEach((item) => observer2.observe(item));

    return () => {
      listItems.forEach((item) => observer.unobserve(item));
      listItems2.forEach((item) => observer2.unobserve(item));
    };
  }, []);

  
  const handlePopUp = (e: React.MouseEvent<HTMLSpanElement>, type: string) => {
    const target = e.currentTarget;
    navigator.clipboard.writeText(target.innerText)
    .then(() => {
      setPopupVisible(prev => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setPopupVisible(prev => ({ ...prev, [type]: false }));
      }, 1000);
    })
  }
  const problems = [
    {id: 1, text: "Проблемы в отношениях"},
    {id: 2, text: "Прокрастинация"},
    {id: 3, text: "Трудности самоопределения"},
    {id: 4, text: "Нестабильная самооценка"},
    {id: 5, text: "Ощущение одиночества"},
    {id: 6, text: "Перепады настроения"},
    {id: 7, text: "Отсутствие цели"},
  ]
  

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
      {/* <header>
        <div className="font- text-left logo ">
        ПСИХОЛОГ-
        
          <br/>
          ПСИХОАНАЛИТИК</div>
          <div className="nav">
            {/* <span className="cursor-pointer to767"
            onClick={() => scrollToSection(educationRef)}
            >Образование</span>
            <span className="cursor-pointer to767"
            onClick={() => scrollToSection(workFormRef)}
            >Формат работы</span> 
            <div className="cursor-pointer zapis"
            onClick={() => {
            }}
            >

            <a href="https://wa.me/79994660717" target="_blank" rel="noopener noreferrer">
            <Image
            src={wp}
            alt="Вацап"
            width={80}
            height={80}
            className='soc upto374'
            />
            </a>
            <a href="https://t.me/rpa4e8"
              target="_blank" 
              rel="noopener noreferrer">
            <Image
            src={tg}
            alt="Телеграм"
            width={80}
            height={80}
            className='soc'
            />
            </a>
      <a 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=rp@4e8.ru&su=Запись%20на%20приём&body=" 
      target="_blank" rel="noopener noreferrer">
          <Image
          src={email}
          alt="Почта"
          width={80}
          height={80}
          className='soc upto374'
          />
        </a>
            </div>
          </div>
      </header> */}
      <main>
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
        <div className="firstGrid">
          <Image src={title_image}
          alt="Фото"
          width={600}
          height={400}
          priority 
          className="title_image"
          />
          <div className='righttop'>
              <h1 className='name'>Меня зовут Юрий Грачёв</h1>
              <Text
                  place={0}
                  text='Я психоаналитически ориентированный психотерапевт. Являюсь членом национального отделения Европейской Ассоциации Развития Психоанализа и Психотерапии в России, ЕАРПП НО ECPP (Vienna, Austria) и членом правления регионального Новосибирского отделения ЕАРПП.'
              />
            </div>
            <Text 
            
            className='self-center pl0' place={2} text='Имею опыт работы с детьми, подростками и взрослыми. Специализируюсь на сфере отношений (партнёрские, детско-родительские, рабочие, отношение к себе) и выхода из кризисных ситуаций. В работе придерживаюсь психоаналитических принципов и этического кодекса. Очный приём веду в кабинете в центре Новосибирска, онлайн-встреча возможна из любой точки мира через современные мессенджеры.' />
          <MainEdu/>

            {/* <div className="contacts to767">
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
          </div> */}
        </div>
        <h1 className="dopEdu">Удостоверения и сертификаты о повышении квалификации:</h1>
        <ExtraEdu/>
        <div className="secondGrid ">
            <div className='text'>
              <h5> Некоторые примеры запросов, с которыми ко мне можно обратиться:</h5>
              <ul className='flex flex-col pt-[30px]'>
                {problems.map((problem, index) => (
                <motion.li
                className='list-item'
                style={{
                  height: '60px',
                  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(128, 128, 128, 0.4) 100%)',
                  backgroundSize: '400% 400%',
                  margin: "5px",
                  textAlign: "left",
                  padding: "10px"
                }}
                key={problem.id}
                initial={{opacity: 0}}
                animate={isVisible ? {
                  opacity: 1,
                  scale: 1,
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                } : {}}
                transition={{
                  default: { type: "spring"},
                  opacity: { ease: "linear", delay: isVisible ? 0.5 + index * 0.3 : 0 },
                  backgroundPosition: { duration: 5, ease: 'linear', repeat: Infinity, delay: index + 1 },
                }}
              >
                {problem.text}
                </motion.li>

                ))}
              </ul>
            </div>
            <Image
            className=' im2'
            alt='Моё фото'
            src={Im2}
            height={600}
            />
            
        </div>
          <div className="form">
            <h1 className="form_work">Формат работы</h1>
            <ul className='pl-3 flex flex-row list-none justify-center items-start w-[90%]'>
                <motion.li 
                className='liJob work'
                initial={{ x: -5, opacity: 0, scale: 0.4}}
                animate={isVisible2 ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                } : {}}
                transition={{
                  default: { type: "spring"},
                  opacity: {delay: isVisible2 ? 1 * 0.5 : 0 },
                }}
                >
                  <Image alt={"оффлайн"}
                  src={offline}
                  height={160}
                  className='imageJob'/>
                  <span className='pt-[10px]'> 
                  Индивидуальный приём очно в центре  Новосибирска
                  </span>
                </motion.li>
                <motion.li 
                className='liJob work'
                initial={{ x: -5, opacity: 0, scale: 0.4}}
                animate={isVisible2 ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                } : {}}
                transition={{
                  default: { type: "spring"},
                  opacity: {delay: isVisible2 ? 1 * 0.5 + 1 : 0 },
                }}
                
                >
                  <Image alt={"онлайн"}
                  src={online}
                  height={160}
                  className='imageJob'/>
                  <span className='pt-[10px]'> 
                  Онлайн из любой точки мира
                  </span>
                </motion.li>
                <motion.li 
                className='liJob work'
                initial={{ x: -5, opacity: 0, scale: 0.4}}
                animate={isVisible2 ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                } : {}}
                transition={{
                  default: { type: "spring"},
                  opacity: {delay: isVisible2 ? 1 * 0.5 + 2 : 0 },
                }}
                >
                  <Image alt={"часы"}
                  src={clocks}
                  height={130}
                  className='imageJob pt-[20px]'/>
                  <span className='pt-[20px]'> 
                  Время сессии ~ 50 минут
                  </span>
                </motion.li>
                <motion.li 
                className='liJob work'
                initial={{ x: -5, opacity: 0, scale: 0.4}}
                animate={isVisible2 ? {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                } : {}}
                transition={{
                  default: { type: "spring"},
                  opacity: {delay: isVisible2 ? 1 * 0.5 + 3: 0 },
                }}
                >
                  <Image alt={"условия"}
                  src={individual}
                  height={120}
                  className='imageJob pt-[30px]'/>
                  <span className='pt-[20px]'> 
                  Остальные условия обсуждаются индивидуально
                  </span>
                </motion.li>
            </ul>
        </div>
          <div className='w100'>
            Уверен, что источник изменений находится внутри человека. Работа с бессознательным – это совместный труд клиента и терапевта, результатом которого является личностный рост и принципиальное изменение качества жизни.
          </div>
      </main>
      <footer>
            <div className='zapis'>
                <div>
                  <Image
                  src={tg}
                  alt='ТГ'
                  className='footerImage'
                  />
                  <a href="https://t.me/ncuxo_analiz" target="_blank" rel="noopener noreferrer" className='pl-3'>
                    Мой телеграм-канал
                  </a>
                </div>
                <div>
                <Image
                  src={tg}
                  alt='ТГ'
                  className='footerImage'
                  />
                  <a href="https://t.me/rpa4e8"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='pl-3'>
                    Написать в телеграм
                  </a>
                </div>
              </div>
              
              <div className="zapis">
              {popupVisible.tele ? (
                <div className="copy_popup visible">Телефон скопирован</div>
              ) :
              <div className="copy_popup">Телефон скопирован</div>
              }
              <div>
              <Image
                  src={em}
                  alt='ТГ'
                  className='footerImage'
                  />
              <span className="cursor-pointer pl-3"
                ref={emailRef}
                onClick={(e) => handlePopUp(e, 'email')}>
                rp@4e8.ru
              </span>
              </div>
              {popupVisible.email ? (
                <div className="copy_popup visible">Эл. почта скопирована</div>
              ) :
              <div className="copy_popup">Эл. почта скопирована</div>
              } 
              <div>
              <Image
                  src={ws}
                  alt='WP'
                  className='footerImage WP'
                  />
                <span className="cursor-pointer pl-3"
                onClick={(e) => handlePopUp(e, 'tele')}
                ref={teleRef}>
                +7 999 466-07-17
              </span>
              </div>
            </div>
      </footer>
    </div>
  );
}
