import React, { Component } from 'react';
import styles from './Projects.module.css'
import ProjectListService from './ProjectListService';
import moment from 'moment';

class UpdateProject extends Component {
    constructor(props){
        super(props)
        this.state = {
            no : this.props.match.params.no,
            project : {}
        }
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }

   handleValueChange = (e) =>{
        let nextState={};
        nextState = this.state
        nextState.project[e.target.name] = e.target.value
        this.setState(nextState)
        console.log(nextState)
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
        console.log("board => "+ JSON.stringify(this.state.project));
        ProjectListService.updateOneProject(this.state.project).then(res => {
            this.props.history.push('/');
        });
    }

    componentDidMount(){
        ProjectListService.getOneProject(this.state.no).then((res) => {
            this.setState({project:res.data});
            console.log(res.data);
        });
    }

    cancel() {
        this.props.history.push('/');
    }

    

    render() {
        return (
             <div className={styles.text_align}>
                 <h5 className={styles.sub_title}>수정하기</h5>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <input className={styles.input_box} type="text" name="title" placeholder="title" value={this.state.project.title} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>게시판</label><br/>
                        <select name="categoryId" className="input_box" value={this.state.project.categoryId} onChange={this.handleValueChange}>
                            <option value="1">교과목</option>
                            <option value="2">대외활동</option>
                            <option value="3">취미</option>
                        </select>
                    </div>
                    <br/>
                    {/*<div>
                        <label className={styles.input_label}>게시판 소제목</label><br/>
                        <input className={styles.input_box} type="text" name="categoryName" value={this.state.project.CategoryName} onChange={this.handleValueChange}/>
                    </div>
                    <br/>*/}
                    <div>
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <input className={styles.input_box} type="datetime-local" name="updateDate" value={this.state.project.updateDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectStartDate" value={this.state.project.projectStartDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectEndDate" value={this.state.project.projectEndDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <input className={styles.input_box} type="text" placeholder="내용" name="body" value={this.state.project.body} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <input className={styles.input_box} type="file" name="bodyImages" value={this.state.project.bodyImages} onChange={this.handleFileChange}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <input className={styles.input_box} type="url" name="urlLink" value={this.state.project.urlLink} onChange={this.handleValueChange}/>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>작성</button> <button onClick={this.cancel.bind(this)}>뒤로가기</button>
                    </div>
                </form>
            
            </div>
        );
    }
}

export default UpdateProject;