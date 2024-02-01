import React, { useState } from 'react';
import styled from "styled-components";
import { menuItems } from '../../utils/MenuItem.js';
import { login, signout} from '../../utils/Icons.jsx';
import Button from '../Button/Button.jsx';

function Navigation({active, setActive}) {   

  return (
    <div>
        <NavStyled>

            <div className="user-con">

                <div className="text">
                    <h2>IE TRACK</h2>
                    <p>Track money</p>
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
                <Button
                    icon={login}
                    name={'Sign in'}
                    bg={'linear-gradient(to right,  #FFB6C1, #d8d8d8)'}
                    bPad={'15px'}
                    bRad={'10px'}
                />
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