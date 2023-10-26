// CSS
import styles from './Home.module.css';

// Images slider
import Depoimento1 from '../../assets/images/home/depoimentos/depoimento1.png';
import Depoimento2 from '../../assets/images/home/depoimentos/depoimento2.png';
import Depoimento3 from '../../assets/images/home/depoimentos/depoimento3.png';

// Images ciclos
import ciclos_title from '../../assets/images/home/ciclos/ciclos.png';
import bercario from '../../assets/images/home/ciclos/bercario.png';
import infantil from '../../assets/images/home/ciclos/infantil.png';
import anos_iniciais from '../../assets/images/home/ciclos/anos_iniciais.png';
import anos_finais from '../../assets/images/home/ciclos/anos_finais.png';

// Depoimentos
import depoimentos_title from '../../assets/images/home/depoimentos/depoimentos.png'; 

// Depoimentos mobile
import depoimento1_mobile from '../../assets/images/home/depoimentos/mobile/depoimento1_mobile.png';
import depoimento2_mobile from '../../assets/images/home/depoimentos/mobile/depoimento2_mobile.png';

//images diferenciais
import diferenciais_title from '../../assets/images/home/diferenciais/diferenciais.png';
import propostapedagogica from '../../assets/images/home/diferenciais/propostapedagogica.png';
import projetos from '../../assets/images/home/diferenciais/projetos.png';
import smart from '../../assets/images/home/diferenciais/smart.png';
import valorizacao from '../../assets/images/home/diferenciais/valorizacao.png';
import infraestrutura from '../../assets/images/home/diferenciais/infraestrutura.png';
import pessoas from '../../assets/images/home/diferenciais/pessoas.png';
import sustentabilidade from '../../assets/images/home/diferenciais/sustentabilidade.png';
import moppe_social from '../../assets/images/home/diferenciais/moppe_social.png';

// Motion
import { motion } from 'framer-motion';

// Hooks
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// TypeWriter
import Typewriter from "typewriter-effect";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// Função que verifica se o componente esta na parte observavel da tela
function useIntersectionObserver(ref, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0.5) {
        callback();
        observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.5, 
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, callback]);
}

