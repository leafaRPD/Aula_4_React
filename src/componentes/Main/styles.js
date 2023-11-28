import styled from 'styled-components'


export const Wrapper = styled.div`
    width: 626px;
    height: 486px;
    margin: 32px auto 64px;
    /*margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 64px;*/

`

export const Image = styled.div `
    width: 350px;
    height: 238px;
    margin: 0 auto 32px;

    img {
    margin-bottom: 32px;
    }
    /*
        cima, direita, esquerda e baixo
        
        margin-top: 0;
        margin-right: auto;
        margin-bottom: 32px;
        margin-left: auto;
    */
    /*auto - preenche todos os espaços de maneira igualmente*/
`
export const Title = styled.h1 `
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    line-height: 56px;
    font-weight: normal;
    /*negrito*/
    margin-bottom: 16px;
    span {
    /* span dentro do h1*/
    color: #EE24FF;
    font-weight: bold;
    }
`

export const Span = styled.span`
    a {
    /* span e a*/
    color: #FF9900;
}
`

export const Paragraph = styled.p`
    
    color: #7D7987;
    font-size: 15px;
    line-height: 28px;
  
`