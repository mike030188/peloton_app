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
font-family: Inter;
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
