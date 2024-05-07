import React from "react";
import TaskKanban from "@/components/Tasks/KanbanTasks";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Kanban | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Kanban page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const TaskKanbanPage = () => {
  return (
    <DefaultLayout>
      <TaskKanban />
    </DefaultLayout>
  );
};

export default TaskKanbanPage;
