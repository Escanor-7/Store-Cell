import React from 'react';
import * as S from './Cart.styles.js'

<<<<<<< HEAD:store-cell/src/pages/Carrinho/index.jsx
const Carrinho = () => {


=======
const Cart = () => {
>>>>>>> 2e9a0fca99ef35b8d9fe266ec1778f184f91c9b7:store-cell/src/pages/Cart/index.jsx
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
<<<<<<< HEAD:store-cell/src/pages/Carrinho/index.jsx

                    <S.ButtonNumber>1</S.ButtonNumber>

=======
                    <select>
                        <option>1</option>
                    </select>
>>>>>>> 2e9a0fca99ef35b8d9fe266ec1778f184f91c9b7:store-cell/src/pages/Cart/index.jsx
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