import React from "react";
interface AppLayoutProps {
  children: Array<React.ReactNode>;
}
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>);
}