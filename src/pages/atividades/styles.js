import styled from "styled-components";

export const Container = styled.div`
    display: block;
    top: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const Img1 = styled.img`
    width: 80vw;

    @media screen and (max-width: 1030px) {
        width: 90vw;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 1030px) {
        p {
            text-align: justify;
        }
    }
`;