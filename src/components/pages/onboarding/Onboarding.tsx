import squares from "@/assets/squares.png";
import OnboardingForm from "./OnboardingForm";
const Onboarding = () => {
  return (
    <div className="bg-primary min-h-screen bg-center justify-center flex py-12"  style={{
        backgroundImage: `url(${squares}) `, // Set the image as background
      }}>
        <p className="md:left-12 left-50% top-4 text-white font-semibold text-lg md:top-12 fixed">Kalppo</p>
      <OnboardingForm/>
    </div>
  )
}

export default Onboarding
