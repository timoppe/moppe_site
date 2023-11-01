//CSS
import { Container, Banner, Titulo, LinhaTitulo, Box, Column, Img1, Img2, Img3, Img4, Img5, BoxImages, BoxAlimentacao, BoxAtividades } from './styles';

//Hooks
import { useState, useEffect, useRef } from 'react';

//Motion
import { motion } from 'framer-motion';

//Images
import titulo from '../../assets/images/smart/title_page.png';
import cambridge from '../../assets/images/smart/cambridge.png';
import img3 from '../../assets/images/smart/img3.png';
import contratacao1 from '../../assets/images/smart/contratacao1.png';
import contratacao2 from '../../assets/images/smart/contratacao2.png';
import contratacao3 from '../../assets/images/smart/contratacao3.png';
import alimentacao from '../../assets/images/smart/alimentacao.png';
import aulaseatividades from '../../assets/images/smart/aulaseatividades.png';
import regular from '../../assets/images/smart/regular.png';
import culinaria from '../../assets/images/smart/Aulas e Atividades/culinaria.png';
import projetos from '../../assets/images/smart/Aulas e Atividades/projetos.png';
import musicas from '../../assets/images/smart/Aulas e Atividades/musicas.png';
import historia from '../../assets/images/smart/Aulas e Atividades/historia.png';
import soninho from '../../assets/images/smart/Aulas e Atividades/soninho.png';
import higiene from '../../assets/images/smart/Aulas e Atividades/higiene.png';

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

const Smart = () => {

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);

  const componentRef1 = useRef(null);
  const componentRef2 = useRef(null);
  const componentRef3 = useRef(null);
  const componentRef4 = useRef(null);
  const componentRef5 = useRef(null);
  const componentRef6 = useRef(null);
  const componentRef7 = useRef(null);
  const componentRef8 = useRef(null);
  const componentRef9 = useRef(null);

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
  useIntersectionObserver(componentRef8, () => {
    setIsVisible8(true);
  });
  useIntersectionObserver(componentRef9, () => {
    setIsVisible9(true);
  });


  return (
    <Container>
      <Banner />
      <Titulo>
        <img src={titulo} alt="Smart" />
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
              <div className="box1">
                <h1>SMART - Período Regular </h1>
                <p>As aulas de inglês acontecem para todos os alunos do Infantil II ao 9o ano, com carga horária ampliada e estratégias diversificadas, que preparam os alunos para que, ao final de sua trajetória na Moppe, possam se comunicar com segurança na língua estrangeira e atestar sua proficiência com a certificação dos exames da Cambridge University.</p> 
              </div>
              <Img5 src={cambridge} alt="Cambridge" />
            </Column>
            <Column>
              <Img1 src={regular} alt="Smart" />
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
              <Img2 src={img3} alt="Bilingue" />
            </Column>
            <Column>
              <h1>Programa Bilíngue</h1>
              <p>Os alunos do Infantil III ao 5º ano têm a opção de participar do Período Complementar Bilíngue, uma imersão em inglês no contraturno, que promove a aquisição do idioma e formação global, além de momentos de descanso, horário de estudo, realização de tarefa, refeições e descontração.</p>
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
              <h1>Diferenciais:</h1>
              <ul>
                <li><p>Professores fluentes e capacitados</p></li>
                <li><p>Carga horária 20% maior em relação ao período regular infantil e 16% maior que o fundamental anos iniciais</p></li>
                <li><p>Economia das famílias com curso de inglês em escola de idioma</p></li>
                <li><p>Orientação de estudos diária, incluindo a realização das tarefas (a partir do Infantil V)</p></li>
                <li><p>Alimentação balanceada, com cardápio elaborado por nutricionista</p></li>
                <li><p>Capacitação semanal dos professores, além de investimento em cursos internos e externos ao longo do ano</p></li>
                <li><p>Aprendizado da língua inglesa de forma natural, por meio de projetos e atividades diversificadas</p></li>
              </ul>
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
              <h1>Opções de contratação:</h1>
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
              <BoxImages>
                <img src={contratacao1} alt="Opção 1" />
                <img src={contratacao2} alt="Opção 2" />
                <img src={contratacao3} alt="Opção 3" />
              </BoxImages>
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
              <BoxAlimentacao>
                <div>
                  <h1>Alimentação: Almoço + Lanche</h1>
                </div>
                <p>O cardápio servido é elaborado por uma nutricionista e oferecido pela cantina da escola.</p>
              </BoxAlimentacao>
            </Column>
            <Column>
              <Img4 src={alimentacao} alt="Alimentação" />
            </Column>

          </Box>

        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef8}
          initial={{opacity: 0}}
          animate={{opacity: isVisible8 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <h1>Aulas e atividades</h1>
            </Column>
          </Box>
        </motion.div>
        <motion.div
          className="conteudo"
          ref={componentRef7}
          initial={{opacity: 0}}
          animate={{opacity: isVisible7 ? 1 : 0}}
          transition={{duration: 1.5}}
        >
          <Box>
            <Column>
              <Img3 src={aulaseatividades} alt="Aulas e atividades" />
              <BoxAtividades>
                <img src={culinaria} alt="Culinaria" />
                <img src={projetos} alt="Projetos" />
                <img src={musicas} alt="Musicas" />
                <img src={historia} alt="Historia" />
                <img src={soninho} alt="Soninho" />
                <img src={higiene} alt="Higiene" />

              </BoxAtividades>
            </Column>
          </Box>
        </motion.div>
      </div>
    </Container>
  )
}

export default Smart;