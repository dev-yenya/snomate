import React, { Component } from 'react';
import ProjectListService from './ProjectListService';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            
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

        if(password !== passwordCheck){
            return setPasswordError(true);
        }
        console.log("회원가입 정보 => "+ JSON.stringify(this.state));
        ProjectListService.createOneProject(this.state).then(res => {
            this.props.history.push('/');
        });
    }

    onChangesPasswordChk = (e) =>{
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }

    render() {
        return (
            <div className={styles.text_align}>
                 <h5 className={styles.sub_title}>회원가입</h5>
                <form className={styles.input_form} onSubmit={this.handleSubmit}>
                    <div>
                        <label className={styles.input_label}>이름</label><br/>
                        <div className={styles.input_box}></div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>이메일</label><br/>
                        <div className={styles.input_box}></div>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>닉네임</label><br/>
                        <input className={styles.input_box} type="text" name="categoryName" placeholder="학번을 입력해주세요" value={this.state.CategoryName} onChange={this.handleValueChange}/>
                    </div>
                    <div>
                        <label className={styles.input_label}>학번</label><br/>
                        <input className={styles.input_box} type="text" name="categoryName" placeholder="학번을 입력해주세요" value={this.state.CategoryName} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>전화번호</label><br/>
                        <input className={styles.input_box} type="tel" name="categoryName" placeholder="전화번호를 입력해주세요" value={this.state.CategoryName} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>비밀번호</label><br/>
                        <input className={styles.input_box} type="password" name="updateDate" value={this.state.updateDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className={styles.input_label}>비밀번호 확인</label><br/>
                        <input className={styles.input_box}type="password"  name="projectStratDate" value={this.state.projectStratDate} onChange={this.handleDatetimeChange}/>
                    </div>
                    <br></br>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>가입하기</button> 
                        <button onClick={this.cancel.bind(this)}>뒤로가기</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
