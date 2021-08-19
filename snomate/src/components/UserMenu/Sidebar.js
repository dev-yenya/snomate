import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "./profile.jpg";
import Bar from "./Bar";
import { ProgressBar} from 'react-bootstrap';

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 17%;
`
const Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-top: 30px;
  width: 210px;
  display: flex;
  flex-direction: column;
`

function Sidebar() {
  let [contact, contactchange] = useState(0);
  let [select, selectchange] = useState(0);

  const menus = [
    { name: "내가 쓴 글 (받을 컨택)", path: "/receivecontact" },
    { name: "신청한 프로젝트 (보낸 컨택)", path: "/sendcontact" },
    { name: "마음에 든 프로젝트", path: "/likedproject" },
    { name: "진행한 프로젝트", path: "/progressproject"}
  ];

  const progress1 = 36.5;

  return (
    <Side>
      <div>
        <Profile src={profile}></Profile> 
        <div> Name </div>
        <div> Email </div>
      </div>
      <div>        
          <span onClick={ ()=> { contactchange(contact+1) } }>📩</span> {contact}  
          <span onClick={ ()=> { selectchange(select+1) } }>📢</span> {select}        
      </div>

      <h1></h1>_
      <h1></h1>36.5°C
      <div style={{ width: 150 }}>
        <ProgressBar now={progress1} variant="success" />
      </div >
      <div>
        <Bar />
      </div>

      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}
              />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
}

export default Sidebar;