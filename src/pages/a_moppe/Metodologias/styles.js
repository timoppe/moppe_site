import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    min-height: 100vh;
    z-index: -2;

    @media screen and (max-width: 1030px) {
        height: 180vh;
}
`;

export const Banner = styled.section`
    height: 100vh;
    width: 100%;
    background-image: url('../../../src/assets/images/banners/Metodologias.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(0,0,0, .15) 0 -2px 10px 0px;
`;

export const TitlePage = styled.div`
    padding: 30px;

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
`;

export const Conteudo = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    h2 {
        margin-bottom: 20px;
    }
`;

export const Title = styled.div`
    margin: 40px;
    padding: 15px 15px;
    width: 80%;
`;

export const ImgTitle = styled.img`
    padding-left: 10%;
    margin-top: 20px;
`;