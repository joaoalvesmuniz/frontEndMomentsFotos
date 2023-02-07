
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #363636  0%, #4d4d4d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;





export const Label = styled.label`
    
    color: #696969;
    font-size: 15px;
`
export const ContainerInput = styled.div`
  width: 90%;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px;
  
`

export const ContainerIcon = styled.div`
  width: 10%;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
  margin-right: -10px;
  border-bottom: 2px solid #696969;
  
`

export const h1TituloLogin = styled.h1`
        
 font-size: 100px;
`;

export const ContainerGlobalInput = styled.div`
display: flex;
flex-direction: row;
width: 100%;
  align-items: center;
  position: relative;
`
export const Container = styled.div`
         width: 100%;

         display: flex;
         justify-content:center;
         align-items: center;
        
`;

export const LoginForm = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const Input = styled.input`
  margin: 10px 0;
  padding: 10px;

  width: 100%;
  border: none;
  border-bottom: 2px solid #696969;
  outline-style: none;

::placeholder{

  text-align: left;
}
`;

export const RegisterButton = styled.a`
  margin-top: 10px;
  font-size: 12px;
  border: none;
  font-family: 'Red Hat Display', sans-serif;
  cursor: pointer;
  border-radius: 5px;
  color: blue;
 
`;

export const LoginButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
`;