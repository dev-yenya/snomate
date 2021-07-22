import React, { Component } from 'react';
import styles from './CreateProject.module.css'

class CreateProject extends Component {
    state = {
        title: "",
        period: "",
        body_text: "",
        body_images: null,
        question: "",
        answer: "",
        url_link: ""
    }
   
   /*handleValueChange(e){
        let nextState={};
        nextState[e.target.name]=e.target.Value;
        console.log(nextState);
        this.setState(nextState);
    }*/

    render() {
        return (
            <div className={styles.text_align}>
                <h2 className={styles.sub_title}><span className={styles.highlight}>글쓰기</span></h2>
                <form className={styles.input_form}>
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <input className={styles.input_box} type="text" name="title" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>모집기한</label><br/>
                        <input className={styles.input_box}type="date" name="period" value={this.state.period} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <input className={styles.input_box} type="text" placeholder="내용" name="body_text" value={this.state.body_text} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <input className={styles.input_box} type="file" name="body_images" value={this.state.body_images} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>질문</label><br/>
                        <input className={styles.input_box} type="text" placeholder="질문" name="question" value={this.question} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>답변</label><br/>
                        <input className={styles.input_box} type="text" placeholder="답변" name="answer" value={this.state.answer} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <input className={styles.input_box} type="url" name="url_link" value={this.state.url_link} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <button type="submit">작성</button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default CreateProject;