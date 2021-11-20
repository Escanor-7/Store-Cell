import React from "react"
import * as C from './Footer.style'

const Footer = () =>{

    return(
     
        <C.Container>
            
            <C.Box1>
                <C.Info>
                    <h2>Informações de Contato</h2>
                    <C.Space/>

                    <img src="https://img.icons8.com/fluency/48/000000/info.png"/>
                </C.Info>
           
                <C.InfoMidias>
                    <C.IconsMidias src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-phone-notifications-justicon-flat-justicon.png" />
                    <C.Space/>
                    <h2>(11) 0977449550</h2>
                </C.InfoMidias>
                
                <C.InfoMidias>
                    <C.IconsMidias src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
            
                    <C.Space/>
                    
                    <h2>StoreCell@gmail.com</h2>
                </C.InfoMidias>
           
                <C.MidiasFinish>
                    <h2>Nos sigas as redes Sociais!</h2>

                    <C.MidiasFhotos>
                        <C.IconsMidias src="https://img.icons8.com/color/48/000000/facebook-circled--v1.png" />
                        <C.IconsMidias  src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                        <C.IconsMidias src="https://img.icons8.com/color/48/000000/twitter--v2.png" />

                   
                 
                    </C.MidiasFhotos>
                </C.MidiasFinish>

            </C.Box1>

            <C.Box2>
                <C.LogoImg src="./img/Store-cell.png" alt="logoStoreCell"/>
            </C.Box2>

        </C.Container>

    )
}


export default Footer;