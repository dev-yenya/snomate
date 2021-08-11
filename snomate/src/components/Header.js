import React, { Component } from 'react';
import style from "./Section.module.css";

class MainHeader extends Component {
    handleClick = (e) =>{
       window.location.href="/" 
    }

    render() {
        return (
            <div className="black-nav">
                <div onClick={this.handleClick}>SNOMATE</div>
                <div className={style.spacer}></div>
                <button>Log In</button>
            </div>
        );
    }
}

export default MainHeader;