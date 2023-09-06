import styled from "styled-components";
import BGimage from '../../assets/images/BGimage.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
background: #F5F7F9;
`
export const Header = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 66px;
gap: 6.563px;
background: #DF1C2F;

`
export const Text = styled.div`
color: #FFF;
text-align: center;
font-family: Inter, sans-serif;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 153.846% */
letter-spacing: 1.4px;
text-transform: uppercase;

a{
    color: #FFF;
    margin-left: 5px;
    cursor: pointer;

    &:hover{
        color: greenyellow;
        text-decoration:none;
    }
}
`
export const WrapperImg = styled.div`
background-image: url(${BGimage});
background-repeat: no-repeat;
background-position: center contain ;
background-size: cover;
height: 1000px;
width: 100%;

` 

export const Title = styled.div`
display: flex;
flex-direction: column;
color: #FFF;
margin: 325px 0 0 140px;

h5{
    font-family: Inter;
    font-size: 14px;
    font-weight: 700;
    line-height: 22.72px; /* 162.286% */
    letter-spacing: 1.8px;
}

h1{
    font-family: Inter;
    font-size: 42px;
    font-weight: 700;
    line-height: 55px; /* 130.952% */
    letter-spacing: 4.4px;
    margin: 11px 0 16px 0;
}

p{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px; /* 150% */
    letter-spacing: 0.6px;
}
`

export const Button = styled.button`
width: ${({wd})=>wd || '240px'};
height: ${({hgt})=>hgt || '56px'};
border-radius: 4px;
border: 2px solid #DF1C2F;
background: #DF1C2F;
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: normal;
letter-spacing: 1.5px;
margin: 52px 0 30px 0;
cursor: pointer;

&:hover{
    opacity: 0.9;
    transform: scale(0.98);
    color: greenyellow;
}

`

export const ConText = styled.div`
color: #FFF;
font-family: Roboto;
font-size: 14px;
font-weight: 300;
line-height: 23.94px; /* 171% */
letter-spacing: 0.3px;
`