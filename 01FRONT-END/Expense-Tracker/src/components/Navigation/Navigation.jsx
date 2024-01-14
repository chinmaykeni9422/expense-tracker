import React from 'react';
import styled from "styled-components";
import { menuItems } from '../../utils/MenuItem.js';
import { signout } from '../../utils/Icons.jsx';

function Navigation() {
  return (
    <div>
        <NavStyled>

            <div className="user-con">

                <div className="text">
                    <h2>chinmay</h2>
                    <p>Your Money</p>
                </div>

            </div>

            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li key={item.id}>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                })}
            </ul>

            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
              
        </NavStyled>
    </div>
  )
}

const NavStyled = styled.nav`
padding: 2rem 1.5rem;
width: 374px;
height: 100%;  
`;

export default Navigation