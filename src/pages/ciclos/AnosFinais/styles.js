import styled from "styled-components";

export const Container = styled.div`
    display: block;
    top: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: -2; 

    h1 {
        margin-bottom: 20px;
        text-align: center;
    }

    @media screen and (max-width: 1030px) {
        overflow-x: hidden;
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
    margin-bottom: 40px;

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

    p {
        margin-bottom: 20px;
    }
    @media screen and (max-width: 1030px) {
        margin: 0 30px;
    }
`;

export const Img1 = styled.img`
    width: 100%;
    @media screen and (max-width: 1030px) {
        width: 80vw;
        margin: 30px 0;
    }
`;

export const Img2 = styled.img`
    width: 400px;
    @media screen and (max-width: 1030px) {
        width: 80vw;
        margin: 20px 0;
    }
`;

export const ArrayImages = styled.div`
    margin: 50px 0;

    img {
        width: 10vw;
    }

    @media screen and (max-width: 1030px) {
        img {
            width: 90vw;
        }
    }
`;

export const ImgTitle = styled.img`
    @media screen and (max-width: 1030px) {
        width: 80vw;
    }
`;