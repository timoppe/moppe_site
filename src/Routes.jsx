//src/Routes.jsx


import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';

import Home from "./pages/Home";
import Search from "./pages/blog/Search";
import Post from "./pages/blog/Post";
import AMoppe from "./pages/a_moppe/Sobre";
import PropostaPedagogica from "./pages/a_moppe/PropostaPedagogica";
import EstruturaEscolar from "./pages/a_moppe/EstruturaEscolar";
import Bercario from "./pages/ciclos/Bercario";
import Infantil from "./pages/ciclos/Infantil";
import AnosIniciais from "./pages/ciclos/AnosIniciais";
import AnosFinais from "./pages/ciclos/AnosFinais";
import Smart from "./pages/smart";
import Atividades from "./pages/atividades";
import PoliticaDePrivacidade from "./pages/politica_de_privacidade";
import NotFound from "./pages/NotFound";
import Contato from "./pages/contato";
import HomeBlog from './pages/blog/HomeBlog';
import Login from "./pages/blog/Login";
import EditPost from "./pages/blog/EditPost";
import RegisterBlog from "./pages/blog/Register";
import CreatePost from "./pages/blog/CreatePost";
import Dashboard from "./pages/blog/Dashboard";


export default function AppRoutes() {
    const {auth} = useAuthentication();
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          setUser(user);
        });
      }, [auth]);
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/blog/search' element={<Search />}/>
            <Route path='/blog/posts/:id' element={<Post/>}/>
            <Route path='/sobre' element={<AMoppe />}/>
            <Route path='/propostapedagogica' element={<PropostaPedagogica />}/>
            <Route path='/estruturaescolar' element={<EstruturaEscolar />}/>
            <Route path='/bercario' element={<Bercario />}/>
            <Route path='/infantil' element={<Infantil />}/>
            <Route path='/anosiniciais' element={<AnosIniciais />}/>
            <Route path='/anosfinais' element={<AnosFinais />}/>
            <Route path='/smart' element={<Smart />}/>
            <Route path='/atividadesextra' element={<Atividades />}/>
            <Route path='/politica-de-privacidade' element={<PoliticaDePrivacidade/>}/>
            <Route path="*" element={<NotFound />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/blog' element={<HomeBlog/>} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/blog"/>} />
            <Route path='/blog/posts/edit/:id' element={user ? <EditPost /> : <Navigate to="/login"/>} />
            <Route path='/register' element={!user ? <RegisterBlog /> : <Navigate to="/blog"/>} />
            <Route path='/blog/createpost' element={user ? <CreatePost/> : <Navigate to="/login"/>} />
            <Route path='/blog/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>} />
        </Routes>
    )
}