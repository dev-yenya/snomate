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
    render() {
        return (
            <div>
                <h3>글쓰기</h3>
                <form className={styles.input_form}>
                    <div>
                        <label>제목</label>
                        <input type="text" name="title" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>모집기한</label>
                        <input type="date" name="period" value={this.state.period} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>내용</label>
                        <input type="text" placeholder="내용" name="body_text" value={this.state.body_text} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>대표 이미지</label>
                        <input type="file" name="body_images" value={this.state.body_images} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>질문</label>
                        <input type="text" placeholder="질문" name="question" value={this.question} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>답변</label>
                        <input type="text" placeholder="답변" name="answer" value={this.state.answer} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label>링크</label>
                        <input type="url" name="url_link" value={this.state.url_link} onChange={this.handleValueChange}/>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default CreateProject;