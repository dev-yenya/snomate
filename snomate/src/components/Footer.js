import React, { Component } from 'react';
import style from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={style.footer}>
               <span>Copyright 2021. 솔록홈즈 all rights reserved.</span> 
            </div>
        );
    }
}

export default Footer;