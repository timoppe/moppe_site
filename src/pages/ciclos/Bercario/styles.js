import styled from "styled-components";

export const Container = styled.div`
    display: block;
    top: 0;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: -2;
    overflow-x: hidden;
    font-size: 20px;

    @media screen and (max-width: 1024px){
        min-height: 100vh;
    }
`;

export const Banner = styled.section`
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px){
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

    @media screen and (max-width: 1024px){
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

    @media screen and (max-width: 1024px){
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

    @media screen and (max-width: 1024px){
        width: 80vw;

        h1 {
            text-align: center;
            font-size: 26px;
        }
    }
`;

export const Box1 = styled.div`
    margin-bottom: 300px;
    
    @media screen and (max-width: 1024px){
        margin-bottom: 0;
    }
`;

export const Box2 = styled.div`
    img {
        width: 300px;
        margin-top: 20px;
    }
`;

export const Img1 = styled.img`
    width: 25vw;

    @media screen and (max-width: 1024px){
        width: 80vw;
    }
`;

export const Img2 = styled.img`
    width: 80vw;
`;

export const Img3 = styled.img`
    width: 15vw;
    @media screen and (max-width: 1024px){
        width: 80vw;
    }
`;