import React from "react";
import * as S from './Register.styles.js'

const Register = ({ setClosePopup }) => {
    console.log('resultado', setClosePopup)
    const handleClosePopup = () => setClosePopup(false);

    return (

        <S.Container>
            <S.Popup>

                <S.ButtonX type="button" onClick={() => handleClosePopup()}>X</S.ButtonX>

                <h1>Cadastro</h1>

                <S.Cadastro>
                    <S.InputNome>
                        <i class="bi bi-person"></i>
                        <input
                            type="text"
                            placeholder="Nome..." />
                    </S.InputNome>

                    <S.InputCpf>
                        <i class="bi bi-card-text"></i>
                        <input
                            type="text"
                            placeholder="Cpf..." />
                    </S.InputCpf>

                    <S.InputEmail>
                        <i class="bi bi-envelope"></i>
                        <input
                            type="text"
                            placeholder="Email..." />
                    </S.InputEmail>

                    <S.InputCell>
                        <i class="bi bi-phone"></i>
                        <input
                            type="text"
                            placeholder="Celular..." />
                    </S.InputCell>

                    <S.InputPassword>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type="text"
                            placeholder="Senha..." />
                    </S.InputPassword>
                </S.Cadastro>

                <S.ButtonCadastrar type="submit">
                    Cadastrar
                </S.ButtonCadastrar>
            </S.Popup>
        </S.Container>
    )
}

export default Register;