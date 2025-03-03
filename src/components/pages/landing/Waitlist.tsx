import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

import { cn } from "@/lib/utils";

import { Input2 } from "@/components/ui/input2";
import { Label } from "@/components/ui/label";
// import { NotebookIcon, RocketIcon, Sparkles } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import OTPcomponent from "@/components/shared/OTPcomponent";
import { branchOptions, coachingsOptions } from "@/constants/data";

const BASE_URL = "https://kalppo-backend.vercel.app/auth/otp";

export const sendOtp = async (phoneNumber: string): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_URL}/send`, { phoneNumber });
    console.log("OTP sent successfully:", response.data);
  } catch (error: any) {
    console.error("Error sending OTP:", error.response?.data || error.message);
    throw error;
  }
};

export const verifyOtp = async (
  otp: string,
  phoneNumber: string
): Promise<void> => {
  try {
    const response = await axios.post(`${BASE_URL}/verify`, {
      otp: otp,
      phoneNumber: phoneNumber,
    });
    console.log("OTP verified successfully:", response.data);
    localStorage.setItem("token", response.data.jwtToken);
  } catch (error: any) {
    console.error(
      "Error verifying OTP:",
      error.response?.data || error.message
    );
    throw error;
  }
};


/*
steps for waitlist form submission
1. User enters name, phone number, branch, preparation status, most help needed with
2. User clicks on "Join Waitlist"
3. User receives OTP on phone number
4. User enters OTP
5. User clicks on "Verify OTP"
6. User data is submitted to backend
*/

const Waitlist = () => {
  const [loadingVerify, setLoadingVerify] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    phoneNumber: "",
    branch: "",
    preparationStatus: "",
    mostHelpNeededWith: [] as string[],
  });
  const [loading, setLoading] = React.useState(false);

  const handleSendOtp = async () => {
    if (userData.phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10 digit mobile number");
      return;
    };
    try {
      setLoading(true);
      await sendOtp(userData.phoneNumber);
      toast.success("OTP sent successfully!");
    } catch {
      console.error("Failed to send");
      toast.error("Failed to send OTP");
    } finally{
      setLoading(false);
    }
  };

  const handleVerifyMobile = async (otp: string) => {

    try {
      setLoadingVerify(true);
      await verifyOtp(otp, userData.phoneNumber); 
      toast.success("OTP verified successfully!");
      handleSubmit(      );
    } catch {
      console.error("Failed to verify");
      toast.error("Failed to verify OTP");
    } finally{
      setLoadingVerify(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const profileData = {
        user: {
          name: userData.name,
          phoneNumber: userData.phoneNumber,
          branch: userData.branch,
          preparationStatus: userData.preparationStatus,
          needHelpWith: userData.mostHelpNeededWith,
          initialSource: "waitlist_form",
        },
        fieldMask: {
          paths: [
            "name",
            "phoneNumber",
            "branch",
            "aspirantType",
            "preparationStatus",
            "needHelpWith",
            "initialSource",
          ],
        },
      };
  
      const registerResponse = await axios.patch(
        "https://kalppo-backend.vercel.app/users/updateProfile",
        profileData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
  
      console.log("User Registered Successfully:", registerResponse.data);
      toast.success("Form submitted successfully");
      setFormSubmitted(true);
  
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form, please try again later");
    } finally {
      setLoading(false);
      localStorage.removeItem("token");
    }
  };


  const animatedComponents = makeAnimated();

  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-1 w-full", className)}>
        {children}
      </div>
    );
  };

  return (
    <div className="font-jakarta">
      <Navbar />
      <div className="px-4 sm:px-16 mt-8 sm:mt-12 2xl:px-32 flex flex-col sm:gap-12 min-h-screen items-center w-full ">
        <div>
          <p className="text-center sm:text-3xl text-2xl font-semibold text-primary sm:mb-0 mb-2">
          Fuel Your Teaching
          </p>
          <p className="text-gray-700 max-w-xl mt-2 mx-auto text-center">
          Personalize teaching strategies to master complex concepts, overcome learning barriers, and achieve your educational goals
          </p>
        </div>
        {/* <div className="mt-12 mb-8 gap-4 w-full flex flex-col items-center justify-center">
          <p className="font-semibold sm:text-xl text-lg">Why Join Waitlist?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-center w-full sm:px-24">
            <div className="border px-4 py-4 flex gap-2 rounded-md border-blue-100 text-primary bg-white font-medium text-center">
              <Sparkles /> FREE Pro Access Worth ₹3000
            </div>
            <div className="border px-4 py-4 flex gap-2 rounded-md border-blue-100 text-primary bg-white font-medium text-center">
              <NotebookIcon /> Exclusive Topper Methods
            </div>
            <div className="border px-4 py-4 flex gap-2 rounded-md border-blue-100 text-primary bg-white font-medium text-center">
              <RocketIcon /> Head Start Advantage
            </div>
          </div>
        </div> */}
        {!formSubmitted ? (
          <div className="max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-gray-100 shadow-sm mt-4">
            <div className="sm:my-4 my-2" >
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-6 ">
                <div className="w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input2
                    id="name"
                    placeholder="Name"
                    type="text"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mb-6 w-full">
                <Label htmlFor="phoneNumber">Mobile number</Label>
                <Input2
                  id="phoneNumber"
                  placeholder="90XXXXX128"
                  type="mobile"
                  value={userData.phoneNumber}
                  onChange={(e) =>
                    setUserData({ ...userData, phoneNumber: e.target.value })
                  }
                  maxLength={10}
                />
              </div>
              <LabelInputContainer className="mb-6">
                <Label htmlFor="branch">Coaching Type</Label>
                <Select
                  closeMenuOnSelect={true}
                  placeholder="Select branch"
                  className="text-sm"
                  components={animatedComponents}
                  options={coachingsOptions}
                  value={branchOptions.find(
                    (option) => option.value === userData.branch
                  )}
                  onChange={(value) =>
                    setUserData({
                      ...userData,
                      branch: (value as { value: string }).value,
                    })
                  }
                />
              </LabelInputContainer>
              {/* <LabelInputContainer className="mb-6">
                <Label htmlFor="preparationStatus">
                  Current preparation status
                </Label>
                <Select
                  closeMenuOnSelect={true}
                  placeholder="Select status"
                  className="text-sm"
                  components={animatedComponents}
                  options={preperationStatusOptions}
                  value={preperationStatusOptions.find(
                    (option) => option.value === userData.preparationStatus
                  )}
                  onChange={(value) =>
                    setUserData({
                      ...userData,
                      preparationStatus: (value as { value: string }).value,
                    })
                  }
                />
              </LabelInputContainer> */}
              {/* <LabelInputContainer className="mb-6">
                <Label htmlFor="mostHelpNeededWith">
                  What do you need most help with
                </Label>
                <Select
                  placeholder="Select all that apply"
                  className="text-sm"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={helpOptions}
                  value={helpOptions.filter((option) =>
                    userData.mostHelpNeededWith?.includes(option.value)
                  )}
                  onChange={(value) =>
                    setUserData({
                      ...userData,
                      mostHelpNeededWith: [
                        ...(value as unknown as { value: string }[]).map(
                          (v) => v.value
                        ),
                      ],
                    })
                  }
                />
              </LabelInputContainer> */}
                  <OTPcomponent
                    handleVerify={handleVerifyMobile}
                    handleClick={handleSendOtp}
                    title="Join Waitlist"
                    loading={loading}
                    loadingVerify={loadingVerify} 

                  />
              {/* <Button
                className="w-full mt-4"
                variant="blueGradient"
                disabled={loading}
              >
                {loading ? "Joining Waitlist..." : "Join Waitlist"}
              </Button> */}
              {/* <p className="text-primary font-medium text-center text-sm mt-4">
                Only 100 spots available! Don't miss out
              </p> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4 sm:mt-12 mt-4">
            <p className="text-center text-primary font-semibold sm:text-2xl text-lg">
              Thank you for joining the waitlist!
            </p>
            <p className="text-center text-gray-700">
              We will notify you when the app is ready for you to use.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;
