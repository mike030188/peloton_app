import React from 'react'
import NavbarComp from './Navbar'
import { Button, ConText, Container, Header, Text, Title, WrapperImg } from '../styles/Home.style'

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
            <Title>
              <h5>$150 off packages</h5>
              <h1>Spring training savings</h1>
              <p>Limited-time offer! Build strength this spring<br/>
               with a Peloton Guide Package and get $150<br/>
               off.**</p>
              <Button>Shop Guide</Button>
              <ConText style={{}}>Peloton Guide Membership separate</ConText>
            </Title>
        </WrapperImg>

        

    </Container>
  )
}

export default HomeComp