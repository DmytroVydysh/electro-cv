import React, { useEffect } from "react";
interface ErrorLayoutProps {
  children: React.ReactNode;
}
export const ErrorLayout: React.FC<ErrorLayoutProps> = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("h-full");
    document.body.classList.add("h-full");
    return () => {
      document.documentElement.classList.remove('h-full');
      document.body.classList.remove('h-full');
    }
  }, []);
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {children}
      </div>
    </main>
  );
}