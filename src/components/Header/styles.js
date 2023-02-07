import React from 'react';
import styled from 'styled-components';
import { FaPen } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #363636  0%, #4d4d4d 100%);
  color: #fff;
   width: 450px;
   
`;



export const DivModalGlobal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 4000;
  align-items: center;

`

export const InputModal = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #4CAF50;
  color: #4CAF50;
  font-size: 20px;

  padding: 10px;
  width: 85%;
  outline: none;
`

export const ModalContent = styled.div` 
 background-color: white;
  padding: 20px;
  position: absolute;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

`
export const ButtonModal = styled.button`
background-color: #4CAF50; /* Verde */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;

`

export const ImagemAvatar = styled.img`
   min-width: 116%;
   min-height: 190%;
  border-radius: 50%;
  object-fit: contain; 

`

export const ContainerAvatar = styled.div`
        border: 2px solid white;
    width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  margin-top: 50px;

  :hover{
 
    opacity: 0.5;

    svg{
      position: absolute;
      visibility: hidden;
    }
}
`

export const Item = styled.div`
  padding: 10px 0;
  text-align: center;
  cursor: pointer;
  &:hover{
    font-weight: bold;
    font-size: 1.2rem;
  }
`;