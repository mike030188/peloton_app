import styled from "styled-components";

export const NavMain = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 13px 32px;
`
export const Logo = styled.div`


`
export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

button{
    display: flex;
    align-items: center;
    color: var(--text, #373737);
    font-size: 16px;
    line-height: normal;
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:hover{
        color: yellow;
        border-radius: 5px;
        text-decoration:underline;
    }
}

div{
    width: 100%;
    background-color: #FFF;
    left: 0;
    z-index: 100;
    position: absolute;
    height: 170px;
    margin-top: 250px;   
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 12px;
    border-top: 1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
`
export const Icons = styled.div`
color: #FFF;
cursor: pointer;
font-size: 17px;

:hover{

    transform: scale(0.98);

}
`