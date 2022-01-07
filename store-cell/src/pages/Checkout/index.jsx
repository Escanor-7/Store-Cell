import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from './Checkout.styles.js';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validatioCheckout = yup.object().shape({
    nome: yup.string().required('O campo nome é obrigatorio')
    .max(40, 'O nome precisa ter menos de 40 caracteres'),

    cartao: yup.string().required('O campo cartao é obrigatorio')
    .max(16, 'A cartao precisa ter menos de 16 caracteres'),

    codigo: yup.string().required('O campo codigo é obrigatorio')
    .max(3, 'A codigo precisa ter menos de 3 caracteres'),

})

const Checkout = () => {
    const [creditCardForm, setCreditCardForm] = useState(false);

    const [billetPrinting, setBilletPrinting] = useState(false);

    const handleCreditCardForm = () => {
        setCreditCardForm(true);
        setBilletPrinting(false);
    };

    const handleBilletPrintingButton = () => {
        setBilletPrinting(true);
        setCreditCardForm(false);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validatioCheckout)
    })

    const addCheckout = data => console.log(data)
    
    return (

        <S.Container>

            <h1>Finalizar Compra</h1>

            <S.ContainerDescriçoes onSubmit={handleSubmit(addCheckout)}>
                <h3>Revisão do Pedido</h3>

                <S.RevisaoDoPedido>

                    <S.Descrition>

                        <div>
                            <span>
                                Entrega 01 de 01 por Loja Oficial Apple - Receba em até 5 dias úteis
                                01 iPhone 11 64GB - Preto - Apple
                            </span>
                        </div>

                        <S.Endereço>
                            <span>
                                Endereço para a entrega 01: Pasquale Gallupi, 02, VIELA DA PAZ - Sao Paulo/SP
                            </span>
                            <div>
                                <a href="Link">Editar endereço</a>
                            </div>
                        </S.Endereço>

                    </S.Descrition>

                    <S.SubDescrition>
                        <div>
                            <div>
                                <span>
                                    Frete: <a href="Link">Grátis</a>
                                </span>
                            </div>

                            <div>
                                <span>
                                    Total: R$ 4.749,00
                                </span>
                            </div>
                        </div>

                    </S.SubDescrition>

                </S.RevisaoDoPedido>




                <S.ContainerPagamento>

                    <h3>Forma de Pagamento</h3>

                    <S.RadiosContainer className="radiosContainer">
                        <S.InputButton className="creditCard">
                            <input type="radio"
                                id="creditCard"
                                name="formPayment"
                                onClick={handleCreditCardForm} />

                            <S.Cartao>
                                <i class="bi bi-credit-card"></i>
                                <label>Cartão de credito</label>
                            </S.Cartao>

                        </S.InputButton>

                        {creditCardForm &&

                            <S.ContainerCartaoDeCredito>

                                <S.InputContainer>

                                    <label>Nome do Titular</label>
                                    <div>
                                        <i class="bi bi-person"></i>
                                        <input
                                            type="nome"
                                            placeholder="Ex: João Carlos"
                                            {...register("nome")} />
                                    </div>
                                    <span>{errors.nome?.message}</span>

                                </S.InputContainer>

                                <S.InputContainer>

                                    <label>Número do Cartão</label>
                                    <div>
                                        <i class="bi bi-credit-card"></i>
                                        <input
                                            type="cartao"
                                            placeholder="Ex: 000.000.000.000"
                                            {...register("cartao")} />
                                    </div>
                                    <span>{errors.cartao?.message}</span>

                                </S.InputContainer>

                                <S.InputContainer>

                                    <label>Código de Segurança</label>

                                    <div>
                                        <i class="bi bi-shield-lock"></i>
                                        <input
                                            type="codigo"
                                            placeholder="Ex: 000"
                                            {...register("codigo")} />
                                    </div>
                                    <span>{errors.codigo?.message}</span>

                                </S.InputContainer>

                                <S.InputContainer>

                                    <label>Validade</label>

                                    <S.ContainerOption>

                                        <select>
                                            <option selected value="#"{...register("mes")}>Més</option>
                                            <option value="#">01</option>
                                            <option value="#">02</option>
                                            <option value="#">03</option>
                                            <option value="#">04</option>
                                            <option value="#">05</option>
                                            <option value="#">06</option>
                                            <option value="#">07</option>
                                            <option value="#">08</option>
                                            <option value="#">09</option>
                                            <option value="#">10</option>
                                            <option value="#">11</option>
                                            <option value="#">12</option>
                                        </select>
                                

                                        <select>
                                            <option selected value="#" {...register("ano")}>Ano</option>
                                            <option value="#">2022</option>
                                            <option value="#">2023</option>
                                            <option value="#">2024</option>
                                            <option value="#">2025</option>
                                            <option value="#">2026</option>
                                            <option value="#">2027</option>
                                            <option value="#">2028</option>
                                            <option value="#">2029</option>
                                            <option value="#">2030</option>
                                            <option value="#">2031</option>
                                            <option value="#">2032</option>
                                            <option value="#">2033</option>
                                            
                                        </select>
                                        
                                        

                                    </S.ContainerOption>

                                </S.InputContainer>

                            </S.ContainerCartaoDeCredito>}
                    </S.RadiosContainer>

                </S.ContainerPagamento>

                <S.ContainerPagamento>
                    <S.InputButton>
                        <input type="radio"
                            name="formPayment"
                            onClick={handleBilletPrintingButton} />

                        <S.Boleto>
                            <i class="bi bi-download"></i>
                            <label>Boleto</label>
                        </S.Boleto>

                    </S.InputButton> {billetPrinting &&

                        <S.ButtonBoleto>
                            <i class="bi bi-download"></i>
                            Imprimir Boleto
                        </S.ButtonBoleto>
                    }

                </S.ContainerPagamento>

                <Link to='/requests' style={{textDecoration: 'none'}}>
                    <S.ButtonFinalizar>
                        <button type="submit">
                            Finalizar
                        </button>
                    </S.ButtonFinalizar>
                </Link>


            </S.ContainerDescriçoes>



        </S.Container>
    )
}

export default Checkout;