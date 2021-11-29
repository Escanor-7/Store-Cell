import React from 'react';
import * as S from './Bag.styles.js'

const Bag = () => {
    return (
        <S.Container>

            <h1>Minha Sacola</h1>

            <S.ContainerDescricoes>
                <span>
                    Quantidade
                </span>
                <span>
                    Preço
                </span>
            </S.ContainerDescricoes>

            <S.ContainerProductor>

                <img src="./img/CardCell.img/Cell-Iphone/Iphone01.jpg" alt="Celular Iphone" />

                <div>
                    <span>
                        Apple iPhone iPhone 11 iOS Tela de 6,1 polegadas 12 MP
                    </span>
                </div>

                <S.ContainerOption>
                    <select>
                        <option Selection value="#">01</option>
                        <option value="#">02</option>
                        <option value="#">03</option>
                        <option value="#">04</option>
                        <option value="#">05</option>
                    </select>
                </S.ContainerOption>

                <S.ContainerSubDescricoes>
                    <span>
                        Frete:
                        <a href="Link">Grátis</a>
                    </span>
                    <span>
                        SubTotal: R$ 4.783,90
                    </span>
                </S.ContainerSubDescricoes>

            </S.ContainerProductor>

        </S.Container>
    )
}

export default Bag;