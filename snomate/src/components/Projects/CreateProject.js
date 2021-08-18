import React, { Component } from 'react';
import styles from './Projects.module.css'
import ProjectListService from './ProjectListService';

class CreateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[]
        }
       {/*} this.createBoard = this.createBoard.bind(this)*/}
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
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <input className={styles.input_box}type="date" name="end_date" value={this.state.end_date} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <input className={styles.input_box}type="date" name="project_start_date" value={this.state.project_start_date} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <input className={styles.input_box}type="date" name="project_end_date" value={this.state.project_end_date} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <input className={styles.input_box} type="text" placeholder="내용" name="body" value={this.state.body} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <input className={styles.input_box} type="file" name="body_images" value={this.state.body_images} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <input className={styles.input_box} type="url" name="url_link" value={this.state.url_link} onChange={this.handleFormSubmit}/>
                    </div>
                    <div>
                        <button type="submit" className={styles.button}>작성</button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default CreateProject;