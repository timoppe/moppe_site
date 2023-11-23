//CSS
import { Container, Conteudo, Banner, BannerMobile, ConteudoPrincipal, ImgTitle, Box, Column, ImgFoto, ImgTexto, Video } from './styles';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

//Images
import amoppe from '../../../assets/images/amoppe/amoppe.png';
import box2 from '../../../assets/images/amoppe/box2/teresinha.png';
import fala_teresinha from '../../../assets/images/amoppe/box2/fala_teresinha.png';
import ImgBanner from '../../../assets/images/banners/Amoppe.png';
import ImgBannerMobile from '../../../assets/images/banners_mobile/amoppe.png';

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

const AMoppe = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);

    useIntersectionObserver(componentRef1, () => {
      setIsVisible1(true);
    });
    useIntersectionObserver(componentRef2, () => {
      setIsVisible2(true);
    });

  return (

    <Container>
        <Banner imageUrl={ImgBanner}/>
        <BannerMobile imageUrl={ImgBannerMobile} />
        <Conteudo>
            <ImgTitle src={amoppe} alt="A moppe" />
            <motion.div
                ref={componentRef1}
                initial={{opacity: 0}}
                animate={{opacity: isVisible1 ? 1 : 0}}
                transition={{duration: 1.5}}
            >
              {isVisible1 && (
              <motion.hr
                initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
                animate={{ width: '58%' }}
                transition={{ type: 'tween', duration: 2 }}
                style={{ originX: 0 }}
              />
            )}
            </motion.div>
            <motion.div
              className="conteudo"
              ref={componentRef2}
              initial={{opacity: 0}}
              animate={{opacity: isVisible2 ? 1 : 1}}
              transition={{duration: 1.5}}
            >
              <ConteudoPrincipal>
                <Box>
                  <Column>
                    <p>
                      Quando um aluno entra pelos portões da Moppe e sente a energia de um ambiente vivo, alegre e pulsante, talvez não imagine o que faz o coração da escola bater. 
                    </p>
                    <p>
                      É uma vida inteira, com um começo de muita esperança e uma trajetória repleta de realizações. Nessas <b>quatro décadas</b>, seres humanos se formaram e famílias inteiras se transformaram.
                    </p>
                    <p>
                      O começo dessa história, como todas as grandes conquistas, surgiu de um sonho. O desejo de inovar, de ir além do ensino de conteúdos básicos para os estudantes e oferecer mais: autonomia, criatividade, cidadania, senso crítico e ensinar as crianças a pensarem e a resolverem problemas.
                    </p>
                  </Column>
                </Box>
                <Box>
                  <Column>
                    <ImgFoto src={box2} alt="Teresinha" />
                  </Column>
                  <Column>
                    <ImgTexto src={fala_teresinha} alt="Teresinha" />
                  </Column>
                </Box>
                <Box>
                  <Column>
                    <h1>Quatro décadas de história</h1>
                  </Column>
                </Box>
                <Box>
                  <Column>
                    <Video width="700" height="500" src="https://www.youtube.com/embed/-y0KA1MqV9o?si=uG_-flNzGe2Xa1Zi" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
                  </Column>
                </Box>
              </ConteudoPrincipal>
            </motion.div>
        </Conteudo>
    </Container>
  )
}

export default AMoppe