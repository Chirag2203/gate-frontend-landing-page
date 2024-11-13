import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "@/components/ui/button";
import {
  MdKeyboardArrowRight,
  MdOutlineAccessTime,
  MdOutlineLockPerson,
  MdOutlineLockReset,
} from "react-icons/md";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { VscOpenPreview } from "react-icons/vsc";
import { FiUser, FiUsers } from "react-icons/fi";
import { avatarData, subjects } from "@/constants/data";

const OnboardingForm = () => {
  const [userData, setUserData] = useState({
    avatarId: 0,
    name: "",
    password: "",
    branch: "",
    challengingSubjects: [""],
    aspirantType: "",
    studyHours: "",
    email: "",
  });
  let confirmedPasswrord = "";

  const handleSubmit = async () => {
    if (userData.password !== confirmedPasswrord) {
      alert("Passwords do not match");
    } else {
      const response = await axios.post("url", userData);
      console.log(response);
    }
  };

  return (
    <div className="bg-white max-h-3xl  rounded-xl justify-between flex flex-col sm:px-8 gap-4 md:w-3/5  sm:w-4/5 w-5/6 px-4  mx-auto py-4 ">
      <div className="flex flex-col gap-4">
      <p className="text-primary font-semibold text-center">
        Complete your Profile!
      </p>
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 mt-4">
          <Label>Select your Avatar</Label>
          <div className="flex items-center gap-2">
            <FaChevronLeft className="text-gray-500 mb-4" />
            <ScrollArea className="w-fit whitespace-nowrap rounded-md ">
              <div className="flex gap-2  items-center pb-4">
                {avatarData.map((avatar) => (
                  <img
                    key={avatar.id}
                    src={avatar.link}
                    alt="avatar"
                    className={`md:w-16 md:h-16 w-12 h-12 rounded-full cursor-pointer
                ${
                  userData.avatarId !== 0 && userData.avatarId != avatar.id
                    ? "opacity-50 hover:opacity-100"
                    : ""
                }
                 ${
                   userData.avatarId === avatar.id
                     ? "border-2 border-primary"
                     : ""
                 }`}
                    onClick={() =>
                      setUserData({ ...userData, avatarId: avatar.id })
                    }
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
            <FaChevronRight className="text-gray-500 mb-4" />
          </div>
        </div>
        <div className="flex gap-4  items-center w-full flex-wrap">
          <div className="md:w-2/5 w-full">
            <Label>
              <FiUser className="text-sm" />
              Name
            </Label>
            <Input
              type="text"
              // placeholder="Enter your name"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div className="md:w-2/5 w-full">
            <Label>
              <HiOutlineMail className="text-sm" />
              Email
            </Label>
            <Input
              type="email"
              // placeholder="Enter your email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex gap-4 items-center w-full flex-wrap">
          <div className="md:w-2/5 w-full">
            <Label>
              <MdOutlineLockPerson className="text-sm" />
              Password
            </Label>
            <Input
              type="password"
              // placeholder="Enter your password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div className="md:w-2/5 w-full">
            <Label>
              {" "}
              <MdOutlineLockReset className="text-sm" />
              Confirm Password
            </Label>
            <Input
              type="password"
              // placeholder="Confirm your password"
              value={confirmedPasswrord}
              onChange={(e) => (confirmedPasswrord = e.target.value)}
            />
          </div>
        </div>
        <div className="lg:w-2/5 w-full ">
          <Label>
            <HiOutlineBookOpen />
            Branch
          </Label>
          <Select
            value={userData.branch}
            onValueChange={(value) =>
              setUserData({ ...userData, branch: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="branch1">Branch1</SelectItem>
              <SelectItem value="branch2">Branch2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>
            <VscOpenPreview />
            Challenging Subjects
          </Label>
          {/* add a toggle group */}
          <ToggleGroup variant="outline" type="multiple">
            {subjects.map((subject) => (
              <ToggleGroupItem
                key={subject.id}
                value={subject.name}
                size={"sm"}
                className="text-xs"
                onClick={() => {
                  if (userData.challengingSubjects.includes(subject.name)) {
                    setUserData({
                      ...userData,
                      challengingSubjects: userData.challengingSubjects.filter(
                        (sub) => sub !== subject.name
                      ),
                    });
                  } else {
                    setUserData({
                      ...userData,
                      challengingSubjects: [
                        ...userData.challengingSubjects,
                        subject.name,
                      ],
                    });
                  }
                }}
              >
                {subject.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div className="flex flex-wrap items-start gap-4 w-full">
          <div className=" lg:w-2/5 w-full">
            <Label>
              <FiUsers />
              Aspirant Type
            </Label>
            <Select
              value={userData.aspirantType}
              onValueChange={(value) =>
                setUserData({ ...userData, aspirantType: value })
              }
            >
              <SelectTrigger className="placeholder:text-xs">
                <SelectValue defaultValue={"aspirant1"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aspirant1">Aspirant1</SelectItem>
                <SelectItem value="aspirant2">Aspirant2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="lg:w-2/5 w-full">
            <Label>
              <MdOutlineAccessTime className="text-sm" /> How many hours can you
              study per week?
            </Label>
            <Select
              value={userData.studyHours}
              onValueChange={(value) =>
                setUserData({ ...userData, studyHours: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"Less than 10"}>Less than 10hrs</SelectItem>
                <SelectItem value={"10-20hrs"}>10-20hrs</SelectItem>
                <SelectItem value={"More than 20hrs"}>
                  More than 20hrs
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      </div>
      <Button className="mt-12" onClick={handleSubmit}>
        Save and Continue <MdKeyboardArrowRight />
      </Button>
    </div>
  );
};

export default OnboardingForm;
