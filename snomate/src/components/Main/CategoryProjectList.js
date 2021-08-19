import React, { Component } from 'react';
import ProjectListService from '../Projects/ProjectListService';
import './ProjectList.css';

class CategoryProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: this.props.match.params.no,
            categoryProjects: [],
            projects:[]
        }
      this.createProject = this.createProject.bind(this);
      console.log(this.no);
    }

    componentDidMount() {
        ProjectListService.getCategoryList(this.state.no).then((res) => {
            this.setState({ categoryProjects: res.data});
            console.log(res.data);
        });
        ProjectListService.getProjectList().then((res) => {
          this.setState({ projects: res.data});
          console.log(res.data);
      });
    }

    createProject(){
        this.props.history.push('/create')
      }
      

    categoryFindProject(category_id){
        this.props.history.push('/category/'+category_id)
      }

    하트변경1(하트) {
        하트 = 하트+1;
    }
      

    render() {
      let 하트1= 0;
        return (
          <div className="App">
          <div className="index">
              <div onClick = {()=>{this.categoryFindProject("1")}}>교과목</div><div onClick = {()=>{this.categoryFindProject("2")}}>대외활동</div><div onClick = {()=>{this.categoryFindProject("3")}}>취미</div>
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
              <button onClick = {this.createProject}>글쓰기</button>        
            </div>
          </div>
          <div className="list_align">
          <div className = "list">
            <h4>최근 게시물</h4>
            <hr/>
            </div>
          <div>
          {this.state.categoryProjects.map(categoryProject => 
            <div>
            <div className="list" key = {categoryProject.categorySecond}>
            <h5> {categoryProject.title} </h5>
            <h6> {categoryProject.title } <span onClick={ ()=> { this.하트변경1(하트1) } }>🤍</span> {하트1} 💬 📄 </h6>
            {/*<p> {project.body}</p>
            <p className="nickname"> {project.userName}</p>
            <p className="date">{project.updateDate}</p>
          <hr/>*/}
            </div>
            <button>자세히 보기</button>
            </div>
          )}
          </div>
          </div>
          </div>
        );
    }
}

export default CategoryProjectList;