import styled from "styled-components";

export const SigninContainer = styled.div`
    height: 100vh;
    background: #000;
    align-content: center;
    justify-content: center;
    display: flex;
    padding-top:100px;
    padding-bottom : 700px;
    position: relative;

`

export const SigninWrapper = styled.div`
    background: #fff;
    min-height: 600px;
    width: 500px;
    max-width: 90%;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`

export const SigninP = styled.p`
    font-weight: 600;
    margin-bottom: 5px;

`

export const SigninInput = styled.input`
    width: 100%;
    padding: 10px 10px;
    border-radius: 10px;
    border: solid #000 2px;
    margin-bottom: 30px;
    outline : none;

`