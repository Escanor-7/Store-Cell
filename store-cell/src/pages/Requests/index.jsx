import React from "react";
import { Link } from "react-router-dom";
import * as S from './Requests.styles.js';

const Requests = () => {

    return (

        <S.Container>

            <S.title>
                <i class="bi bi-truck"></i>
                <h1>Meus Pedidos</h1>
            </S.title>

            <S.Options>

                <h3>Pedido: 01</h3>

                <S.Productor>
                    <S.Descriptions>

                        <div>
                            <img src="./img/CardCell.img/Cell-Xiaomi/Xiaomi01.jpg" alt="Celular Xiaomi" />
                        </div>

                        <div>
                            <span>Produto: Celular Xiaomi Redmi Note 8</span>

                            <p>Valor: R$: 1.100,00</p>

                            <p>Quantidade: 1</p>
                        </div>
                    </S.Descriptions>

                </S.Productor>
                <S.Productor>
                    <S.Descriptions>

                        <div>
                            <img src="./img/CardCell.img/Cell-Xiaomi/Xiaomi02.jpg" alt="Celular Xiaomi" />
                        </div>

                        <div>
                            <span>Produto: Celular Xiaomi Redmi Note 9</span>

                            <p>Valor: R$: 1.500,00</p>

                            <p>Quantidade: 1</p>
                        </div>
                    </S.Descriptions>

                </S.Productor>

                <S.InforOrdenRow>

                    <div>
                        <p>Total: R$: 2.610,00</p>
                    </div>

                    <S.Status>
                        <p>Status:</p>
                        <span></span>
                        <p>Concluido</p>
                    </S.Status>

                    <div>

                        <p>Pagamento: <i class="bi bi-credit-card"></i> Credito</p>
                    </div>

                    <div id="footer">
                        <p>Frete: R$: 10,00</p>
                    </div>

                </S.InforOrdenRow>

            </S.Options>

            <Link to='/home' style={{ textDecoration: 'none' }}>
                <div>
                    <button>Voltar para home</button>
                </div>
            </Link>

        </S.Container>
    )
}


export default Requests;


