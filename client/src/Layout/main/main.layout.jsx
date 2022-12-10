import React from "react";

import { NavBar } from "../../components/NavBar/nav.bar.component";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};
