import React, { useEffect, useState } from 'react';
import './ProjectList.css';
import axios from 'axios';

function App() {
    let [글제목1, 글제목변경1] = useState(['연락주세요']);
    let [하트1, 하트변경1] = useState(0);
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchProjects = async () => {
        try {
          setError(null);
          setProjects(null);
          setLoading(true);
          const response = await axios.get('/article');
          setProjects(response.data); 
          console.log(response.data);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
      fetchProjects();
    }, []);
  
    function Modal(){
      return (
        <div className="modal">
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
      )
    }

    function readArticle(no) {
      this.props.history.push('/article/${no}');
    };

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!projects) return null;  
  
    return (
      <div className="App">
      <div className="index">
        <p>교과목 | 대외활동 | 취미</p>
      </div>

      <div className="checklist">
        <div className="checksearch"> 
          <label class="form-check-label form-check-inline"><input type="checkbox" /> 구인</label>
          <label class="form-check-label form-check-inline"><input type="checkbox" /> 정보</label>
          <label class="form-check-label form-check-inline"><input type="checkbox" /> 구인완료 제외</label>

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
        <h4>최근 게시물</h4>
        <hr/>
        </div>
      <div>
      {projects.map(project => 
        <div>
        <div className="list" key = {project.id}>
        <h5> {project.title} </h5>
        <h6> {project.categoryName } <span onClick={ ()=> { 하트변경1(하트1+1) } }>🤍</span> {하트1} 💬 📄 </h6>
        <p> {project.body}</p>
        <p className="date">{project.updateDate}</p>
        <hr/>
        </div>
        <button>자세히 보기</button>
        </div>
      )}
      <Modal />
      </div>
      </div>
      </div>
    );
}

export default App;
