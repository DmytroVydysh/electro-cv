import React from "react";
interface PublicLayoutProps {
  children: Array<React.ReactNode>;
}
export const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>);
}