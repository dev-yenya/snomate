import React, { Component } from 'react';
import ProjectListService from './ProjectListService';
import styles from './Projects.module.css'

class readProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            no : this.props.match.params.no,
            project : {}
        }
    }

    componentDidMount(){
        ProjectListService.getOnArticle(this.state.no).then( res=>{
            this.setState({project:res.data});
            console.log(res.data);
        });
    }

    returnBoardType(typeNo){
        let type = null;
        if (typeNo == 1) type = "교과목";
        else if(typeNo == 2) type = "대외활동";
        else if(typeNo == 3) type = "취미";
        return(
            <div>
                <label> Board Type : </label> {type}
            </div>
        )
    }

    goToList(){
        this.props.history.push("/Article");
    }


    returnDate(cTime, uTime, sTime, eTime){
        <div>
            <label >생성일 : {cTime}/ 최종수정일 : {uTime}</label>
            <label>프로젝트 시작일 : {sTime}/ 프로젝트 마감일 : {eTime}</label>
        </div>
    }

    render() {
        return (
            <div className={styles.text_align}>
                <div>
                    {this.returnBoardType(this.state.project.categoryId)}
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <div className={styles.input_box} value={this.state.project.title} />
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <div className={styles.input_box} value={this.state.project.updateDate}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <div className={styles.input_box} value={this.state.project.projectStratDate}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <div className={styles.input_box} value={this.state.projectEndDate} />
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <p className={styles.input_box}>{this.state.project.body}</p>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <div className={styles.input_box} value={this.state.project.body_images} />
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <input className={styles.input_box} type="url"  value={this.state.project.url_link}/>
                    </div>
                    <div>
                        <button type="submit" >수정하기</button>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default readProject;