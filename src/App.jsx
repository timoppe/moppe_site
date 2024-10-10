// App.jsx

// Hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// Integrations
import ReactGA4 from 'react-ga4';
import { initializeGoogleAds } from './components/integrations/GoogleAds';
import RDStation from './components/integrations/RDStation';
import { useLocation } from 'react-router-dom';

// Context
import { onAuthStateChanged } from 'firebase/auth';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Modal from 'react-modal';

// Routes
import AppRoutes from './Routes';

Modal.setAppElement('#root');

function App() {
  // Controla o estado dos componentes
  const [isAccessMobile, setIsAccessMobile] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();
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

  // Inicia o google ADS
  useEffect(() => {
    initializeGoogleAds();
  }, []);

  // Inicia o Meta Pixel
  useEffect(() => {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '389439533579660');
    fbq('track', 'PageView');
    console.log('Meta pixel started')
  }, []);

  // Verifica se o GA4 iniciou e envia os dados para o google
  useEffect(() => {
    if (initialized) {
      ReactGA4.set({ page: location.pathname });
      ReactGA4.send("pageview");
    }
  }, [initialized, location]);

  // Verifica o estado de autenticação e exibe mensagem de carregamento
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <ScrollToTop />
        {!isAccessMobile ? <Navbar /> : <NavbarMobile />}
        <div className="container">
          <AppRoutes />
        </div>
        <Footer />
        <RDStation />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=389439533579660&ev=PageView&noscript=1"
          />
        </noscript>
      </AuthProvider>
    </div>
  );
}

export default App;
