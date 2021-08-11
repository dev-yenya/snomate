import React, { useState } from 'react';
import './ProjectList.css';

function App() {
  let [글제목1, 글제목변경1] = useState(['연락주세요']);
  let [하트1, 하트변경1] = useState(0);
  let [글제목2, 글제목변경2] = useState(['연락주세요']);
  let [하트2, 하트변경2] = useState(0);
  let [글제목3, 글제목변경3] = useState(['연락주세요']);
  let [하트3, 하트변경3] = useState(0);
  
  function  제목바꾸기1() {
    var newArray = [...글제목1];
    newArray[0] = '구인완료';
    글제목변경1( newArray );
  }
  function  제목바꾸기2() {
    var newArray = [...글제목2];
    newArray[0] = '구인완료';
    글제목변경2( newArray );
  }
  function  제목바꾸기3() {
    var newArray = [...글제목3];
    newArray[0] = '구인완료';
    글제목변경3( newArray );
  }

  return (
    <div className="App">
      <div className="index">
        <p>교과목 | 대외활동 | 취미</p>
      </div>

      <div className="checklist">
        <div>
          <label class="form-check-label form-check-inline"><input type="checkbox" class="form-control" /> 구인</label>
          <label class="form-check-label form-check-inline"><input type="checkbox" class="form-control" /> 정보</label>
          <label class="form-check-label form-check-inline"><input type="checkbox" class="form-control" /> 구인완료 제외</label>

          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </nav>         
        </div>
      </div>

      <div className="list_align">
      <div className = "list">
        <h2>최근 게시물</h2>
        <hr/>
        </div>
      <div className="list">
        <h3> 구합니다 </h3>
        <h4> { 글제목1[0] } <span onClick={ ()=> { 하트변경1(하트1+1) } }>🤍</span> {하트1} 💬 📄 </h4>
        <p>안녕하세요. 스터디 구하려고 글을 올립니다.</p>
        <hr/>
      </div>
      <button onClick={ 제목바꾸기1 }>버튼</button>

      <div className="list">
        <h3> 구합니다 </h3>
        <h4> { 글제목2[0] } <span onClick={ ()=> { 하트변경2(하트2+1) } }>🤍</span> {하트2} 💬 📄 </h4>
        <p>안녕하세요. 스터디 구하려고 글을 올립니다.</p>
        <hr/>
      </div>
      <button onClick={ 제목바꾸기2 }>버튼</button>

      <div className="list">
        <h3> 구합니다 </h3>
        <h4> { 글제목3[0] } <span onClick={ ()=> { 하트변경3(하트3+1) } }>🤍</span> {하트3} 💬 📄 </h4>
        <p>안녕하세요. 스터디 구하려고 글을 올립니다.</p>
        <hr/>
      </div>
      <button onClick={ 제목바꾸기3 }>버튼</button>
      <Modal />
      </div>
    </div>
  );

}

function Modal(){
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;