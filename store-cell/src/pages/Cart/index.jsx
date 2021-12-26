import React from 'react';
import * as S from './Cart.styles.js'

const Cart = () => {
    return (
        <S.Container>

            <h1>Minha Sacola</h1>

            <S.ContainerOptions>

                <S.Productor>
                    <img src="./img/CardCell.img/Cell-Iphone/Iphone01.jpg" alt="Celulariphone" />
                    <span>iPhone 11 Apple 128GB Preto tela 6,1" Câmera 12MP iOS</span>
                </S.Productor>

                <S.TheAmount>
                    <button>+</button>
                    <select>
                        <option>1</option>
                    </select>
                    <button>-</button>
                </S.TheAmount>

                <S.Value>
                    <p>R$:4.347,00</p>
                    <i class="bi bi-trash-fill"></i>
                </S.Value>

            </S.ContainerOptions>

            <S.Total>

                <p>Total: R$:4.347,00</p>

            </S.Total>

            <S.ButtonContinuar>
                
                    Continuar
                
            </S.ButtonContinuar>

        </S.Container>
    )
}

export default Cart;