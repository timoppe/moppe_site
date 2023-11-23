import styled from "styled-components";

export const Container = styled.div`
    display: block;
    top: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
    z-index: -2;
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

export const Titulo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 40px;

    @media screen and (max-width: 1030px) {
        img {
            width: 90vw;
        }
    }
`;

export const LinhaTitulo = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    margin: 0 60px;
    text-align: justify;
    margin-top: 50px;

    ul li {
        margin: 15px 0;
    }

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    .box1 {
        margin: 0 30px;
    }

    @media screen and (max-width: 1030px) {
        margin: 0 10px;
    }
`;

export const Img1 = styled.img`
    width: 40vw;
    @media screen and (max-width: 1030px) {
        width: 85vw;
    }
`;

export const Img2 = styled.img`
    width: 25vw;
    @media screen and (max-width: 1030px){
        width: 85vw;
        margin-bottom: 25px;
    }
`;

export const Img3 = styled.img`
    width: 80vw;
    @media screen and (max-width: 1030px){
        display: none;
    }
`;

export const Img5 = styled.img`
    @media screen and (max-width: 1030px){
        width: 90vw;
    }
`;

export const BoxAtividades = styled.div`
    display: none;
    @media screen and (max-width: 1030px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        img {
            margin-bottom: 30px;
        }
    }
`;

export const Img4 = styled.img`
    @media screen and (max-width: 1030px) {
        width: 70vw;
        margin-top: 40px;
    }
`;

export const BoxImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        flex-direction: column;

        img {
            margin-bottom: 20px;
            width: 70vw;
        }
    }
`;

export const BoxAlimentacao = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    margin-right: 10%;
    
    @media screen and (max-width: 1030px) {
        margin-right: 0;
        justify-content: center;
        width: 90vw;

        img {
            width: 40px;
        }
    }
`;