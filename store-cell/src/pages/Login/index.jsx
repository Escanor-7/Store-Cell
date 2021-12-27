import React from "react";
import * as S from './Login.styles.js'


const Login = () => {
    return (
        <S.Container>
            <S.Login>
                <h1>Login</h1>
                <S.InputContainer>
                    <label>Email</label>
                    <div>
                        <i class="bi bi-envelope"></i>
                        <input
                            type="email"
                            placeholder="exemplo@exemplo.com.br"
                        />
                    </div>
                </S.InputContainer>

                <S.InputContainer>
                    <label>Senha</label>
                    <div>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type={"password"}
                            placeholder="Senha..." />

                        <S.PasswordEye>
                            <i class="bi bi-eye" />
                        </S.PasswordEye>

                        <S.PasswordEye>
                            <i class="bi bi-eye-slash"></i>
                        </S.PasswordEye>
                    </div>
                </S.InputContainer>

                <S.ButtonContainer>
                    <S.ButtonEntrar type="submit">
                        Entrar
                    </S.ButtonEntrar>

                    <h4>Não tenho conta!</h4>

                    <S.ButtonCadastrar type="button">
                        Cadastra-se
                    </S.ButtonCadastrar>
                </S.ButtonContainer>

            </S.Login>
        </S.Container >

    )
}

export default Login;