import React from "react"
import * as S from './Footer.style'

const Footer = () => {

    return (

        <S.Footer>
            <S.Container>
                <S.Contacts>

                    <S.Title>
                        <h2>Contatos</h2>
                        <i className="bi bi-person-fill"></i>
                    </S.Title>

                    <S.Description>
                        <p>
                            Email: StoreCell@gmail.com
                        </p>

                        <p>
                            Telefone: (11) 9 70754259
                        </p>
                    </S.Description>
                    <S.SubTitle>
                        <h3>Redes Sociais:</h3>
                        <div>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-whatsapp"></i>
                            <i class="bi bi-instagram"></i>
                        </div>
                    </S.SubTitle>

                </S.Contacts>

                <S.Safety>
                    <S.Title>
                        <h2>Site Seguro</h2>
                        <i class="bi bi-shield-lock-fill"></i>
                    </S.Title>

                    <div>
                        <img src="./img/ImgFooter.img/siteSeguro.png" alt="Site Seguro" />
                    </div>

                    <S.SubTitle>
                        <h5>@StoreCell.Todos os Diretos Resevados</h5>
                    </S.SubTitle>
                </S.Safety>

                <S.Terms>
                    <S.Title>
                        <h2>Termos</h2>
                        <i class="bi bi-receipt"></i>
                    </S.Title>

                    <S.Description>
                        <p>
                            Politica de Privacidade
                        </p>

                        <p>
                            Termos de Uso
                        </p>
                    </S.Description>
                    <S.SubTitle>
                        <h3>Cartões:</h3>
                        <div>
                            <img src="./img/ImgFooter.img/cartoesDeCredito.jpg" alt="Cartões de Creditos" />
                        </div>
                    </S.SubTitle>
                </S.Terms>

            </S.Container>
        </S.Footer>

    )
}


export default Footer;