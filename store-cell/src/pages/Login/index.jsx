import React, { useState } from "react";
import * as S from './Login.styles.js'
import Register from '../Register/index.jsx';


const Login = () => {

    const [registerPopup, setRegisterPopup] = useState(false)

    const handleRegisterPopup = () => { setRegisterPopup(true) }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }



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
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </S.InputContainer>

                <S.InputContainer>
                    <label>Senha</label>
                    <div>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Senha..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {show ?
                            <S.PasswordEye>
                                <i
                                    class="bi bi-eye"
                                    size={20}
                                    onClick={handleClick}
                                />
                            </S.PasswordEye>
                            :
                            <S.PasswordEye>
                                <i
                                    class="bi bi-eye-slash"
                                    size={20}
                                    onClick={handleClick}
                                ></i>
                            </S.PasswordEye>
                        }
                    </div>
                </S.InputContainer>

                <S.ButtonContainer>
                    <S.ButtonEntrar type="submit">
                        Entrar
                    </S.ButtonEntrar>

                    <h4>Não tenho conta!</h4>

                    <S.ButtonCadastrar type="button" onClick={() => handleRegisterPopup()}>
                        Cadastra-se
                    </S.ButtonCadastrar>
                </S.ButtonContainer>

                {registerPopup && <Register setClosePopup={setRegisterPopup} />}
            </S.Login>
        </S.Container >

    )
}

export default Login;