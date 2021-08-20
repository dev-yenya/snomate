import React, { Component } from 'react';
import styles from "./UpdateProject2.css"

class UpdateProject2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            body_text1: "",
            body_text2: "",       
        }
    }
   
    render() {
        return (
            <div className={styles.text_align}>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>한마디</label><br/>
                        <input className={styles.input_box} type="text" name="body_text1" value={this.state.body_text} />
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>자기소개</label><br/>
                        <input className={styles.input_box} type="text" name="body_text2" value={this.state.body_text} />
                    </div>
                    <br/>
                    <div>
                        <button type="accept" className={styles.button}>수락</button>
                        <button type="reject" className={styles.button}>거절</button>
                    </div>
                </form>           
            </div>
        );
    }
}

export default UpdateProject2;