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
`;

export const LinhaTitulo = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const ImgTitulo = styled.img`
    @media screen and (max-width: 1030px) {
        width: 80vw;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    margin: 0 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
        margin-bottom: 15px;
        text-align: justify;
        color: #000;
    }

    .p1 {
        text-align: center;
        margin-top: 25px;
        width: 40vw;
    }

    @media screen and (max-width: 1030px) {
        width: 100%;
        margin: 0;
        img {
            width: 100vw;
            margin: 0;
        }

        .p1 {
            width: 90vw;
        }
    }
`;

export const Img = styled.img`
    width: 300px;
    height: 300px;
`;

export const Img2 = styled.img`
    width: 80vw;
    margin: 45px 0;
`;