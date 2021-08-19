import React, { Component } from 'react';
import styles from './Projects.module.css'
import ProjectListService from './ProjectListService';
import moment from 'moment';

class CreateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            categoryId:"",
            userId:"1",
            categoryName:"",
            title:"",
            stratDate:"2021-08-19",
            updateDate:"",
            endDate:"",
            projectStratDate:"",
            projectEndDate:"",
            body:"",
            urlLink:"",
            bodyImages:null,
            nowUse:true,
        }
        
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

   handleValueChange = (e) =>{
        let nextState={};
        nextState[e.target.name]=e.target.value;        
        console.log(nextState);
        this.setState(nextState);
    }

    handleDatetimeChange = (e) =>{
        let nextState={};
        nextState[e.target.name]=moment(e.target.value).format('YYYY-MM-DD HH:mm:ss');
        console.log(nextState);
        this.setState(nextState);
    }


    handleFileChange = (e) => {
        this.setState({
            bodyImages:e.target.file
        });
        console.log(this.bodyImages);
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log("board => "+ JSON.stringify(this.state));
        ProjectListService.createOneProject(this.state).then(res => {
            this.props.history.push('/');
        });
    }

    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
             <div className={styles.text_align}>
                 <h5 className={styles.sub_title}>작성하기</h5>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <input className={styles.input_box} type="text" name="title" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>게시판</label><br/>
                        <select name="categoryId" className="input_box" value={this.state.categoryId} onChange={this.handleValueChange}>
                            <option value="1">교과목</option>
                            <option value="2">대외활동</option>
                            <option value="3">취미</option>
                        </select>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>게시판 소제목</label><br/>
                        <input className={styles.input_box} type="text" name="categoryName" placeholder="게시판 소제목" value={this.state.CategoryName} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <input className={styles.input_box} type="datetime-local" name="updateDate" value={this.state.updateDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectStratDate" value={this.state.projectStratDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectEndDate" value={this.state.projectEndDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <input className={styles.input_box} type="text" placeholder="내용" name="body" value={this.state.body} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <input className={styles.input_box} type="file" name="bodyImages" value={this.state.bodyImages} onChange={this.handleFileChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <input className={styles.input_box} type="url" name="urlLink" value={this.state.urlLink} onChange={this.handleValueChange}/>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>작성</button> 
                        <button onClick={this.cancel.bind(this)}>뒤로가기</button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default CreateProject;