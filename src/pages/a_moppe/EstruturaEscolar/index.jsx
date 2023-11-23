//CSS
import {
  Container,
  Banner,
  Titulo,
  LinhaTitulo,
  Conteudo,
  Box,
  Column,
  LinhaTexto,
  JanelaModal
} from './styles';

//Image Banner
import ImgBanner from '../../../assets/images/banners/EstruturaEscolar.png';

//Hooks
import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';

//Motion
import { motion } from 'framer-motion';

//Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

//Images
import Quadra from '../../../assets/images/estrutura_escolar/estruturas/quadra.png';
import Estudio from '../../../assets/images/estrutura_escolar/estruturas/estudio.png';
import Turing from '../../../assets/images/estrutura_escolar/estruturas/turing.png';
import Artes from '../../../assets/images/estrutura_escolar/estruturas/artes.png';

import title_page from '../../../assets/images/estrutura_escolar/title_page.png';

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


const EstruturaEscolar = () => {

  const [isVisible1, setIsVisible1] = useState(false);

  const componentRef1 = useRef(null);

    useIntersectionObserver(componentRef1, () => {
      setIsVisible1(true);
    });

  const [modal1IsOpen, setModal1IsOpen] = useState(false);
  const [modal2IsOpen, setModal2IsOpen] = useState(false);
  const [modal3IsOpen, setModal3IsOpen] = useState(false);
  const [modal4IsOpen, setModal4IsOpen] = useState(false);
  const [modal5IsOpen, setModal5IsOpen] = useState(false);
  const [modal6IsOpen, setModal6IsOpen] = useState(false);
  const [modal7IsOpen, setModal7IsOpen] = useState(false);
  const [modal8IsOpen, setModal8IsOpen] = useState(false);
  const [modal9IsOpen, setModal9IsOpen] = useState(false);
  const [modal10IsOpen, setModal10IsOpen] = useState(false);
  const [modal11IsOpen, setModal11IsOpen] = useState(false);
  const [modal12IsOpen, setModal12IsOpen] = useState(false);
  const [modal13IsOpen, setModal13IsOpen] = useState(false);
  const [modal14IsOpen, setModal14IsOpen] = useState(false);
  const [modal15IsOpen, setModal15IsOpen] = useState(false);

  function openModal(modalId) {
    if(modalId === 1){
      setModal1IsOpen(true);
    }
    else if(modalId === 2) {
      setModal2IsOpen(true);
    }
    else if(modalId === 3) {
      setModal3IsOpen(true);
    }
    else if(modalId === 4) {
      setModal4IsOpen(true);
    }
    else if(modalId === 5) {
      setModal5IsOpen(true);
    }
    else if(modalId === 6) {
      setModal6IsOpen(true);
    }
    else if(modalId === 7) {
      setModal7IsOpen(true);
    }
    else if(modalId === 8) {
      setModal8IsOpen(true);
    }
    else if(modalId === 9) {
      setModal9IsOpen(true);
    }
    else if(modalId === 10) {
      setModal10IsOpen(true);
    }
    else if(modalId === 11) {
      setModal11IsOpen(true);
    }
    else if(modalId === 12) {
      setModal12IsOpen(true);
    }
    else if(modalId === 13) {
      setModal13IsOpen(true);
    }
    else if(modalId === 14) {
      setModal14IsOpen(true);
    }
    else if(modalId === 15) {
      setModal15IsOpen(true);
    }
  }

  function closeModal(modalId) {
    if(modalId === 1){
      setModal1IsOpen(false);
    }
    else if(modalId === 2) {
      setModal2IsOpen(false);
    }
    else if(modalId === 3) {
      setModal3IsOpen(false);
    }
    else if(modalId === 4) {
      setModal4IsOpen(false);
    }
    else if(modalId === 5) {
      setModal5IsOpen(false);
    }
    else if(modalId === 6) {
      setModal6IsOpen(false);
    }
    else if(modalId === 7) {
      setModal7IsOpen(false);
    }
    else if(modalId === 8) {
      setModal8IsOpen(false);
    }
    else if(modalId === 9) {
      setModal9IsOpen(false);
    }
    else if(modalId === 10) {
      setModal10IsOpen(false);
    }
    else if(modalId === 11) {
      setModal11IsOpen(false);
    }
    else if(modalId === 12) {
      setModal12IsOpen(false);
    }
    else if(modalId === 13) {
      setModal13IsOpen(false);
    }
    else if(modalId === 14) {
      setModal14IsOpen(false);
    }
    else if(modalId === 15) {
      setModal15IsOpen(false);
    }
  }

  return (
    <Container>
      <Banner imageUrl={ImgBanner}/>
      <Titulo>
        <img src={title_page} alt="Estrutura escolar" />
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
            animate={{ width: '66%' }}
            transition={{ type: 'tween', duration: 2 }}
            style={{ originX: 0 }}
            />
          )}
        </motion.div>
      </LinhaTitulo>
      <Conteudo>
        <p>Com uma área total de 12.000m², a Moppe foi pensada e planejada para oferecer inúmeras possibilidades aos alunos em diferentes ambientes.</p>
      </Conteudo>
      <Conteudo>
          <Box>
            <Column>
              <LinhaTexto>
                <p onClick={() => openModal(1)}>Quadras <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              </LinhaTexto>
              <JanelaModal>
                <Modal
                  isOpen={modal1IsOpen}
                  onRequestClose={() => closeModal(1)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Quadras</h2>
                  <hr />
                  <div className="conteudo_modal">
                    <img src={Quadra} alt="Quadra" />
                  </div>
                  <button onClick={() => closeModal(1)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(2)}>Piscina<FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal2IsOpen}
                  onRequestClose={() => closeModal(2)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Piscina</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(2)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(3)}>Parques <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal3IsOpen}
                  onRequestClose={() => closeModal(3)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Parques</h2>
                  <hr />

                  <button onClick={() => closeModal(3)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(4)}>Laboratório <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal4IsOpen}
                  onRequestClose={() => closeModal(4)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Laboratório</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(4)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(5)}>Espaço Maker <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal5IsOpen}
                  onRequestClose={() => closeModal(5)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Espaço Maker</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(5)} className="button_modal">Fechar</button>
                </Modal>
              </JanelaModal>
            </Column> 
            <Column>
              <JanelaModal>
                <p onClick={() => openModal(6)}>Estúdio de gravação <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal6IsOpen}
                  onRequestClose={() => closeModal(6)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Estúdio de gravação</h2>
                  <hr />
                  <div className="conteudo_modal">
                    <img src={Estudio} alt="Estudio" />
                  </div>
                  <button onClick={() => closeModal(6)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(7)}>Biblioteca <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal7IsOpen}
                  onRequestClose={() => closeModal(7)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Biblioteca</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(7)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(8)}>Sala de artes <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal8IsOpen}
                  onRequestClose={() => closeModal(8)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Sala de artes</h2>
                  <hr />
                  <div className="conteudo_modal">
                    <img src={Artes} alt="Sala de artes" />
                  </div>
                  <button onClick={() => closeModal(8)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(9)}>Lounge <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal9IsOpen}
                  onRequestClose={() => closeModal(9)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Lounge</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(9)} className="button_modal">Fechar</button>
                </Modal>
                <p onClick={() => openModal(10)}>Espaço convivência <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
                <Modal
                  isOpen={modal10IsOpen}
                  onRequestClose={() => closeModal(10)}
                  style={{
                    overlay: {
                      background: '#ececec',
                      display: 'flex',
                      alignTtems: 'center',
                      justifyContent: 'center',
                    },
                    content: {
                      width: '100%',
                      height: '100vh',
                      backgroundColor: '#FFF',  
                      borderRadius: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }
                  }}
                >
                  <h2>Espaço convivência</h2>
                  <hr />
                  <p>Conteudo</p>
                  <button onClick={() => closeModal(10)} className="button_modal">Fechar</button>
                </Modal>
              </JanelaModal>
            </Column> 
            <Column>
              <p onClick={() => openModal(11)}>Parede de escalada <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              <Modal
                isOpen={modal11IsOpen}
                onRequestClose={() => closeModal(11)}
                style={{
                  overlay: {
                    background: '#ececec',
                    display: 'flex',
                    alignTtems: 'center',
                    justifyContent: 'center',
                  },
                  content: {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FFF',  
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }
                }}
              >
                <h2>Parede de escalada</h2>
                <hr />
                <p>Conteudo</p>
                <button onClick={() => closeModal(11)} className="button_modal">Fechar</button>
              </Modal>
              <p onClick={() => openModal(12)}>Espaço taco <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              <Modal
                isOpen={modal12IsOpen}
                onRequestClose={() => closeModal(12)}
                style={{
                  overlay: {
                    background: '#ececec',
                    display: 'flex',
                    alignTtems: 'center',
                    justifyContent: 'center',
                  },
                  content: {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FFF',  
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }
                }}
              >
                <h2>Espaço taco</h2>
                <hr />
                <p>Conteudo</p>
                <button onClick={() => closeModal(12)} className="button_modal">Fechar</button>
              </Modal>
              <p onClick={() => openModal(13)}>Espaço jogos <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              <Modal
                isOpen={modal13IsOpen}
                onRequestClose={() => closeModal(13)}
                style={{
                  overlay: {
                    background: '#ececec',
                    display: 'flex',
                    alignTtems: 'center',
                    justifyContent: 'center',
                  },
                  content: {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FFF',  
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }
                }}
              >
                <h2>Espaço jogos</h2>
                <hr />
                <p>Conteudo</p>
                <button onClick={() => closeModal(13)} className="button_modal">Fechar</button>
              </Modal>
              <p onClick={() => openModal(14)}>Espaço verde <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              <Modal
                isOpen={modal14IsOpen}
                onRequestClose={() => closeModal(14)}
                style={{
                  overlay: {
                    background: '#ececec',
                    display: 'flex',
                    alignTtems: 'center',
                    justifyContent: 'center',
                  },
                  content: {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FFF',  
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }
                }}
              >
                <h2>Espaço verde</h2>
                <hr />
                <p>Conteudo</p>
                <button onClick={() => closeModal(14)} className="button_modal">Fechar</button>
              </Modal>
              <p onClick={() => openModal(15)}>Sala de programação <FontAwesomeIcon icon={faArrowRight} beatFade size="2xs" style={{color: "#ea8923",}} /></p>
              <Modal
                isOpen={modal15IsOpen}
                onRequestClose={() => closeModal(15)}
                style={{
                  overlay: {
                    background: '#ececec',
                    display: 'flex',
                    alignTtems: 'center',
                    justifyContent: 'center',
                  },
                  content: {
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#FFF',  
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }
                }}
              >
                <h2>Sala de programação</h2>
                <hr />
                <div className="conteudo_modal">
                    <img src={Turing} alt="Laboratório de informática" />
                  </div>
                <button onClick={() => closeModal(15)} className="button_modal">Fechar</button>
              </Modal>
            </Column> 
          </Box>
      </Conteudo>
      
    </Container>
  )
}

export default EstruturaEscolar