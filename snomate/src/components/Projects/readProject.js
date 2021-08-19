import React, { Component } from 'react';
import ProjectListService from './ProjectListService';
import styles from './Projects.module.css';

class readProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : this.props.match.params.no,
            project : {}
        }
    }

    componentDidMount(){
        ProjectListService.getOneProject(this.state.id).then( res=>{
            this.setState({project:res.data});
            console.log(res.data);
        });
    }

    returnBoardType(typeNo){
        let type = null;
        if (typeNo === 1) type = "교과목";
        else if(typeNo === 2) type = "대외활동";
        else if(typeNo === 3) type = "취미";
        return(
            <div>
                {type}
            </div>
        )
    }

    goToList(){
        this.props.history.push("/Article");
    }

    render() {
        return (
            <div className={styles.text_align}>
                <h5 className={styles.sub_title}>게시글 보기</h5>
                <div className={styles.input_form}>
                    <div>
                        <label className={styles.input_label}>제목</label><br/>
                        <div className={styles.input_box}>{this.state.project.title}</div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>게시판</label><br/>
                        <div className={styles.input_box}>{this.returnBoardType(this.state.project.categoryId)}</div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <div className={styles.input_box}>{this.state.project.updateDate}</div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <div className={styles.input_box}>{this.state.project.projectStratDate}</div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <div className={styles.input_box}>{this.state.projectEndDate}</div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>내용</label><br/>
                        <p className={styles.input_box}>{this.state.project.body}</p>
                    </div>
                    <br/>
                    {/*<div>
                        <label className={styles.input_label}>대표 이미지</label><br/>
                        <div className={styles.input_box} value={this.state.project.bodyImages} />
                    </div> <br/>*/}
                    <br/>
                    <div>
                        <label className={styles.input_label}>링크</label><br/>
                        <div className={styles.input_box} type="url">{this.state.project.urlLink}</div>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" >수정하기</button>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default readProject;