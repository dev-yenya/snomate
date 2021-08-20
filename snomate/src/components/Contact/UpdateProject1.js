import React, { Component } from 'react';
import styles from './UpdateProject1.css'

class UpdateProject1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body_text1: "",
            body_text2: "",       
            question: "",
        }
    }
   
   handleValueChange = (e) =>{
        let nextState={};
        nextState[e.target.name]=e.target.value;
        console.log(nextState);
        this.setState(nextState);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({});
    }

    render() {
        return (
            <div className={styles.text_align}>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <input className={styles.input_box} type="text" name="title" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>한마디</label><br/>
                        <input className={styles.input_box} type="text" placeholder="한마디" name="body_text1" value={this.state.body_text} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>자기소개</label><br/>
                        <input className={styles.input_box} type="text" placeholder="자기소개" name="body_text2" value={this.state.body_text} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>질문</label><br/>
                        <input className={styles.input_box} type="text" placeholder="질문" name="question" value={this.question} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <button type="submit" className={styles.button}>수정</button>
                    </div>
                </form>           
            </div>
        );
    }
}

export default UpdateProject1;