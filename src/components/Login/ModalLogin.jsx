import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaUser, FaLock, FaSmileBeam, FaSmile } from 'react-icons/fa';
import Logo from '../Imagens/7.png'
import { ModalContainer, Input, LoginButton, LoginForm, Container, ContainerInput, ContainerGlobalInput, ContainerIcon } from './styles'



import axios from 'axios';
const ModalLogin = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [register, setRegister] = useState(false)



    const navigate = useNavigate();
    let { id } = useParams()


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email: username, senha: password }

        axios.post('https://tasksmoments-production.up.railway.app/user/login-user', data)
            .then(response => {


                navigate("/home/" + response.data[0].id)
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSubmitRegistrar = (e) => {
        e.preventDefault();
        const data = { email: username, senha: password, name: name, lastName: lastname }


        axios.post('https://tasksmoments-production.up.railway.app/user/create-user', data)
            .then(response => {
                console.log(response.data.id)
                navigate("/home/" + response.data.id)
            })
            .catch(error => {
                console.error(error);
            });
    };


    return (



        <ModalContainer>
            <div style={{ width: '400px', height: '723px', display: 'flex', border: '1px, solid, black' }}>
                <img style={{ borderRadius: '30px 0px 0px 30px' }} src={Logo} />
            </div >
            <LoginForm method='post'>
                <Container style={{ marginTop: '50px' }}>
                    <h1 style={{ fontFamily: 'Red Hat Display, sans-serif', fontSize: '36px', fontWeight: 'bold' }}> Login</h1>

                </Container>

                <ContainerGlobalInput style={{ marginTop: '30px' }}>
                    <ContainerIcon>
                        <FaUser />
                    </ContainerIcon>
                    <ContainerInput>
                        <Input
                            type="text"
                            placeholder="Type your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </ContainerInput>

                </ContainerGlobalInput>

                <ContainerGlobalInput>
                    <ContainerIcon>
                        <FaLock />
                    </ContainerIcon>
                    <ContainerInput >
                        <Input
                            type="password"
                            placeholder="Type your Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </ContainerInput>


                </ContainerGlobalInput>

                {register ? (
                    <ContainerGlobalInput>
                        <ContainerIcon>
                            <FaSmile />
                        </ContainerIcon>
                        <ContainerInput >
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                                placeholder="Type your name"
                            />
                        </ContainerInput>


                    </ContainerGlobalInput>

                ) : <></>
                }
                {register ? (
                    <ContainerGlobalInput>
                        <ContainerIcon>
                            <FaSmileBeam />
                        </ContainerIcon>
                        <ContainerInput >
                            <Input
                                type="text"
                                value={lastname}
                                onChange={(e) => { setLastname(e.target.value) }}
                                placeholder="Type your name"
                            />
                        </ContainerInput>


                    </ContainerGlobalInput>

                ) : <></>
                }




                <div style={{ width: '100%', textAlign: 'right', marginTop: '10px' }}>
                    <a onClick={() => {
                        setRegister(register === false ? true : false);
                    }} style={{ fontFamily: 'Red Hat Display, sans-serif', color: '#696969', textDecoration: 'none' }} href='#'>Não está registrado?</a>
                </div>

                {register ? (
                    <></>
                ) : (<LoginButton onClick={handleSubmit} type="submit" style={{ marginTop: '50px' }}>Login</LoginButton>)
                }

                {register ? (
                    <LoginButton onClick={handleSubmitRegistrar} type="submit" >Registrar</LoginButton>

                ) : <></>
                }

            </LoginForm>

        </ModalContainer >

    )
}

export default ModalLogin