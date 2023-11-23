//CSS
import { Container, Banner, BannerMobile, Titulo, LinhaTitulo, Img1, Img2, Img3, BoxImages, ImgEstFis, BoxMuitoMais, TitleEstrutura, Column, Box } from './styles';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

// Images
import title_page from '../../../assets/images/infantil/title_infantil.png';
import img1_diversidade from '../../../assets/images/infantil/img1_diversidade.png';
import img2_diversidade from '../../../assets/images/infantil/img2_diversidade.png';
import img3_diversidade from '../../../assets/images/infantil/img3_diversidade.png';
import img4_diversidade from '../../../assets/images/infantil/img4_diversidade.png';
import img5_diversidade from '../../../assets/images/infantil/img5_diversidade.png';
import img2_projetos from '../../../assets/images/infantil/img2_projetos.png';
import img_estrutura from '../../../assets/images/infantil/img_estrutura.png';
import img2_estrutura from '../../../assets/images/infantil/img2_estrutura.png';
import img3_estrutura from '../../../assets/images/infantil/img3_estrutura.png';
import ed_fisica from '../../../assets/images/infantil/ed_fisica.png';
import livro from '../../../assets/images/infantil/troca_livro.png';
import musica from '../../../assets/images/infantil/musica.png';
import smart from '../../../assets/images/infantil/smart.png';
import culinaria from '../../../assets/images/infantil/culinaria.png';
import historia from '../../../assets/images/infantil/historia.png';
import img1 from '../../../assets/images/infantil/img1.png';
import img2 from '../../../assets/images/infantil/img2.png';
import ImgBanner from '../../../assets/images/banners/Infantil.png';
import ImgBannerMobile from '../../../assets/images/banners_mobile/ed_infantil.png';

