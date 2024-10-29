import AuthInfoSideBar from "@/components/pages/auth/AuthInfoSideBar";
import React from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <AuthInfoSideBar />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default AuthWrapper;
