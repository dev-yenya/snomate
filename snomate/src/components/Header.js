import React, { Component } from 'react';
import style from "./Section.module.css";

class MainHeader extends Component {
    handleClickMain = (e) =>{
       window.location.href="/" 
    }
    
    handleClickCreate = (e) =>{
        window.location.href="/create"
    }

    render() {
        return (
            <div className="black-nav">
                <div onClick={this.handleClickMain}>SNOMATE</div>
                <div className={style.spacer}></div>
                <button onClick={this.handleClickCreate}>글쓰기</button>
                <button>Log In</button>
            </div>
        );
    }
}

export default MainHeader;