import React from "react";
import Table from "./table";

const ProjectsTable = (props) => {
  const columns = [
    { path: "projectname", label: "프로젝트" },   
    { path: "deadline", label: "마감기한"},
    {
      key: "delete",
      content: (project) => (
        <button
          onClick={() => props.onDelete(project)}
          className="btn btn-outline-info btn-sm"
        >
          Delete
        </button>
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