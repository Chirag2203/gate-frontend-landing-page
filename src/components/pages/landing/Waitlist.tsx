import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

import { cn } from "@/lib/utils";

import { Input2 } from "@/components/ui/input2";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NotebookIcon, RocketIcon, Sparkles } from "lucide-react";
const Waitlist = () => {
  const [userData, setUserData] = React.useState({
    name: "",
    phoneNumber: "",
    branch: "",
    preparationStatus: "",
    mostHelpNeededWith: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
    console.log("Form submitted");
  };

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
      <div className="px-4 sm:px-16 mt-8 sm:mt-12 2xl:px-32 flex flex-col sm:gap-0  items-center w-full ">
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
            <div className="border px-4 py-4 flex gap-2 rounded-md border-gray-100 hover:border-blue-100 bg-primary text-white font-medium text-center">
              <Sparkles /> FREE Pro Access Worth ₹3000
            </div>
            <div className="border px-4 py-4 flex gap-2 rounded-md border-gray-100 hover:border-blue-100 bg-primary text-white font-medium text-center">
              <NotebookIcon /> Exclusive Topper Methods
            </div>
            <div className="border px-4 py-4 flex gap-2 rounded-md border-gray-100 hover:border-blue-100 bg-primary text-white font-medium text-center">
              <RocketIcon /> Head Start Advantage
            </div>
          </div>
        </div>
        <div className="max-w-xl w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-gray-100 shadow-sm mt-4">
          <form className="sm:my-4 my-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-6 ">
              <LabelInputContainer>
                <Label htmlFor="name"> Name</Label>
                <Input2
                  id="firstname"
                  placeholder="Avianash Kumar"
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="phoneNumber">Mobile number</Label>
              <Input2
                id="phoneNumber"
                placeholder="9312121232141"
                type="mobile"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="branch">Branch</Label>
              <Select
                value={userData.branch}
                onValueChange={(value) =>
                  setUserData({ ...userData, branch: value })
                }
              >
                <SelectTrigger className="bg-gray-100 border-none placeholder:text-gray-100 ">
                  <SelectValue
                    placeholder="Select Branch"
                    className="text-xs text-gray-300"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-100 border-none">
                  <SelectItem value="branch1">Branch1</SelectItem>
                  <SelectItem value="branch2">Branch2</SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="preparationStatus">
                Current preparation status
              </Label>
              <Select
                value={userData.preparationStatus}
                onValueChange={(value) =>
                  setUserData({ ...userData, preparationStatus: value })
                }
              >
                <SelectTrigger className="bg-gray-100 border-none">
                  <SelectValue
                    placeholder="Select preperation status"
                    className="text-xs text-gray-300"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-100 border-none">
                  <SelectItem value="beginner">
                    Completed Syllabus, taking mocks
                  </SelectItem>
                  <SelectItem value="intermediate">
                    Finished Syllabus, started subject tests
                  </SelectItem>
                  <SelectItem value="advanced">
                    Still covering syllabus
                  </SelectItem>
                  <SelectItem value="advanced">
                    Just starting preperation
                  </SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-6">
              <Label htmlFor="mostHelpNeededWith">
                What do you need most help with
              </Label>
              <Select
                value={userData.mostHelpNeededWith}
                onValueChange={(value) =>
                  setUserData({ ...userData, mostHelpNeededWith: value })
                }
              >
                <SelectTrigger className="bg-gray-100 border-none">
                  <SelectValue
                    placeholder="Select type of help you are looking for"
                    className="text-xs text-gray-300"
                  />
                </SelectTrigger>
                <SelectContent className="bg-gray-100 border-none">
                  <SelectItem value="Running out of time during tests despite knowing concepts">
                    Running out of time during tests despite knowing concepts
                  </SelectItem>
                  <SelectItem value="Struggle to retain concepts during revision">
                    Struggle to retain concepts during revision
                  </SelectItem>
                  <SelectItem value="Keep losing marks in topics I thought I mastered">
                    Keep losing marks in topics I thought I mastered
                  </SelectItem>
                  <SelectItem value="Mock test scores aren't reflecting my preparation">
                    Mock test scores aren't reflecting my preparation
                  </SelectItem>
                  <SelectItem value="Need structure in these crucial final months">
                    Need structure in these crucial final months
                  </SelectItem>
                  <SelectItem value="Want more quality practice, beyond basic questions">
                    Want more quality practice, beyond basic questions
                  </SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>

            <Button className="w-full mt-4" variant="blueGradient">
              {loading ? "Loading..." : "Join Waitlist"}
            </Button>
            <p className="text-primary font-medium text-center text-sm mt-4">
              Only 100 spots available! Don't miss out
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;
