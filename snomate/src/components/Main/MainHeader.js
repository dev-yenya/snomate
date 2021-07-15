import React, { Component } from 'react';
import style from "./Main.module.css";

class MainHeader extends Component {
    render() {
        return (
            <div>
              <h1><span className={style.high_lighter}>SNOMATE</span></h1>
                <p>숙명여자대학교 학우들을 위한 프로젝트 조원찾기 커뮤니티입니다.</p>  
            </div>
        );
    }
}

export default MainHeader;