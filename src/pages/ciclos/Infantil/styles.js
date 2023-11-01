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

export const Banner = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url('../../../../src/assets/images/banners/Infantil.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        background-image: url('../../../src/assets/images/banners_mobile/ed_infantil.png');
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
    width: 80%;
`;

export const Img2 = styled.img`
    width: 25vw;
`;

export const Img3 = styled.img`
    width: 30vw;
`;

export const BoxImages = styled.div`
    width: 15vw;
    margin: 60px 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 15vw;
        margin: 0 45px;
    }

    @media screen and (max-width: 1030px) {
        flex-direction: column;

        img {
            width: 60vw;
            margin: 20px 0;
        }
    }
`;

export const ImgEstFis = styled.div`
    img {
        width: 12vw;
        margin: 30px 30px;
    }
`;

export const BoxMuitoMais = styled.div`
    img {
        width: 9vw;
        margin: 30px 20px;
    }
`;

export const TitleEstrutura = styled.h1`
    font-size: 32px;
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

    h1 {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1030px) {
        width: 80vw;

        img {
            width: 70vw;
            padding-top: 20px;
        }
        h1 {
            text-align: center;
        }
    }
`;