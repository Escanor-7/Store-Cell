import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from './Login.styles.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

// Validaçoes Abaixo >

const validatioLogin = yup.object().shape({
    email: yup.string().required('O campo email é obrigatorio')
    .max(40, 'O email precisa ter menos de 40 caracteres'),
    senha: yup.string().required('O campo senha é obrigatorio')
    .max(8, 'A senha precisa ter menos de 8 caracteres')

})

const Login = () => {

    // OlhoMagico Abaixo >

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show)
    }

    // Validaçoes Abaixo >

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validatioLogin)
    })

    const addLogin = data => console.log(data)

    return (
        <S.Container>
            <S.Login onSubmit={handleSubmit(addLogin)}>
                <h1>Login</h1>
                <S.InputContainer>
                    <label>Email</label>
                    <div>
                        <i class="bi bi-envelope"></i>
                        <input
                            type="email"
                            placeholder="exemplo@exemplo.com.br" {...register("email")}
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <span>{errors.email?.message}</span>
                </S.InputContainer>

                <S.InputContainer>
                    <label>Senha</label>
                    <div>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="senha..." {...register("senha")}
                            value={password}
                            onChange={e => setPassword(e.target.value)} />

                        {show ? (
                            <S.PasswordEye>
                                <i class="bi bi-eye"
                                    size={20}
                                    onClick={handleClick} />
                            </S.PasswordEye>
                        ) : (
                            <S.PasswordEye>
                                <i class="bi bi-eye-slash"
                                    size={20}
                                    onClick={handleClick}></i>
                            </S.PasswordEye>
                        )}

                    </div>
                    <span>{errors.senha?.message}</span>
                </S.InputContainer>

                <S.ButtonContainer>
                    <S.ButtonEntrar type="submit">
                        Entrar
                    </S.ButtonEntrar>

                    <h4>Não tenho conta!</h4>

                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <S.ButtonCadastrar type="button">
                            Cadastra-se
                        </S.ButtonCadastrar>
                    </Link>


                </S.ButtonContainer>

            </S.Login>
        </S.Container >

    )
}

export default Login;