import DashboardWrapper from "@/components/shared/wrappers/DashboardWrapper";

const UserProfile = () => {
  return (
    <DashboardWrapper>
      <div>
        <div>
          <div className="flex gap-4 items-center">
            <img
              src="https://avatar.iran.liara.run/public/22"
              className="md:w-16 md:h-16 w-12 h-12 rounded-full"
              alt="profile"
            />
            <div>
              <p className="font-medium">Chirag Rajput</p>
              <p className="text-xs ">c@gmailc.com</p>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div></div>
      </div>
    </DashboardWrapper>
  );
};

export default UserProfile;
