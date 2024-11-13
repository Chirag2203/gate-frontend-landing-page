import AuthInfoSideBar from "@/components/pages/auth/AuthInfoSideBar";
import React from "react";

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-screen">
      <div className="sm:flex hidden ">
        <div className="w-1/2">
          <AuthInfoSideBar />
        </div>
        <div className="w-1/2">{children}</div>
      </div>
      <div className="sm:hidden block">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
