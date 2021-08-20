import React, { Component, useState } from 'react';
import ProjectListService from '../Projects/ProjectListService';
import styles from './Projects.module.css'

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            userName:this.props.match.params.name,
            euserEmail:this.props.match.params.email,
            nickname:"",
            studentid:"",
            stratDate:"",
            phonenum:"",
            password:""
        }
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange = (e) =>{
        let nextState={};
        nextState[e.target.name]=e.target.value;        
        console.log(nextState);
        this.setState(nextState);
    }

    cancel() {
        this.props.history.push('/');
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(e.password !== e.passwordCheck){
            alert("Error: Please check that you've entered and confirmed your password!");
        }
        console.log("회원가입 정보 => "+ JSON.stringify(this.state));
        ProjectListService.createOneProject(this.state).then(res => {
            this.props.history.push('/');
        });
    }

    onChangesPasswordChk = (e) =>{
        // setPasswordError(e.target.value !== password);
        // setPasswordCheck(e.target.value);
    }

    
    render() {
        return (
            <div className={styles.text_align}>
                 <h5 className={styles.sub_title}>회원가입</h5>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>이름</label><br/>
                        <input className={styles.input_box} type="text" name="userName" placeholder="이름을 입력해주세요" value={this.state.userName} readOnly/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>이메일</label><br/>
                        <input className={styles.input_box} type="text" name="userEmail" value = {this.state.userEmail} readOnly/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>닉네임</label><br/>
                        <input className={styles.input_box} type="text" name="userNickname" placeholder="닉네임을 입력해주세요" value={this.state.userNickname} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>학번</label><br/>
                        <input className={styles.input_box} type="text" name="userStudentId" placeholder="학번을 입력해주세요" value={this.state.userStudentId} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>전화번호</label><br/>
                        <input className={styles.input_box} type="tel" name="userPhoneNumber" placeholder="전화번호를 입력해주세요" value={this.state.userPhoneNumber} onChange={this.handleValueChange}
                        pattern = "01[016789][^0][0-9]{2,3}[0-9]{3,4}"
                        title = "전화번호 형식으로 입력해주세요.(하이픈은 제외해주세요.)"/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>비밀번호</label><br/>
                        <input className={styles.input_box} type="password" name="userPassword" placeholder="비밀번호를 입력해주세요" value={this.state.userPassword} onChange={this.handleValueChange} pattern = "^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$" title = "비밀번호는 숫자, 문자, 특수문자를 모두 활용한 8~16자리여야 합니다."/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>비밀번호 확인</label><br/>
                        <input className={styles.input_box} type="password"  name="passwordCheck" placeholder="비밀번호를 확인해주세요" value={this.state.passwordCheck} onChange={this.handleValueChange}/>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>가입하기</button> <button onClick={this.cancel.bind(this)}>뒤로가기</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
