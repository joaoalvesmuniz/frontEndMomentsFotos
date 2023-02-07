import React, { useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import { ButtonModal, InputModal } from '../Header/styles'
import { BodyHome, ContainerImagem, DivEditar, DivIcon, DivIconeGlobalCard, DivModalGlobal, DivTitulo, Imagem, ModalContent, StyledHeart } from './styles';


import { Modal as ModalComponente, Input } from "antd";

const Home = () => {


    const [myArray, setMyArray] = useState([]);
    const [arrayImagem, setImagemArray] = useState([]);
    const [imagemUpdate, setImagemUpdate] = useState("");
    const [nomeImagem, setNomeImg] = useState("");
    const [idImagem, setIdImage] = useState("");
    const [nomeImagemAtualizadaBd, setNomeImagemDb] = useState("");
    const [titleNew, setTitleNew] = useState("");


    React.useEffect(() => {
        axios.get('https://tasksmoments-production.up.railway.app/upload/all-images')
            .then(response => {
                setMyArray(response.data)

                console.log(response)
            })
            .catch(error => {

            });

    }, [])



    React.useEffect(() => {

        const newArray = myArray.map((nome) => {

            return nome.NomeImagem
        })

        setImagemArray(newArray)

    }, [myArray])


    const [isOpen, setIsOpen] = useState(false);



    const handleSubmitImagem = async () => {

        const formData = new FormData();
        formData.append("file", imagemUpdate);
        console.log(formData)



        await axios.post("https://tasksmoments-production.up.railway.app/upload/update-image", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            const dataImgUpdate = { NomeImagem: res.data, Titulo: titleNew }
            const urlPut = `https://tasksmoments-production.up.railway.app/upload/${idImagem}`

            axios.put(urlPut, dataImgUpdate).then(response => {
                window.location.reload()
                console.log("Respostas" + response.data)
            }).catch(error => {
                console.error(error);
            });
        }).catch(err => {
            console.error(err);


        });


    }


    const handleDeleteImg = async (e) => {


        console.log("Remover imagem " + idImagem)
        const urlDelteImagem = `https://tasksmoments-production.up.railway.app/upload/${idImagem}`
        await axios.delete(urlDelteImagem).then(response => {
            window.location.reload()
        }).catch(error => {


        })


    }



    console.log("Fora de tudo" + nomeImagemAtualizadaBd)
    const getNomeImg = (nomeImg, id) => {
        setNomeImg(nomeImg)
        setIdImage(id)
        console.log(nomeImg, id)

    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [showSecondary, setShowSecondary] = useState(false);

    return (

        <>

            {isOpen && (
                <DivModalGlobal>
                    <ModalContent>
                        <form>

                            <InputModal type="text" value={titleNew}
                                placeholder='Type your new title' onChange={(event) => setTitleNew(event.target.value)} />

                            <InputModal
                                type="file"
                                onChange={(event) => setImagemUpdate(event.target.files[0])}
                            />
                            <div style={{ width: '100%', justifyContent: 'flex-end', display: 'flex', marginTop: '30px' }}>
                                <ButtonModal type='button' onClick={() => {
                                    handleDeleteImg()

                                }} style={{ background: '#3432c2' }}  >
                                    Remover Foto
                                </ButtonModal>

                                <ButtonModal style={{ background: '#d41c1c' }} onClick={() => {
                                    closeModal()
                                }}>
                                    Close
                                </ButtonModal>

                                <ButtonModal type="submit" onClick={() => {

                                    closeModal()
                                    handleSubmitImagem()
                                }}>
                                    Enviar
                                </ButtonModal>
                            </div>
                        </form>
                    </ModalContent>
                </DivModalGlobal>
            )
            }

            <BodyHome>
                <div style={{ display: 'flex', width: '', minHeight: '969px', justifyContent: 'start', alignContent: 'flex-end' }}>
                    <Header />
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {myArray.map((i) => {

                            return <ContainerImagem key={i.NomeImagem} >
                                <DivEditar onClick={() => {
                                    openModal()

                                    getNomeImg(i.NomeImagem, i.id)

                                }} >

                                    <DivIconeGlobalCard>

                                        <DivIcon style={{ backgroundColor: "rgb(233, 233, 233)", marginRight: '10px', marginTop: '10px' }}>

                                            <StyledHeart />
                                        </DivIcon>
                                    </DivIconeGlobalCard>

                                    <DivTitulo className='divTitulo'>
                                        <p>{i.Titulo}</p>
                                    </DivTitulo>

                                </DivEditar>

                                <Imagem
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} value={i.NomeImagem} src={`https://tasksmoments-production.up.railway.app/upload/${i.NomeImagem}`} >

                                </Imagem>


                            </ContainerImagem>

                        })}

                    </div>
                </div >
            </BodyHome>
        </>
    )
}

export default Home