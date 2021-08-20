import React, { Component } from "react";
import { getProjects } from "./listcontactreceive";
import { paginate } from "./paginate";
import ProjectsTable from "./contactsTablereceive";
import Pagination from "./pagination";
import _ from "lodash";
import './projects1.css';

export default class Projectlook extends Component {
  state = {
    projects: [], 
    currentPage: 1, 
    pageSize: 2, 
    sortColumn: { path: "review", order: "asc" }, 
  };

  componentDidMount() {
    this.setState({ projects: getProjects()});
  }

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
          <br></br>
          <h5>📑 내가 쓴 글 목록 (받은 컨택)</h5>  
          <br></br><br></br>
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