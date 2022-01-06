import React from "react";
import { Link } from "react-router-dom";
import * as S from './Login.styles.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validatioLogin = yup.object().shape({
    email: yup.string().required('O campo email é obrigatorio').max(40, 'O email precisa ter menos de 40 caracteres'),
    senha: yup.string().required('O campo senha é obrigatorio').max(8, 'A senha precisa ter menos de 8 caracteres')

})

const Login = () => {

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
                            placeholder="exemplo@exemplo.com.br" {...register("email")} />
                    </div>
                    <span>{errors.email?.message}</span>
                </S.InputContainer>

                <S.InputContainer>
                    <label>Senha</label>
                    <div>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type={"password"}
                            placeholder="senha..." {...register("senha")} />

                        <S.PasswordEye>
                            <i class="bi bi-eye" />
                        </S.PasswordEye>

                        <S.PasswordEye>
                            <i class="bi bi-eye-slash"></i>
                        </S.PasswordEye>
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