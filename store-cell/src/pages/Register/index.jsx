import React from "react";
import * as S from './Register.styles.js'

const Register = ({ setClosePopup }) => {
    console.log('resultado', setClosePopup)
    const handleClosePopup = () => setClosePopup(false);

    return (

        <S.Container>
            <S.Popup>

                <S.ContainerButton>
                    <S.ButtonX type="button" onClick={() => handleClosePopup()}>X</S.ButtonX>
                </S.ContainerButton>

                <h1>Cadastro</h1>

                <S.Cadastro>

                    <S.InputContainer>
                        <div>
                            <i class="bi bi-person"></i>
                            <input
                                type="text"
                                placeholder="Nome..." />
                        </div>
                    </S.InputContainer>
                    <S.InputContainer>
                        <div>
                            <i class="bi bi-card-text"></i>
                            <input
                                type="text"
                                placeholder="Cpf..." />
                        </div>
                    </S.InputContainer>

                    <S.InputContainer>
                        <div>
                            <i class="bi bi-envelope"></i>
                            <input
                                type="text"
                                placeholder="Email..." />
                        </div>
                    </S.InputContainer>

                    <S.InputContainer>
                        <div>
                            <i class="bi bi-phone"></i>
                            <input
                                type="text"
                                placeholder="Celular..." />
                        </div>
                    </S.InputContainer>

                    <S.InputContainer>
                        <div>
                            <i class="bi bi-shield-lock"></i>
                            <input
                                type="text"
                                placeholder="Senha..." />
                        </div>
                    </S.InputContainer>

                    <S.ButtonCadastrar type="submit">
                        Cadastrar
                    </S.ButtonCadastrar>

                </S.Cadastro>
                
            </S.Popup>
        </S.Container>
    )
}

export default Register;