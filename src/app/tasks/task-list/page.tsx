import React from "react";
import { Metadata } from "next";
import TaskList from "@/components/Tasks/ListTasks";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js List | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js List page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};
const TaskListPage = () => {
  return (
    <DefaultLayout>
      <TaskList />
    </DefaultLayout>
  );
};

export default TaskListPage;
