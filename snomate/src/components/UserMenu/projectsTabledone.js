import React from "react";
import Table from "./table";
import MemberEvaluation from "./MemberEvaluation";

const ProjectsTable = (props) => {
  const columns = [
    { path: "projectname", label: "프로젝트" },   
    { path: "review", label: "프로젝트 후기"},
    {
      key: "delete", label: "조원평가",
      content: (project) => (
        <MemberEvaluation />
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