
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';

export const ContainerImagem = styled.div`

width:100%;
max-width: 450px;
height: 450px;
margin: 30px;
overflow: hidden;

position: relative;
cursor:pointer;
border-radius: 8px;
border: transparent;

box-sizing: border-box;
`

export const DivTitulo = styled.div`
 height: 450px;
  width:401px;
  position: absolute;
  bottom: 18rem;
  left: 0rem;
  top: 24.5rem;
  right: 14rem;
  padding: 2rem;
  word-wrap: break-word;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 6px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content:center;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  transform: translateY(0%);


  &:hover {
    
  p {
     word-break: break-all;
    color: #ffffff;
    font-weight:bold;

  }


    opacity: 0.8;
      top: -0.5rem;
      background-color: #565050;
  }
`


export const DivEditar = styled.div`
  
  
`

export const StyledHeart = styled(FaPen)`
  transition: transform 0.2s ease-in-out;
  opacity: 0;
  transition: all 0.2s ease-in-out;

`;

export const DivIconeGlobalCard = styled.div`
display: flex;

  height: 50px;
  position: absolute;
   width: 100%;
   justify-content: flex-end;
   align-items: center;

`
export const DivIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  display: flex;
  justify-content: space-around;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transform: translateY(0%);
    opacity: 1;
    svg{
    transform: scale(1.2);
    transform: translateY(0%);
    opacity: 1;

    }
  }
   
`
export const ButtonModal = styled.button`
    color: #fff;
    background-color: #1677ff;
    box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 10px;
    margin-right: 5px;
    border: none;
    

`

export const DivModalGlobal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 4000;
  justify-content: center;
  align-items: center;

`
export const ModalContent = styled.div` 
 background-color: white;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  width: 40%;
 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

`

export const Imagem = styled.img`
object-fit: contain;

width: 100%;
height: 100%;

:hover{
 



}
`