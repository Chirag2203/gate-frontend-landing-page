import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

import { cn } from "@/lib/utils";

import { Input2 } from "@/components/ui/input2";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { NotebookIcon, RocketIcon, Sparkles } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
import makeAnimated from "react-select/animated";
const Waitlist = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [userData, setUserData] = React.useState({
    name: "",
    phoneNumber: "",
    branch: "",
    preparationStatus: "",
    mostHelpNeededWith: [] as string[],
  });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://kalppo-backend.vercel.app/auth/register",
        {
          user: {
            name: userData.name,
            phoneNumber: userData.phoneNumber,
            branch: userData.branch,
            preparationStatus: userData.preparationStatus,
            needHelpWith: userData.mostHelpNeededWith,
          },
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Success:", response);
      toast.success("Form submitted successfully");
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form, please try again later");
    } finally {
      setLoading(false);
    }
  };

  const preperationStatusOptions = [
    {
      value: "Completed Syllabus, taking mocks",
      label: "Completed Syllabus, taking mocks",
    },
    {
      value: "Finished Syllabus, started subject tests",
      label: "Finished Syllabus, started subject tests",
    },
    { value: "Still covering syllabus", label: "Still covering syllabus" },
    { value: "Just starting preparation", label: "Just starting preparation" },
  ];

  const branchOptions = [
    { value: "Mechanical", label: "Mechanical" },
    { value: "Civil", label: "Civil" },
    { value: "CSE", label: "CSE" },
    { value: "DA", label: "DA" },
    { value: "Electrical", label: "Electrical" },
    { value: "Electronics", label: "Electronics" },
    { value: "Others", label: "Others" },
  ];
  const helpOptions = [
    {
      value: "Running out of time during tests despite knowing concepts",
      label: "Running out of time during tests despite knowing concepts",
    },
    {
      value: "Struggle to retain concepts during revision",
      label: "Struggle to retain concepts during revision",
    },
    {
      value: "Keep losing marks in topics I thought I mastered",
      label: "Keep losing marks in topics I thought I mastered",
    },
    {
      value: "Mock test scores aren't reflecting my preparation",
      label: "Mock test scores aren't reflecting my preparation",
    },
    {
      value: "Need structure in these crucial final months",
      label: "Need structure in these crucial final months",
    },
    {
      value: "Want more quality practice, beyond basic questions",
      label: "Want more quality practice, beyond basic questions",
    },
  ];
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
    <div className="">
      <Navbar />
      <div className="px-4 sm:px-16 mt-8 sm:mt-12 2xl:px-32 flex flex-col sm:gap-0 min-h-screen items-center w-full">
        <div>
          <p className="text-center sm:text-3xl text-2xl font-semibold text-primary sm:mb-0 mb-2">
            Be Among the First to Transform Your GATE Journey
          </p>
          <p className="text-gray-700 max-w-xl sm:text-md text-sm mx-auto text-center">
            Join the waitlist for the December launch. Selected 100 users get
            FREE access until GATE 2025!
          </p>
        </div>
        <div className="mt-12 mb-8 gap-4 w-full flex flex-col items-center justify-center">
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
        </div>
        {!formSubmitted ? (
          <div className="max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-gray-100 shadow-sm mt-4">
            <form className="sm:my-4 my-2" onSubmit={handleSubmit}>
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
                <Label htmlFor="branch">Branch</Label>
                <Select
                  closeMenuOnSelect={true}
                  placeholder="Select branch"
                  className="text-sm"
                  components={animatedComponents}
                  options={branchOptions}
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
              <LabelInputContainer className="mb-6">
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
              </LabelInputContainer>
              <LabelInputContainer className="mb-6">
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
              </LabelInputContainer>

              <Button
                className="w-full mt-4"
                variant="blueGradient"
                disabled={loading}
              >
                {loading ? "Joining Waitlist..." : "Join Waitlist"}
              </Button>
              <p className="text-primary font-medium text-center text-sm mt-4">
                Only 100 spots available! Don't miss out
              </p>
            </form>
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
