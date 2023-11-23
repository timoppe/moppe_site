import styled from "styled-components";

export const Container = styled.div`
    display: block;
    top: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: -2;

    @media screen and (max-width: 1030px) {
        overflow-x: hidden;
    }
`;

export const Conteudo = styled.div`
    width: 100%;
    position: relative;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        margin-bottom: 15px;
    }
`;

export const Banner = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        display: none;
    }
`;

export const BannerMobile =  styled.section`
    height: 100vh;
    width: 100%;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: none;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        display: flex;
    }
`;

export const ConteudoPrincipal = styled.div`
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        padding: 0 90px;
    }

    h1 {
        font-size: 40px;
        color: rgb(234, 137, 35);
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 50%;
        transform: translate(-50%);
    }

    @media screen and (max-width: 1030px) {
        p {
            padding: 0 30px;
        }
    }
`;

export const ImgTitle = styled.img`
    padding-left: 10%;
    margin-top: 20px;

    @media screen and (max-width: 1030px) {
        width: 90vw;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;

    @media screen and (max-width: 1030px) {
        width: 100vw;
        margin: 0;
        flex-direction: column;
    }
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 60px;
    text-align: justify;
    margin-top: 50px;
    width: 100%;
    
    p {
        margin-bottom: 15px;
    }

    h1 {
        font-weight: 800;
        text-align: center;
        transform: translateX(-50%);
        left: 50%;
    }

    @media screen and (max-width: 1030px) {
        margin: 0 0;
        h1 {
            font-size: 24px;
            margin-top: 30px;
        }
    }
`;

export const ImgFoto = styled.img`
    width: 25vw;
    margin-left: 15%;

    @media screen and (max-width: 1030px) {
        width: 80vw;
        margin-right: 15%;
        margin-top: 30px;
    }
`;

export const ImgTexto = styled.img`
    width: 30vw;

    @media screen and (max-width: 1030px) {
        width: 90vw;
        margin-top: 30px;
    }
`;

export const Video = styled.iframe`
    width: 700;
    height: 500;

    @media screen and (max-width: 1030px) {
        width: 80vw;
        height: 20vh;
    }
`;