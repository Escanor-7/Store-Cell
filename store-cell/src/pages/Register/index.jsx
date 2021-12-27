import React from "react";
import { Link } from "react-router-dom";
import * as S from './Register.styles.js'

const Register = () => {

    return (

        <S.Container>
            <S.Login>
                <h1>Cadastro</h1>
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

                <S.ButtonCadastrar>
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <button>
                            Cadastrar
                        </button>
                    </Link>

                </S.ButtonCadastrar>

            </S.Login>

        </S.Container>
    )
}

export default Register;