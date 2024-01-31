import React, { useState } from 'react';
import styled from "styled-components";
import { menuItems } from '../../utils/MenuItem.js';
import { signout } from '../../utils/Icons.jsx';

function Navigation({active, setActive}) {   

  return (
    <div>
        <NavStyled>

            <div className="user-con">

                <div className="text">
                    <h2>Your Name</h2>
                    <p>Your Money</p>
                </div>

            </div>

            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li className={active === item.id ? "active": ""} key={item.id} onClick={() => setActive(item.id)}>
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
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }
    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation