// Página desativada




//Motion
import { motion } from 'framer-motion';

//CSS
import { Container, Banner, BannerMobile, TitlePage, Conteudo, Title, ImgTitle } from './styles';

//Images
import title_page from '../../assets/images/metodologias/title_page.png';
import ImgBanner from '../../src/assets/images/banners/Metodologias.jpg';

const Metodologias = () => {

  return (
    <Container>
      <Banner imageUrl={ImgBanner}/>
      <TitlePage>
        <ImgTitle src={title_page} alt="Metodologias" />
        <motion.hr
              initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
              animate={{ width: '80%' }}
              transition={{ type: 'tween', duration: 2 }}
              style={{ originX: 0 }}
          />
        <Conteudo>
          <Title>
            <h2>Metodologias Ativas</h2>
            <p>Pioneira em inovação nas práticas pedagógicas, essa abordagem faz parte da proposta pedagógica da escola desde a sua fundação.</p>
            <p>As metodologias ativas promovem uma educação crítico-reflexiva, na qual posiciona o aluno no centro do processo de aquisição do conhecimento, enquanto o professor assume o papel de mediador, transformando as aulas em experiências ricas, significativas e estimulantes.</p>
          </Title>
          <p>FOTO + TEXTO

            Cultura Maker: 
            Projetos:
            Aprendizagem Baseada em Problemas:  
            Sala de aula invertida:
          </p>
          <div>
            <motion.hr
              initial={{ width: 0, backgroundColor: '#ea8923', height: '5px', border: 'none' }}
              animate={{ width: '80%' }}
              transition={{ type: 'tween', duration: 2 }}
              style={{ originX: 0 }}
          />
          </div>
          <Title>
            <h2>Tecnologia como ferramenta de aprendizagem</h2>
            <p>Usufruir das novas tecnologias no universo educacional significa agregar as mudanças sociais ao ambiente acadêmico, possibilitando conexões, reflexões e inovações através de uma infinidade de recursos e linguagens midiáticas empregadas com o intuito de incentivar e possibilitar novas formas de aprender</p>
          </Title>
        </Conteudo>
      </TitlePage>
    </Container>
  );
};

export default Metodologias;
