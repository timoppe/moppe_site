import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

import ReactGA4 from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import RDStation from './components/RDStation';
import BlipChat from './components/BlipChat';
import Modal from 'react-modal';

import AppRoutes from './Routes';

Modal.setAppElement('#root');

function App() {
  // Controla o estado dos componentes
  const [isAccessMobile, setIsAccessMobile] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();
  const location = useLocation();
  const loadingUser = user === undefined;

  // Verifica de qual dispositivo o acesso esta sendo feito
  useEffect(() => {
    const checkDevice = () => {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ||
        window.innerWidth < 1030
      ) {
        setIsAccessMobile(true);
      } else {
        setIsAccessMobile(false);
      }
    };
    checkDevice();
  }, []);

  // Inicia o analytics
  useEffect(() => {
    ReactGA4.initialize("G-432DY2Q7TC");
    setInitialized(true);
  }, []);
  // Verifica se o GA4 iniciou e envia os dados para o google
  useEffect(() => {
    
    if (initialized) {
      ReactGA4.set({ page: location.pathname });
      ReactGA4.send("pageview");
    }
  }, [initialized, location]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <ScrollToTop />
      {!isAccessMobile ? <Navbar /> : <NavbarMobile/>} 
        <div className="container">
          <AppRoutes/>
        </div>
       <Footer />
       <RDStation />
       <BlipChat />
       </AuthProvider>
     
    </div>
  );
}

export default App;
