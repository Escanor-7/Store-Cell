import React from 'react';
import * as S from './Bag.styles.js'

const Bag = () => {
    return (
        <S.Container>

            <h1>Minha Sacola</h1>

            <S.ContainerItens>

                <S.ContainerOpcoes>

                    <S.OpcoesQuantidade>
                        <p>Quantidade</p>
                    </S.OpcoesQuantidade>

                    <S.OpcoesPreco>
                        <p>Preço</p>
                    </S.OpcoesPreco>

                </S.ContainerOpcoes>

                <S.ContainerProductor>
                    <img src="./img/CardCell.img/Cell-Iphone/Iphone01.jpg" alt="Celular Iphone" />
                    <div>
                        <p>iPhone 11 Apple 128GB Preto 6,1” 12MP iOS</p>
                    </div>

                    <S.ContainerDropdown>

                        <select>
                            <option selected value="#">1</option>
                            <option value="#">2</option>
                            <option value="#">3</option>
                            <option value="#">4</option>
                            <option value="#">5</option>
                        </select>
                        
                    </S.ContainerDropdown>

                    <div>
                        <a href="link">Remover</a>
                    </div>

                    <S.ContainerValor>
                        <p>
                            R$ 4.184,07 à vista
                        </p>
                    </S.ContainerValor>

                </S.ContainerProductor>

                <S.ContainerContinuar>
                    <div>
                        <p>
                            Total: R$ 4.184,07
                        </p>
                    </div>

                    <div>
                        <button>
                            Continuar
                        </button>
                    </div>
                </S.ContainerContinuar>

            </S.ContainerItens>
        </S.Container>
    )
}

export default Bag;