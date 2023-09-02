import React from 'react'
import NavbarComp from './Navbar'
import { Container, Header, Text, WrapperImg } from '../styles/Home.style'

const HomeComp = () => {
  return (
    <Container>
        <Header>
            <Text>Limited-time offer—the Refurbished Peloton Bike is now $995.* 
                <span><a href="/">SHOP BIKE</a></span>
            </Text>
        </Header>
        <WrapperImg>
            <NavbarComp/>
        </WrapperImg>

        

    </Container>
  )
}

export default HomeComp