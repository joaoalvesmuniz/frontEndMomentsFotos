import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Item, ContainerAvatar, ImagemAvatar, DivModalGlobal, ModalContent, ButtonModal, InputModal } from './styles'
import axios from 'axios'
import { useModalContext } from '../Modal/modalcontext';
import { Modal as ModalComponente, Input } from "antd";
import { FaHeart, FaPen } from 'react-icons/fa';


const Header = () => {

    let { id } = useParams();

    localStorage.setItem("idUser", id)

    const [nomeUser, setNomeUser] = useState('')
    const [diretorio, setDiretorio] = useState('')
    const [imagemUpdate, setImagemUpdate] = useState("");
    const [tituloImagem, setTituloImagem] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const data = { id: id }


    axios.post('https://tasksmoments-production.up.railway.app/user/user-found', data)
        .then(response => {

            setNomeUser(response.data.user.name)
            setDiretorio(response.data.user.Avatar)

        })
        .catch(error => {
            console.error(error);
        });


    const { openModal } = useModalContext()



    const idUser = localStorage.getItem('idUser');


    const {
        modalState: { visible },
        closeModal,
    } = useModalContext();

    const [profilePicture, setProfilePicture] = useState("");

    const nomeImg = profilePicture.name
    console.log()
    const handleSubmitImagem = async () => {
        const formData = new FormData();
        formData.append("fileAvatar", profilePicture);

        axios.post("https://tasksmoments-production.up.railway.app/upload-profile", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(res => {
                console.log(res.data);
                const data = { NomeImagem: res.data, Titulo: "dsakjksad" }
                axios.post("https://tasksmoments-production.up.railway.app/upload/create-imagemdb",)
                window.location.reload()
            })
            .catch(err => {
                console.error(err);
            });

        const urlPut = `https://tasksmoments-production.up.railway.app/upload-profile/${idUser}`
        const data = { Avatar: nomeImg }
        axios.put(urlPut, data).then(response => {

            console.log(profilePicture.name)
            window.location.reload()

        })
            .catch(error => {
                console.error(error);
            });
    };

    const closeModalAdmin = () => setIsOpen(false)
    const handleNewImagemTitle = async () => {

        const formData = new FormData();
        formData.append("file", imagemUpdate);

        axios.post("https://tasksmoments-production.up.railway.app/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res.data)
            console.log(tituloImagem)
            const data = { NomeImagem: res.data, Titulo: tituloImagem }
            axios.post("https://tasksmoments-production.up.railway.app/upload/create-imagemDb", data)
                .then(response => {
                    console.log(response)
                    window.location.reload()
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }


    return (
        <>
            {isOpen && (
                <DivModalGlobal>
                    <ModalContent>
                        <InputModal value={tituloImagem} placeholder={"Type your title"} onChange={(e) => setTituloImagem(e.target.value)} type='text' style={{ marginBottom: '30px' }} />

                        <InputModal
                            type="file"
                            onChange={(event) => setImagemUpdate(event.target.files[0])}
                        />
                        <div style={{ display: 'flex', alignItems: "flex-end", justifyContent: "flex-end", marginTop: "30px" }}>
                            <ButtonModal type='submit' onClick={() => {
                                closeModalAdmin()

                            }}>Close</ButtonModal>
                            <ButtonModal type="submit" onClick={() => {
                                handleNewImagemTitle()
                                closeModalAdmin()

                            }}>Enviar</ButtonModal>
                        </div>
                    </ModalContent>
                </DivModalGlobal>
            )}



            <ModalComponente onOk={() => {
                closeModal()
                handleSubmitImagem()

            }} onCancel={() => {
                closeModal()
            }} visible={visible} >
                <p>Escolha sua foto de perfil</p>

                <Input
                    type="file"
                    onChange={(event) => setProfilePicture(event.target.files[0])}
                />
            </ModalComponente >

            <Container>
                <ContainerAvatar onClick={openModal}>
                    {
                        diretorio ? (
                            <>
                                <FaPen style={{ visibility: 'visible' }} />
                                <ImagemAvatar src={`https://tasksmoments-production.up.railway.app/upload-profile/${diretorio}`} ></ImagemAvatar>
                            </>

                        ) : (
                            <>
                                <FaPen style={{ visibility: 'visible' }} />
                                <ImagemAvatar src={'https://media.istockphoto.com/id/844000458/pt/vetorial/default-placeholder-man.jpg?s=612x612&w=0&k=20&c=lQ37cOcN84D3xABXJnDCbP2j8hvYBQ4sQ197_rzanUE='} ></ImagemAvatar>
                            </>
                        )

                    }

                </ContainerAvatar>

                <Item style={{ marginBottom: '50px', marginTop: '50px' }}> Bem Vindo , {nomeUser} !</Item>
                <Item>Home</Item>
                <Item ><a onClick={() => {
                    setIsOpen(true)
                }}>Add Photos</a></Item>

            </Container >
        </>
    )

}

export default Header