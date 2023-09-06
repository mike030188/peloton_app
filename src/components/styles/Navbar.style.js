import styled from "styled-components";

export const NavMain = styled.div`
display: flex;
align-items: center;
padding: 13px 32px;
`
export const Logo = styled.div`
flex: 1;

`
export const Menu = styled.div`
display: flex;
flex: 4;
align-items: center;
justify-content: space-evenly;
font-family: Inter, sans-serif;
font-size: 13px;

button{
    display: flex;
    align-items: center;
    line-height: normal;
    color: #FFF;
    border: none;
    cursor: pointer;
    background-color: transparent;

    &:hover{
        color: greenyellow;
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

a{
    color: #FFF;
    font-weight: 700;
    line-height: 20px; /* 153.846% */
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-decoration: none;
    
    &:hover{
        color: greenyellow;
        border-radius: 5px;
        text-decoration:underline;
    }
}
`
export const Icons = styled.div`
display: flex;
justify-content: right;
flex: 1;
color: #FFF;
cursor: pointer;
font-size: 17px;



:hover{
    color: greenyellow;
    transform: scale(0.98);

}
`