function useIntersectionObserver(ref, callback) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0.65) {
        callback();
        observer.unobserve(ref.current);
      }
    }, {
      threshold: 0.65, 
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

const Infantil = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  //const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  //const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);
  const componentRef9 = useRef(null);

  useIntersectionObserver(componentRef1, () => {
    setIsVisible1(true);
  });
  useIntersectionObserver(componentRef2, () => {
    setIsVisible2(true);
  });
  // useIntersectionObserver(componentRef3, () => {
  //   setIsVisible3(true);
  // });
  useIntersectionObserver(componentRef4, () => {
    setIsVisible4(true);
  });
  useIntersectionObserver(componentRef5, () => {
    setIsVisible5(true);
  });
  useIntersectionObserver(componentRef6, () => {
    setIsVisible6(true);
  });
  useIntersectionObserver(componentRef7, () => {
    setIsVisible7(true);
  });
  useIntersectionObserver(componentRef9, () => {
    setIsVisible9(true);
  });


  return (
    <Container>
      <Banner imageUrl={ImgBanner}/>
      <BannerMobile imageUrl={ImgBannerMobile} />
      <Titulo>
        <img src={title_page} alt="Infantil"/>
      </Titulo>
      <LinhaTitulo>
        <motion.div
              ref={componentRef9}
              initial={{opacity: 0}}
              animate={{opacity: isVisible9 ? 1 : 0}}
              transition={{duration: 1.5}}
        >
          {isVisible9 && (
          <motion.hr
            initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
            animate={{ width: '63%' }}
            transition={{ type: 'tween', duration: 2 }}
            style={{ originX: 0 }}
          />
          )}
        </motion.div>
      </LinhaTitulo>
      <div className="box_conteudo">
      <motion.div
          className="conteudo"
          ref={componentRef1}
          initial={{opacity: 0}}
          animate={{opacity: isVisible1 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <p>O desenvolvimento do currículo da Educação Infantil está centrado no descobrimento de si mesmo e do meio em que a criança vive.</p>
              <p>Acreditamos que a vivência, a prática, a investigação e a resolução de situações-problema são os caminhos para a aprendizagem.</p>
              <p>A Moppe é um grande palco para essas experiências, pois conta com um ambiente que estimula a criatividade, a autonomia e a curiosidade dos alunos.</p>
            </Column>
            <Column>
              <Img1 src={img1} alt="Infantil" />
            </Column>
          </Box>

        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <Img2 src={img1_diversidade} alt="Infantil" />
            </Column>
            <Column>
              <h1>Diversidade de propostas e materiais</h1>
              <p>Culinária, música, educação física, inglês, biblioteca, entre outras...</p>
              <p>Vamos além de uma aprendizagem baseada somente em transmissão de conteúdo e informações. Articulamos situações diferenciadas em sua rotina escolar, e cuidamos do ambiente para que a aprendizagem ocorra garantindo a participação ativa da criança. A escolha dos materiais, a linguagem que eles indicam, a forma como estão dispostos potencializam as experiências das crianças, convidando-as a desenvolver a autonomia para o criar, o aprender, o pesquisar e o investigar.</p>
            </Column>
          </Box>

        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef2}
          initial={{opacity: 0}}
          animate={{opacity: isVisible2 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <BoxImages>
            <img src={img2_diversidade} alt="Infantil" />
            <img src={img3_diversidade} alt="Infantil" />
            <img src={img4_diversidade} alt="Infantil" />
            <img src={img5_diversidade} alt="Infantil" />
          </BoxImages>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef4}
          initial={{opacity: 0}}
          animate={{opacity: isVisible4 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <h1>Projetos investigativos</h1>
              <p>Os projetos partem da observação das crianças, alimentadas pelas intervenções do professor, com sua escuta ativa, para fazer pensar, imaginar, levantar hipóteses, planejar e resolver problemas.</p>
              <p>Assim, as experiências de investigação e construção do conhecimento tornam-se significativas.</p>
            </Column>
            <Column>
              <Img2 src={img2} alt="Infantil" />
            </Column>
          </Box>
        </motion.div>
      
        <motion.div
          className="conteudo"
          ref={componentRef5}
          initial={{opacity: 0}}
          animate={{opacity: isVisible5 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <Img2 src={img2_projetos} alt="Infantil" />
            </Column>
            <Column>
              <h1>Ambiente socializador</h1>
              <p>Consideramos a criança pequena como um sujeito capaz. Nosso currículo é apoiado em experiências que promovam a construção da identidade, as interações, os saberes do corpo, as múltiplas expressões e a linguagem. </p>
            </Column>
          </Box>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef6}
          initial={{opacity: 0}}
          animate={{opacity: isVisible6 ? 1 : 1}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
            <TitleEstrutura>Estrutura física como &quot;Quintal do saber&quot;</TitleEstrutura>
              <p>Os espaços, externos e internos, são pensados e organizados para provocar a construção do conhecimento, despertar a curiosidade e a criatividade. Aqui há espaço para perguntas, experimentação e descobertas incríveis! </p>
              <ImgEstFis>
                <img src={img2_estrutura} alt="Estrutura" />
                <img src={img3_estrutura} alt="Estrutura" />
              </ImgEstFis>
            </Column>
            <Column>
              <Img3 src={img_estrutura} alt="Infantil" />
            </Column>
          </Box>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef7}
          initial={{opacity: 0}}
          animate={{opacity: isVisible7 ? 1 : 1}}
          transition={{duration: 1.5}}
        >
          <Column>
            <div>
              <h1>Muito mais...</h1>
              <BoxMuitoMais>
                <img src={ed_fisica} alt="Estrutura" />
                <img src={livro} alt="Estrutura" />
                <img src={musica} alt="Estrutura" />
                <img src={smart} alt="Estrutura" />
                <img src={culinaria} alt="Estrutura" />
                <img src={historia} alt="Estrutura" />
              </BoxMuitoMais>
            </div>
          </Column>
        </motion.div>
      </div>
    </Container>
  )
}

export default Infantil