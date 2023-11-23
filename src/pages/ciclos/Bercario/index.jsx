//CSS
import { Container, Banner, BannerMobile, Titulo, LinhaTitulo, Box, Column, Box1, Box2, Img1, Img2, Img3 } from './styles';

//Motion
import { motion } from 'framer-motion';

//Hooks
import { useState, useEffect, useRef } from 'react';

// Images
import img_title from '../../../assets/images/bercario/bercario_title.png';
import img1 from '../../../assets/images/bercario/img1.png';
import img2 from '../../../assets/images/bercario/img2.png';
import img3 from '../../../assets/images/bercario/img3.png';
import img4 from '../../../assets/images/bercario/img4.png';
import cameras from '../../../assets/images/bercario/cameras.png';
import alimentacao from '../../../assets/images/bercario/alimentacao.png';
import ImgBanner from '../../../assets/images/banners/Bercario.png';
import ImgBannerMobile from '../../../assets/images/banners_mobile/bambini.png';

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

const Bercario = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);

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
    useIntersectionObserver(componentRef5, () => {
      setIsVisible5(true);
    });
    useIntersectionObserver(componentRef6, () => {
      setIsVisible6(true);
    });
    useIntersectionObserver(componentRef7, () => {
      setIsVisible7(true);
    });


  return (
    <Container>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <Banner imageUrl={ImgBanner}/>
        <BannerMobile imageUrl={ImgBannerMobile} />
      </motion.div>
      <Titulo>
        <img src={img_title} alt="Bercario" />
      </Titulo>
      <LinhaTitulo>
        <motion.div
                ref={componentRef7}
                initial={{opacity: 0}}
                animate={{opacity: isVisible7 ? 1 : 0}}
                transition={{duration: 1.5}}
        > 
        {isVisible7 && (
          <motion.hr
            initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
            animate={{ width: '80%' }}
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
              <Img1 src={img1} alt="Bercario" />
            </Column>
            <Column>
              <p>Os primeiros anos da vida do bebê são os mais importantes para o futuro desenvolvimento de suas emoções, inteligência e capacidade motora. Por isso, o Berçário Moppe Bambini oferece às crianças os estímulos adequados em um ambiente planejado, seguro e cercado de muito carinho.</p>
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
              <h1>Diversidade de propostas e materiais</h1>
              <p>Vamos além de uma aprendizagem baseada somente em transmissão de conteúdo e informações. Articulamos situações diferenciadas em sua rotina escolar, e cuidamos do ambiente para que a aprendizagem ocorra garantindo a participação ativa da criança. A escolha dos materiais, a linguagem que eles indicam, a forma como estão dispostos potencializam as experiências das crianças, convidando-as a desenvolver a autonomia para o criar, o aprender, o pesquisar e o investigar.</p>
            </Column>
            <Column>
              <Img1 src={img3} alt="Bercario" />
            </Column>
          </Box>
        </motion.div>
        <motion.div 
          className="conteudo"
          ref={componentRef3}
          initial={{opacity: 0}}
          animate={{opacity: isVisible3 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <Img1 src={img4} alt="Bercario" />
            </Column>
            <Column>
              <h1>Profissionais diferenciados</h1>
              <p>O comprometimento e a seriedade com a educação somados ao compromisso em estar em constante inovação e aprimoramento fazem com que a Moppe invista fortemente em formação.  São mais de 7 MIL HORAS Anuais de Capacitação, para oferecermos aos nossos alunos a melhor base.</p>
            </Column>
          </Box>

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
              <h1>Espaço físico</h1>
              <p>Planejado para oferecer um ambiente, seguro, limpo, saudável e cercado de afeto para os  bebês a partir do seu 1º ano de vida.</p>
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
              <Img2 src={img2} alt="Bercario" />
            </Column>
          </Box>
        </motion.div>
        <motion.div 
          className="conteudo"
          ref={componentRef6}
          initial={{opacity: 0}}
          animate={{opacity: isVisible6 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <Box1>
                <h1>Sistema de câmeras de vídeo</h1>
                <p>Nosso oferece um moderno sistema de câmeras de vídeo, que contribui para a segurança das crianças. Desta forma, os pais podem acompanhar seus filhos enquanto eles estão no Espaço Bambini, por meio de um aplicativo no celular, disponível para Android e iOS.</p>
                <Img3 src={cameras} alt="Cameras" />
              </Box1>
            </Column>
            <Column>
              <Box2>
                <h1>Alimentação balanceada</h1>
                <p>Toda nossa alimentação é desenvolvida por uma nutricionista, e o cardápio é enviado mensalmente aos pais, que, juntamente com o pediatra, podem adaptá-lo de acordo com as necessidades do seu bebê.</p>
                <Img3 src={alimentacao} alt="Alimentação balanceada" />
              </Box2>
            </Column>
          </Box>
        </motion.div>
      </div>
    </Container>
  )
}

export default Bercario