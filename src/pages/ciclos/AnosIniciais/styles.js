import styled from "styled-components";

export const Container = styled.div`
    display: flex;
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

export const Img1 = styled.img`
    width: 100%;
`;

export const Img2 = styled.img`
    width: 400px;

    @media screen and (max-width: 1030px) {
        width: 70vw;
    }
`;

export const ImagesMuitomais = styled.div`
    img{
        width: 170px;
        margin: 0 40px;
    }
    @media screen and (max-width: 1030px) {
        img{
        width: 70vw;
        margin-bottom: 30px
    }
    }
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
    
    h1 {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1030px) {
        margin: 0 0;
        p {
            margin-bottom: 20px;
        }
    }
`;
