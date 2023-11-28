
import { Container, Line, Wave } from "./styles"

import wave from '../../imgs/wave.png'

import { Menu } from '../Menu'


export function Footer(){
    return(
        <Container>
            <Line/>
            
            {/* Menu */}
            <Menu/>

            <img id="wave" src={wave} alt="imagem de fundo do footer" />
        </Container>
    )
}