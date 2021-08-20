import React from "react";
import Table from "./table";
import UpdateProject2 from "./UpdateProject2";
import Contactpersonbar from './Contactpersonbar';
import Contactpersonintroduce from './Contactpersonintroduce';
import Barcontact from './Barcontact';

const ProjectsTable = (props) => {
  const columns = [
    { path: "projectname", label: "프로젝트" },   
    { path: "review", label: "마감날짜"},
    {
      key: "profile", label: "컨택자 프로필",
      content: (project) => (
        <div className = "bar">
          <Barcontact />
        </div>
      ),
    },
    {
      key: "delete", label: "수정",
      content: (project) => (
        <UpdateProject2 />
      ),
    },
  ];

  const { projects, onSort, sortColumn } = props;

  return (
    <Table
      columns={columns}
      data={projects}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default ProjectsTable;