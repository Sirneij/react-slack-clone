import React from "react";

import {
  Sidebar,
  MainContainer,
  Header,
  RightSidebarDrawer,
  SidebarDrawer,
} from "./";

export default function Slack() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Sidebar />
        <MainContainer />
        <SidebarDrawer />
        <RightSidebarDrawer />
      </main>
    </div>
  );
}
