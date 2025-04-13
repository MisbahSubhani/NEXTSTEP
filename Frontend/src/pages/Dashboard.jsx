import React from "react";
import { DashboardNav } from "../Components/DashboardNav";
import { StudentDashboard } from "../Components/StudentDashboard";
export function Dashboard() {
    return (
        <>
  <DashboardNav />
  <div className="border-t-2 min-h-screen bg-gradient-to-r from-[#3A4B48] to-[#163342]">
    <StudentDashboard/>
  </div>
</>
    )
}