import React from "react";
import Table from "./table";
import UpdateProject1 from "./UpdateProject1";

const ProjectsTable = (props) => {
  const columns = [
    { path: "projectname", label: "프로젝트" },   
    { path: "review", label: "마감날짜"},
    {
      key: "delete", label: "수정",
      content: (project) => (
        <UpdateProject1 />
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