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
import XVIISertificat from "../../public/Сертификат XVII ЗШ_page-0001.jpg"
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

const problems = [
  {id: 1, text: "Проблемы в отношениях"},
  {id: 2, text: "Трудности самоопределения"},
  {id: 3, text: "Эмоциональная зависимость"},
  {id: 4, text: "Отсутствие цели"},
  {id: 5, text: "Нестабильная самооценка"},
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
    text: "Удостоверение ИСПиП 2021",
    image: Udostoverenie_ISPiP_Yan_Fyodorov_2021,
  },    
  {
      id: 4,
      text: "Сертификат НПК ЕАРПП РО-Новосибирск 2021",
      image: Sertifikat_NPK_EARPP_RO_Nov_21,
  },
  {
    id: 5,
      text: "Сертификат НПК ЕАРПП РО-Новосибирск 2022",
      image: Sertifikat_NPK_EARPP_RO_22,
  },
  {
    id: 6,
    text: "Удостоверение ГЦОЗ Магистр 2023",
    image: Udostoverenie_GTsOZ_Magistr_2023,
  },
  {
    id: 7,
    text: "Удостоверение НИПКиПРО 2024",
    image: Udostoverenie_NIPKiPRO_2024,
  },
  {
    id: 8,
    text: "Сертификат НПК ЕАРПП РО-Санкт-Петербург 2023",
    image: Sertifikat_NPK_EARPP_RO_23,
  },
  {
    id: 9,
    text: "Сертификат НПК ЕАРПП РО-Екатеринбург 2023",
    image: Sertifikat_NPK_EARPP_RO_Eka,
  },
  {
    id: 10,
    text: "Сертификат НГПУ 2024",
    image: Sertifikat_NGPU_2024,
  },
  {
    id: 11,
    text: "Сертифкат Зимней Школы",
    image:XVIISertificat
  }   
]

