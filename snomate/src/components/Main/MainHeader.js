import React, { Component } from 'react';
import style from "./Main.module.css";

class MainHeader extends Component {
    render() {
        return (
            <div className={style.text_align}>
              <h1 className={style.header_title}><span className={style.highlight}>SNOMATE</span></h1>
                <p className={style.sub_title}>숙명여자대학교 학우들을 위한 프로젝트 조원찾기 커뮤니티.</p> 
            </div>
        );
    }
}

export default MainHeader;