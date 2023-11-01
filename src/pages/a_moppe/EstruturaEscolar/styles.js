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
    background-image: url('../../../../src/assets/images/banners/EstruturaEscolar.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1030px) {
        background-image: url('../../../../src/assets/images/banners_mobile/estrutura_escolar.png');
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

export const Conteudo = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 40px;

    img {
        margin-top: 30px;
    }
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    
    @media screen and (max-width: 1030px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 200px;
    padding: 0 30px;
    margin: 30px;

    p {
        margin-bottom: 10px;
        position: relative;
        cursor: pointer;
    }

    p:hover {
        font-weight: bold;
    }

    p::after {
        top: 100%;
        content: "";
        width: 0%;
        height: 4px;
        background-color: rgb(234, 137, 35);
        position: absolute;
        left: 0;
        transition: 0.3s ease-in-out;
    }

    p:hover::after {
        width: 100%;
    }

    
    @media screen and (max-width: 1030px) {
        margin: 0;
        padding: 0;
    }

`;

export const LinhaTexto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const JanelaModal = styled.div`
    .modal_overlay {
        background: #ececec;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal_content {
        width: 50%;
        height: 50%;
        max-width: 1300px;
        background-color: #FFF;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .modal_content img {
        width: 100%;
        height: 450px;
        padding: 50px 10px;
    }

    .conteudo_modal {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button_modal {
        padding: 5px;
        font-size: large;
        float: right;
        cursor: pointer;
        position: absolute;
        bottom: 28%;
        right: 18%;
    }
`;