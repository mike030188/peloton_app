import React, { useReducer } from 'react';
import logo from '../../assets/images/logo.svg';
import {CiLocationOn} from 'react-icons/ci';
import {FaAngleDown, FaUser} from 'react-icons/fa';
import {PiShoppingCartBold} from 'react-icons/pi';
import { Logo, NavMain, Icons, Menu } from '../styles/Navbar.style';

import bike from '../../assets/images/Bikes.png.png';
// import bike from '../../assets/images/Bikes.png.png';
// import bike from '../../assets/images/Bikes.png.png';
// import bike from '../../assets/images/Bikes.png.png';

const reducer = (state, action) => {
    switch (action.type) {
        case "showToggle1":
            return { showBike: !state.showBike };
        case "showToggle2":
            return { showTread: !state.showTread };
        case "showToggle3":
            return { showStrength: !state.showStrength };
        case "showToggle4":
            return { showRow: !state.showRow };
        case "showToggle5":
            return { showApp: !state.showApp };
        default:
            return state;
    }
}

const NavbarComp = () => {
    
    const [state, dispatch] = useReducer(reducer, {
        showBike: false,
    });

  return (
    <NavMain>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
        <Menu>
            <button onClick={() => {
                dispatch({ type: "showToggle1"});
            }}>BIKES <FaAngleDown/>
            </button>
            {state.showBike && (
                <div style={{flexDirection:'column'}}>
                    <img src={bike} alt="" />
                    <h2>Bikes</h2>
                </div>
            )}

            <button onClick={() => {
                dispatch({ type: "showToggle2"});
            }}>TREAD <FaAngleDown/>
            </button>
            {state.showTread && (
                <div style={{flexDirection:'column'}}>
                    <img src={bike} alt="" />
                    <h2>Tread</h2>
                </div>
            )}
            <button onClick={() => {
                dispatch({ type: "showToggle3"});
            }}>STRENGTH <FaAngleDown/>
            </button>
            {state.showStrength && (
                <div style={{flexDirection:'column'}}>
                    <img src={bike} alt="" />
                    <h2>Strength</h2>
                </div>
            )}

            <button onClick={() => {
                dispatch({ type: "showToggle4"});
            }}>ROW <FaAngleDown />
            </button>
            {state.showRow && (
                <div style={{flexDirection:'column'}}>
                    <img src={bike} alt="" />
                    <h2>Row</h2>
                </div>
            )}
            <button onClick={() => {
                dispatch({ type: "showToggle5"});
            }}>APP <FaAngleDown />
            </button>
            {state.showApp && (
                <div style={{flexDirection:'column'}}>
                    <img src={bike} alt="" />
                    <h2>App</h2>
                </div>
            )}
            <a href="/accessories" >Accessories</a>
            <a href="/apparel" >Apparel</a>
        </Menu>
        <Icons>
            <CiLocationOn style={{fontWeight:'bolder'}}/>
            <FaUser style={{margin:'0 24px'}}/>
            <PiShoppingCartBold/>
        </Icons>
    </NavMain>
  )
}

export default NavbarComp