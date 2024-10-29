import AuthWrapper from "@/components/shared/wrappers/AuthWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import OTPcomponent from "./OTPcomponent";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
const Signin = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    mobileNumber: "",
    password: "",
  });
  const [signupVerify, setSignupVerify] = useState({
    error: false,
    message: "",
    otp: "",
    confirmedPassword: "",
  });
  const [loginWithPassword, setLoginWithPassword] = useState(false);

  const handleErrors = () => {
    if (signupData.name === "") {
      setSignupVerify({
        ...signupVerify,
        error: true,
        message: "Name is required",
      });
      return false;
    } else if (signupData.mobileNumber === "") {
      setSignupVerify({
        ...signupVerify,
        error: true,
        message: "Mobile number is required",
      });
      return false;
    } else if (signupData.password === "") {
      setSignupVerify({
        ...signupVerify,
        error: true,
        message: "Password is required",
      });
      return false;
    }
  };

  const handleLoginWithPassword = () => {
    if (loginWithPassword) {
      // login with password
    } else {
      setLoginWithPassword(true);
    }
  };

  const handleVerifyMobile = () => {
    handleErrors();
    // verify mobile number
  };

  return (
    <AuthWrapper>
      <div className="w-full flex items-center justify-center flex-col min-h-screen pb-8">
        <div className="mr-10 flex-col flex items-start mb-4">
          <p className="font-bold text-3xl">Ace your GATE exam!</p>
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="font-semibold hover:underline text-primary"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div className="w-1/2">
          <Label className="mt-4">Mobile Number</Label>
          <Input
            // placeholder="Enter your mobile number"
            value={signupData.mobileNumber}
            onChange={(e) =>
              setSignupData({ ...signupData, mobileNumber: e.target.value })
            }
          />
        </div>

        <div className="w-1/2 flex flex-col items-center">
          {!loginWithPassword && (
            <>
              <OTPcomponent
                handleVerify={handleVerifyMobile}
                title="Send OTP"
              />
              <div className="flex items-center w-full justify-center gap-2 mt-2">
                <Separator className="w-1/3" />
                <p className="text-center">or</p>
                <Separator className="w-1/3" />
              </div>
              <Button
                className="w-full mt-4"
                variant={"outline"}
                onClick={handleLoginWithPassword}
              >
                {loginWithPassword ? "Login" : "Login with Password"}
              </Button>
            </>
          )}
          {loginWithPassword && (
            <>
              <div className="w-full">
                <Label className="mt-4">Password</Label>
                <Input
                  // placeholder="Enter your password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
              <Button className="w-full mt-4" onClick={handleLoginWithPassword}>
                {loginWithPassword ? "Login" : "Login with Password"}
              </Button>
              <div className="flex items-center w-full justify-center gap-2 mt-2">
                <Separator className="w-1/3" />
                <p className="text-center">or</p>
                <Separator className="w-1/3" />
              </div>
              <Button
                className="w-full mt-4"
                variant={"outline"}
                onClick={() => {
                  setLoginWithPassword(false);
                }}
              >
                {!loginWithPassword ? "Login" : "Login with OTP"}
              </Button>
            </>
          )}
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signin;
