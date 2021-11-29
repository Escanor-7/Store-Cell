import React from "react";
import * as S from './Checkout.styles.js';

const Checkout = () => {
    return (

        <S.Container>

            <h1>Finalizar Compra</h1>

            <S.ContainerDescriçoes>
                <h3>Revisão do Pedido</h3>

                <S.RevisaoDoPedido>
                    <span>
                        Entrega 01 de 01 por Loja Oficial Apple - Receba em até 5 dias úteis
                        01 iPhone 11 64GB - Preto - Apple
                    </span>
                    <span>
                        <a href="link">Editar Sacola</a>
                    </span>

                    <S.RevisaoTotal>
                        <span>
                            Frete:
                            <a href="Link"> Grátis</a>
                        </span>

                        <span>
                            Total: R$ 4.549,00
                        </span>
                    </S.RevisaoTotal>

                    <span>
                        Endereço para a entrega 01: Jorge Coelho, 700 - Sao Paulo/SP
                    </span>
                    <span>
                        <a href="link">Alterar Endereço</a>
                    </span>

                </S.RevisaoDoPedido>


                <S.ContainerPagamento>

                    <h3>Forma de Pagamento</h3>

                    <div>
                        <h2>
                            Cartão de Credito</h2>
                    </div>

                    <S.InputContainer>
                        <label>Nome do Titular</label>
                        <div>
                            <i class="bi bi-person"></i>
                            <input
                                type="text"
                                placeholder="Ex: João Carlos" />
                        </div>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Número do Cartão</label>
                        <div>
                            <i class="bi bi-credit-card"></i>
                            <input
                                type="numero"
                                placeholder="Ex: 000.000.000.000" />
                        </div>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Código de Segurança</label>
                        <div>
                            <i class="bi bi-shield-lock"></i>
                            <input
                                type="codigo"
                                placeholder="Ex: 000" />
                        </div>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Validade</label>
                        <S.ContainerOption>
                            <select>
                                <option selected value="#">Més</option>
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
                                <option selected value="#">Ano</option>
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

                </S.ContainerPagamento>

                <div>
                    <button>
                        Finalizar
                    </button>
                </div>

            </S.ContainerDescriçoes>

        </S.Container>
    )
}

export default Checkout;