//CSS
import { Container, Banner, Titulo, LinhaTitulo, ImgTitulo, Column, Img, Img2, Box } from './styles';

//Images
import Triade from '../../../assets/images/proposta_pedagogica/Triade.png';
import titulo from '../../../assets/images/proposta_pedagogica/titulo.png';
import Unesco from '../../../assets/images/proposta_pedagogica/unesco.png';
//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

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

const PropostaPedagogica = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);

  useIntersectionObserver(componentRef1, () => {
    setIsVisible1(true);
  });
  useIntersectionObserver(componentRef2, () => {
    setIsVisible2(true);
  });
  useIntersectionObserver(componentRef3, () => {
    setIsVisible3(true);
  });

  return (
    <Container>
      <Banner />
      <Titulo> 
        <ImgTitulo src={titulo} alt="Proposta pedagógica" />
      </Titulo>
      <LinhaTitulo>
      <motion.div
            ref={componentRef1}
            initial={{opacity: 0}}
            animate={{opacity: isVisible1 ? 1 : 0}}
            transition={{duration: 1.5}}
      >
        {isVisible1 && (
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
            ref={componentRef2}
            initial={{opacity: 0}}
            animate={{opacity: isVisible2 ? 1 : 0}}
            transition={{duration: 1.5}}
        >          
          <Column>
            <p>A Moppe oferece uma base forte por meio de uma tríade educacional formada por valores éticos, conteúdos sólidos e competências. Nosso objetivo é construir a autonomia moral e intelectual de nossos alunos.</p>
            <p><b>A Moppe tem a missão de formar pessoas para transformar o mundo, por meio de uma educação forte aliada ao prazer de aprender, com intuito maior de explorar o potencial de cada aluno.</b></p>
            <p>Nossa abordagem de ensino destaca o protagonismo dos alunos no processo de aprendizagem, valoriza as experiências reais, com explorações dos meios, o trabalho em equipe, o enfrentamento de problemas e a pesquisa em seus múltiplos sentidos.</p>
          </Column>
        </motion.div>
        <motion.div
            className="conteudo"
            ref={componentRef3}
            initial={{opacity: 0}}
            animate={{opacity: isVisible3 ? 1 : 0}}
            transition={{duration: 1.5}}
        >          
          <Column>
            <Img2 src={Triade} alt="Triade" />
          </Column>
        </motion.div>
      </div>
      <motion.div
        className="conteudo"
        ref={componentRef2}
        initial={{opacity: 0}}
        animate={{opacity: isVisible2 ? 1 : 0}}
        transition={{duration: 1.5}}
      >
        <Box>
          <Column>
            <h1>Afiliada à UNESCO</h1>
            <p className="p1">A Moppe é pioneira no Programa de Escolas Associadas à UNESCO (PEA-UNESCO), considerando como centro de excelência e inovação para a promoção dos ideais de cultura e da paz. </p>
          </Column>
          <Column>
            <Img src={Unesco} alt="Unesco" />
          </Column>
        </Box>
      </motion.div>

    </Container>
  )
}

export default PropostaPedagogica;