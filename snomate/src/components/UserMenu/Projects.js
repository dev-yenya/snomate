import React, { Component } from "react";
import { getProjects } from "./listprojects";
import { paginate } from "./paginate";
import ProjectsTable from "./projectsTable";
import Pagination from "./pagination";
import _ from "lodash";
import './projects1.css';

export default class Projectlook extends Component {
  state = {
    projects: [], 
    currentPage: 1, 
    pageSize: 9, 
    sortColumn: { path: "deadline", order: "asc" }, 
  };

  componentDidMount() {
    this.setState({ projects: getProjects()});
  }

  handleDelete = (project) => {
    const projects = this.state.projects.filter((m) => m.id !== project.id);
    this.setState({ projects }); 
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      projects: allProjects,
    } = this.state;

    const filtered =  
      allProjects;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const projects = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row-1">
        <div className="col">  
        </div>
        <div className="col3">  
          <h1></h1>>
          <h5>📑 마음에 든 프로젝트 내역</h5>  
          <h1></h1>>
          <ProjectsTable
            projects={data}
            sortColumn={this.state.sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage} 
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}