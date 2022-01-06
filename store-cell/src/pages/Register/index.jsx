import React from "react";
import * as S from './Register.styles.js'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validatioCadastra = yup.object().shape({
    nome: yup.string().required('O campo nome é obrigatorio')
    .max(40, 'O nome precisa ter menos de 40 caracteres'),

    cpf: yup.string().required('O campo cpf é obrigatorio')
    .max(11, 'A cpf precisa ter menos de 11 caracteres'),

    email: yup.string().required('O campo email é obrigatorio')
    .max(40, 'O email precisa ter menos de 40 caracteres'),

    celular: yup.string().required('O campo celular é obrigatorio')
    .max(11, 'A celular precisa ter menos de 11 caracteres'),

    senha: yup.string().required('O campo senha é obrigatorio')
    .max(8, 'O senha precisa ter menos de 8 caracteres'),


})

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validatioCadastra)
    })

    const addCadastrar = data => console.log(data)

    return (

        <S.Container>
            <S.Login onSubmit={handleSubmit(addCadastrar)}>
                <h1>Cadastro</h1>
                <S.InputContainer>
                <label>Nome</label>
                    <div>
                        <i class="bi bi-person"></i>
                        <input
                            type="text"
                            placeholder="Nome..."
                            {...register("nome")} />
                    </div>
                    <span>{errors.nome?.message}</span>
                </S.InputContainer>
                <S.InputContainer>
                <label>Cpf</label>
                    <div>
                        <i class="bi bi-card-text"></i>
                        <input
                            type="text"
                            placeholder="Cpf..."
                            {...register("cpf")}  />
                    </div>
                    <span>{errors.cpf?.message}</span>
                </S.InputContainer>

                <S.InputContainer>
                <label>Email</label>
                    <div>
                        <i class="bi bi-envelope"></i>
                        <input
                            type="text"
                            placeholder="Email..."
                            {...register("email")}  />
                    </div>
                    <span>{errors.email?.message}</span>
                </S.InputContainer>

                <S.InputContainer>
                <label>Celular</label>
                    <div>
                        <i class="bi bi-phone"></i>
                        <input
                            type="text"
                            placeholder="Celular..."
                            {...register("celular")}  />
                    </div>
                    <span>{errors.celular?.message}</span>
                </S.InputContainer>

                <S.InputContainer>
                <label>Senha</label>
                    <div>
                        <i class="bi bi-shield-lock"></i>
                        <input
                            type="text"
                            placeholder="Senha..."
                            {...register("senha")}  />
                    </div>
                    <span>{errors.senha?.message}</span>
                </S.InputContainer>

                <S.ButtonCadastrar>
                        <button type="submit">
                            Cadastrar
                        </button>
                </S.ButtonCadastrar>

            </S.Login>

        </S.Container>
    )
}

export default Register;