const Home = () => {
  // Controla os estados dos componentes da página
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Cria as referencias para os componentes
  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);

  // Chama a função para verificar se o componente esta na altura visivel da tela
  useIntersectionObserver(componentRef1, () => {
    setIsVisible1(true);
  });
  useIntersectionObserver(componentRef2, () => {
    setIsVisible2(true);
  });
  useIntersectionObserver(componentRef3, () => {
    setIsVisible3(true);
  });
  useIntersectionObserver(componentRef4, () => {
    setIsVisible4(true);
  });

    const [animateLine, setAnimateLine] = useState(false);
    const [ciclos, setCiclos] = useState(false);
    const [depoimentos, setDepoimentos] = useState(false);
    
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if(!isMobile) {
          setAnimateLine(scrollY > 200);
          setCiclos(scrollY > 1020);
          setDepoimentos(scrollY > 1600);
        } 
        else {
          setAnimateLine(scrollY > 300);
          setCiclos(scrollY > 2800);
          setDepoimentos(scrollY > 4500);
        }

      };
  
      handleScroll();
  
      window.addEventListener('scroll', handleScroll); 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    useEffect(() => {
      const checkScreenSize = () => {
        if(window.innerWidth < 1024) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      window.addEventListener('resize', checkScreenSize);
      checkScreenSize();

      return () => {
        window.removeEventListener('resize', checkScreenSize);
      }
    }, []);

    const getLineWidth = () => {
      const screenWidht = window.innerWidth;
      const lineWidth = screenWidht * 0.8;
      return lineWidth;
    };

  return (
    <div className={styles.home}>
        {/* Banner mobile */}
        <section className={styles.banner_mobile}>
            {/* <div className={styles.text_banner}>
            </div> */}
        </section>
        {/* Banner desktop */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
        >
          <section className={styles.banner}>
            <div className={styles.conteudo_banner}>
              <h2 className={styles.titulo_banner}>
              <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Seja bem vindo(a)")
                          .pauseFor(50)
                          .deleteAll()
                          .changeDelay(40)
                          .typeString("A Moppe tem a <b>missão de transformar o mundo</b> por meio de uma educação forte aliada ao prazer de aprender, com intuito maior de explorar o potencial de cada aluno. ")
                          .start();
                  }}
              /> 
              </h2>
            </div>
          </section>
        </motion.div>

        <section className={styles.slider}>
        <motion.div
          ref={componentRef1}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible1 ? 1 : 0 }} 
          transition={{ duration: 1 }}
        >
          <img src={diferenciais_title} alt="Diferenciais" className={styles.img_title} />
        </motion.div>
          {animateLine && (
            <motion.hr
              initial={{ width: 1 }}
              animate={{ width: isMobile ? getLineWidth() : 900 }}
              transition={{ type: "tween", duration: 3 }}
              style={{ originX: 0, color:'#ea8923' }}
            />
            )}
        </section>
        <section className={styles.slider}>
          <motion.div
            ref={componentRef2}
            initial={{opacity: 0}}
            animate={{opacity: isVisible2 ? 1 : 0}}
            transition={{duration: 1}}
          >
            <div className={styles.box_diferenciais}>
              <div className={styles.box_column}>
                <div className={styles.diferenciais}>
                  <img src={propostapedagogica} alt="Proposta pedagógica" />
                  <p>Proposta pedagógica única</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={projetos} alt="Projetos e programas diferenciados" />
                  <p>Projetos e programas diferenciados</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={smart} alt="Smart" />
                  <p>SMART - programa de língua inglesa da Moppe</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={valorizacao} alt="Valorização de esportes e artes" />
                  <p>Valorização do esporte e a Arte</p>
                </div>
              </div>
              <div className={styles.box_column}>
                <div className={styles.diferenciais}>
                  <img src={infraestrutura} alt="Infraestrutura" />
                  <p>Infraestrutura moderna e conectada a natureza</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={pessoas} alt="Pessoas" />
                  <p>Pessoas que dão vida à missão da Moppe</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={sustentabilidade} alt="Sustentabilidade" />
                  <p>Sustentabilidade</p>
                </div>
                <div className={styles.diferenciais}>
                  <img src={moppe_social} alt="Sustentabilidade" />
                  <p>Moppe social</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <motion.div
            ref={componentRef3}
            initial={{opacity: 0}}
            animate={{opacity: isVisible3 ? 1 : 0}}
            transition={{duration: 1}}
          >
          <section className={styles.title_ciclos}>
            <div className={styles.ciclos}>
              <img src={ciclos_title} alt="Ciclos" className={styles.img_title} />
              {ciclos && (
                <motion.hr
                  initial={{ width: 0 }}
                  animate={{ width: isMobile ? getLineWidth() : 900}}
                  transition={{ type: "tween", duration: 3 }}
                  style={{ originX: 0, color:'#ea8923' }}
                />

              )}


            </div>
          </section>
          <section className={styles.container_ciclos}>
            <div className={styles.containerbox_ciclos}>
              <div className={styles.carousel_ciclos}>
                <Link to="/bercario">
                <img src={bercario} alt="Bambini" />
                </Link>
              </div>
              <div className={styles.carousel_ciclos}>
                <Link to="/infantil">
                  <img src={infantil} alt="Infantil" />
                </Link>
              </div>
              <div className={styles.carousel_ciclos}>
                <Link to="/anosiniciais">
                  <img src={anos_iniciais} alt="Anos iniciais" />
                </Link>
              </div>
              <div className={styles.carousel_ciclos}>
                <Link to="/anosfinais">
                  <img src={anos_finais} alt="Anos finais" />
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
          <motion.div
            ref={componentRef4}
            initial={{opacity: 0}}
            animate={{opacity: isVisible4 ? 1 : 0}}
            transition={{duration: 1}}
          >
            <section className={styles.slider}>
              <img src={depoimentos_title} alt="Depoimentos" className={styles.img_title}/>
              {depoimentos && (
              <motion.hr
                initial={{ width: 1 }}
                animate={{ width: isMobile ? getLineWidth() : 900 }}
                transition={{ type: "tween", duration: 3 }}
                style={{ originX: 0, color:'#ea8923' }}
              />
              )}
              {!isMobile && (
                <Carousel 
                  showArrows={true} 
                  showThumbs={false} 
                  autoPlay={true} 
                  infiniteLoop={true} 
                  selectedItem={0} 
                  showStatus={false}
                  className={styles.custom_carousel}
                  swipeable={true}
                  emulateTouch={true}>
                    <div>
                      <img src={!isMobile ? Depoimento1 : depoimento1_mobile} alt="Depoimento 1"/>
                    </div>
                    <div>
                      <img src={Depoimento2} alt="Depoimento 2"/>
                    </div>
                    <div>
                      <img src={Depoimento3} alt="Depoimento 3"/>
                    </div>
                </Carousel>
              )}
              {isMobile && (
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={styles.swiper}
              >
                <SwiperSlide className={styles.swiper_slide}><img src={depoimento1_mobile} alt="Depoimento" /></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}><img src={depoimento2_mobile} alt="Depoimento" /></SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
              </Swiper>
              )}

            </section>
          </motion.div>
    </div>
  );
};

export default Home;