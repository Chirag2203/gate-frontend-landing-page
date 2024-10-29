import AuthWrapper from "@/components/shared/wrappers/AuthWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";
import OTPcomponent from "./OTPcomponent";

const Signup = () => {
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
            Already have an account?{" "}
            <Link
              to={"/signin"}
              className="font-semibold hover:underline text-primary"
            >
              Log in
            </Link>
          </p>
        </div>
        <div className="w-1/2">
          <Label className="mt-4">Name</Label>
          <Input
            // placeholder="Enter your name"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({ ...signupData, name: e.target.value })
            }
          />
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
        <div className="w-1/2">
          <Label className="mt-4">Password</Label>
          <Input
            // placeholder="Enter your password"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />
        </div>
        <div className="w-1/2">
          <OTPcomponent handleVerify={handleVerifyMobile} title="Send OTP" />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Signup;
