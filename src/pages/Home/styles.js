import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    min-height: 100vh;

    @media screen and (max-width: 1024px) {     
        .swiper {
            width: 100%;
            height: 100vh;
        }
        .swiper_slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
        } 
    }
@media (min-height: 250px) {
    .slider hr::after {
      display: block;
    }
  }
`;

export const Banner = styled.section`
    height: 100vh;
    background-image: url('../../../src/assets/images/banners/Home.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px) {     
        display: none;     
    }
`;

export const BannerMobile = styled.section`
    background-image: url('../../../src/assets/images/banners_mobile/home.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: none;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 100%;
    position: relative;
    z-index: -4;
    margin-top: -10px;

    @media screen and (max-width: 1024px) {     
        display: block;    
    }
`;

export const ConteudoBanner = styled.div`
    margin-top: 20%;
    margin-left: 35%;
    width: 60%;
    height: 35%;
    background-color: #e1a139a6;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    flex-direction: column;
    font-size: 30px;

    span {
        font-size: 28px;
        text-transform: uppercase;
    }

    h2 {
        margin: 45px;
        font-weight: 500;
        font-size: 30px;
    }
`;

export const Slider = styled.section`
    z-index: 0;
    position: relative;
    margin-top: 80px;
    
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 50%;
        transform: translate(-50%);
        font-size: 40px;
        color: rgb(234, 137, 35);
        font-weight: 300;
    }

    .customCarousel {
        position: relative;
        z-index: 0;
    }

    @media screen and (max-width: 1024px) {     
        display: block; 
        .customCarousel{
            height: 30vh;
        }   
    }
`;

export const BoxDiferenciais = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100vw;
    margin-top: -40px;
    @media screen and (max-width: 1024px) {     
        align-items: center;
    }
`;

export const BoxColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;

    @media screen and (max-width: 1024px) {     
        flex-direction: column;
    }
`;

export const Diferenciais = styled.div`
    width: 100vw;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        max-width: 100%;
        width: 150px;
        height: 150px;
        margin-bottom: 10px;
    }

    p {
        color: #000;
        text-align: center;
    }

`;

export const TitleCiclos = styled.section`
    padding-top: 20px;
    height: 120px; 

    .ciclos {
        padding: 25px;
    }
`;

export const ContainerCiclos = styled.section`
    padding-top: 20px;

    .containerbox_ciclos {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 3%;
    }
    

    .carousel_ciclos {
        position: relative;
        display: block; 
        width: 300px;
        max-width: 100%;
        overflow: hidden;
        height: 400px;
        max-height: 90vh;
    }

    .carousel_ciclos img{
        width: 90%;
        height: 90%;
        max-height: 60vh;
        margin: 15px;
        border-radius: 20px;
        display: block;
    }

    .carousel_ciclos img:hover {
        transform: scale(1.1);
        transition: 0.4s;
    }

    @media screen and (max-width: 1024px) {     
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;    
        .containerbox_ciclos {
            flex-direction: column;
        }
    }
`;

export const ImgTitle = styled.img`
    width: 45vw;
    padding-left: 10%;

    @media screen and (max-width: 1024px) {     
        width: 70vw;   
    }
`;

