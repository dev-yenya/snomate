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
        this.deleteView = this.deleteView.bind(this);

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

    deleteView = async function () {
        if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            ProjectListService.deleteOneProject(this.state.id).then( res => {
                if (res.status === 200) {
                    window.location.href="/";
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }

    goToList() {
        window.location.href="/";
    }

    goToUpdate(no){
        window.location.href="/update/"+no;
    }

    goToContact(no){
        window.location.href="/contact/"+no;
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
                    {/*<div>
                        <label className={styles.input_label}>게시판 소제목</label><br/>
                        <div className={styles.input_box}>{this.returnBoardType(this.state.project.categoryName)}</div>
                    </div>
                    <br/>*/}
                    <div>
                        <label className={styles.input_label}>조원 모집기한</label><br/>
                        <div className={styles.input_box}>{this.state.project.updateDate}</div>
                    </div>
                    <br/>
                    {/*<div>
                        <label className={styles.input_label}>프로젝트 시작일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectStartDate" value={this.state.project.projectStartDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>프로젝트 마감일</label><br/>
                        <input className={styles.input_box}type="datetime-local"  name="projectEndDate" value={this.state.project.projectEndDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>*/}
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
                        <button onClick={this.goToList}>뒤로가기</button> <button onClick={() => this.goToUpdate(this.state.id)} >수정하기</button> <button onClick={this.deleteView}>삭제하기</button> <button onClick={() => this.goToContact(this.state.id)} > 컨택하기</button>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default readProject;