export default function Home() {
  const [popupVisible, setPopupVisible] = useState({
    tele: false,
  });
  const [layout, setLayout] = useState<boolean>(false);
  const [img, setImage] = useAtom(ImgAtom);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const teleref = useRef<HTMLSpanElement>(null);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const copiedRef = useRef<HTMLDivElement>(null)
  const visRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.2 } 
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

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (copiedRef.current && visRef.current && !copiedRef.current.contains(e.target as Node) && !visRef.current.contains(e.target as Node)) {
          copiedRef.current.classList.remove('vis')
          console.log('sdgsdf')
        }
        console.log('dfdf')
      };

      document.addEventListener('click', handleClickOutside);
      
    }, []);


  useEffect(() => {
    if (img !== undefined && img < 10000) {
      setLayout(true);
    } else {
      setLayout(false)
    }
    console.log(img)
  },[img])


  return (
    <div className="page">
      <div className='telcircle'
      ref={visRef}
      onClick={() => {
        copiedRef.current?.classList.add('vis')
        if(copiedRef.current)
        console.log(copiedRef.current.classList)
      }
      }
      >
        Запись
      </div>

        <div 
        ref={copiedRef}
        className="copied">
            <div>
                  <Image
                  src={ws}
                  alt='WP'
                  className='copiImage'
                  />
                  <a className='pl-2'
                  href="https://wa.me/79994660717" target="_blank">
                  Написать в WhatsApp
                  </a>
                </div>
                <div>
                <Image
                  src={tg}
                  alt='ТГ'
                  className='copiImage'
                  />
              <a href="https://t.me/rpa4e8"
                target="_blank" 
                rel="noopener noreferrer" 
                className='pl-2'>
                Написать в Telegram
              </a>
              </div>
              <div>
                <div>
                  <Image
                  src={em}
                  alt='ТГ'
                  className='copiImage em'
                  />
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rp@4e8.ru&su=Запись%20на%20приём&body=" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='pl-3'>
                  Написать на почту
                </a>
                </div>
          </div>
        </div>

      <main>
      {layout && img !== undefined &&
      <>
        <div className="layout"
        onClick={() => {
          setLayout(false)
          setImage(10001)
        }}>
        </div>
          <div className="arrow left"
          onClick={() => {
            if(img > 0) {
              setImage(img-1)
            } else if (img == 0){
              setImage(11)
              }
            }
          }
          >&#10094;</div>
          <div className="arrow right"
          onClick={() =>  {
            if(img< 11) {
              setImage(img+1)
            } else if (img == 11){
              setImage(0)
              }
            }
          }
          >&#10095;
          </div>
        </>
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
        <h1 className='name under767'>Меня зовут Юрий Грачёв</h1>
          <Image src={title_image}
          alt="Фото"
          width={600}
          height={400}
          priority 
          className="title_image"
          />
          <div className='righttop'>
              <h1 className='name to767'>Меня зовут Юрий Грачёв</h1>
              <Text
                  place={0}
                  text={`Я психоаналитически ориентированный психотерапевт. 
                  Являюсь членом национального отделения Европейской Ассоциации Развития Психоанализа и Психотерапии в России, ЕАРПП НО ECPP (Vienna, Austria) и членом правления регионального Новосибирского отделения ЕАРПП.`}
              />
            </div>
            <div className='text pt-[20px]'>
              <h5> Некоторые примеры запросов, с которыми ко мне можно обратиться:</h5>
              <ul className='flex flex-col pt-[30px]'>
                {problems.map((problem, index) => (
                <motion.li
                className='list-item'
                style={{
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
                  opacity: { ease: "linear", delay: isVisible ? index * 0.7 : 0 },
                  backgroundPosition: { duration: 8, ease: 'linear', repeat: Infinity, delay: index + 1 },
                }}
              >
                {problem.text}
                </motion.li>

                ))}
              </ul>
            </div>
          
          <MainEdu/>

          
        </div>
        <h1 className="dopEdu">Удостоверения и сертификаты о повышении квалификации:</h1>
        <ExtraEdu/>
        <div className="secondGrid ">
        <Image
            className='under767 im2'
            alt='Моё фото'
            src={Im2}
            />
          <Text 
            className='pt10' place={2}
            text={`Работаю с детьми, подростками и взрослыми. Специализируюсь на сфере отношений (партнёрские, детско-родительские, рабочие, отношение к себе) и выхода из кризисных ситуаций. 
            В работе придерживаюсь психоаналитических принципов и этического кодекса. 
            Очный приём веду в кабинете в центре Новосибирска, онлайн-встреча возможна из любой точки мира через современные мессенджеры.`}/>
            <Image
            className=' to767 im2'
            alt='Моё фото'
            src={Im2}
            />
            
        </div>
          <div className="form">
            <h1 className="form_work">Формат работы</h1>
            <ul className='f_nts'>
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
                  opacity: {delay: isVisible2 ? 0.2 : 0 },
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
                  opacity: {delay: isVisible2 ? 1.2 : 0 },
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
                  opacity: {delay: isVisible2 ? 2 : 0 },
                }}
                >
                  <Image alt={"часы"}
                  src={clocks}
                  height={130}
                  className='imageJob cl pt-[20px]'/>
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
                  opacity: {delay: isVisible2 ? 3: 0 },
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
            <div>
            {popupVisible.tele ? (
                <div className="copy_popup visible">Телефон скопирован</div>
              ) :
              <div className="copy_popup">Телефон скопирован</div>
              }
                <Image
                  src={ws}
                  alt='WP'
                  className='footerImage WP'
                  />
                <span className="cursor-pointer pl-3"
                onClick={(e) => handlePopUp(e, 'tele')}
                ref={teleref}>
                +7 999 466-07-17
                </span>
              </div>
              <div>
                  <Image
                  src={tg}
                  alt='ТГ'
                  className='footerImage'
                  />
                  <span>                  <a href="https://t.me/ncuxo_analiz" target="_blank" rel="noopener noreferrer" className='pl-3 cursor-pointer'>
                    Мой телеграм-канал
                  </a></span>
                </div>
      </footer>
    </div>
  );
}
