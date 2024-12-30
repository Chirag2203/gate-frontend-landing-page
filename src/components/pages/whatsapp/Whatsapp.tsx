import Footer from "../landing/Footer"
import Navbar from "../landing/Navbar"
import whatsappBg from "/whatsappBg.png"
import whatsappQr from "/whatsappQr.png"
import whatsappDeco1 from "/whatsappDeco1.png"
import whatsappDaily from "/whatsappDaily.png"
import whatsappTrack from "/whatsappTrack.png"
import whatsappPractice from "/whatsappPractice.png"
import { Button } from "@/components/ui/button"
import practice from "/practice.png"
import track from "/track.png"
import daily from "/daily.png"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


const Whatsapp = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://wa.me/message/AZBPWRR2G4ZRO1").then(() => {
           toast.success("Link copied to clipboard");
        }).catch(err => {
            console.error("Failed to copy: ", err);
            toast.error("Failed to copy link to clipboard");
        });
    };
    return (
        <div>
            <Navbar />
            <img src={whatsappDeco1} alt="whatsappBg" className="w-full absolute" />
            <div className="pb-52 w-full flex flex-col items-center justify-start mt-16 relative
        bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${whatsappBg})`, // Set the image as background
                }}
            >
                <p className="max-w-7xl px-6 py-2 text-4xl sm:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-[#25d366] to-[#075e54] bg-clip-text text-transparent">SuperCharge your GATE preperation</p>
                <p className="text-2xl font-semibold mt-4">Learn on WhatsApp</p>
               
                <Link to={"https://wa.me/message/AZBPWRR2G4ZRO1"} className="w-full mx-auto flex items-center justify-center gap-12">
                <img src={whatsappQr} alt="whatsapp-qr-kalppo" className="sm:w-1/5 mt-12 w-1/2" />
                </Link>
            </div>
            <img src={whatsappDeco1} alt="whatsappBg" className="w-full absolute" />
            <div className="px-4 sm:px-16 mt-8 sm:mt-24 2xl:px-32 min-h-screen flex flex-col gap-24">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                    <img src={whatsappPractice} alt="" className="sm:w-1/3 " />
                    <div className="flex flex-col items-start sm:w-1/2">
                        <div className="sm:text-5xl text-4xl gap-8 font-semibold flex items-center flex-wrap sm:mb-0 mb-4"><p >Practice <br className="block " /> Questions</p> <img src={practice} className="sm:w-1/3 w-1/4" /></div>
                        <p className="text-lg">Get instant practice questions tailored to your level. Solve, submit, and receive detailed explanations—all through quick chats. No app downloads needed!</p>
                        <Link to={"https://wa.me/message/AZBPWRR2G4ZRO1"}>
                            <Button className="mt-4" variant={"whatsapp"} size={"lg"}>Ask on WhatsApp</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                <img src={whatsappDaily} alt="" className="sm:w-1/3 sm:hidden block" />

                    <div className="flex flex-col items-start sm:w-1/2">
                        <div className="sm:text-5xl text-4xl gap-8 font-semibold flex items-center flex-wrap sm:mb-0 mb-4"><p >Daily <br className="" /> Challenge</p> <img src={daily} className="sm:w-1/3 w-1/4" /></div>
                        <p className="text-lg">Build momentum with topic-focused daily practice. Each challenge adapts to your progress, ensuring steady improvement in your GATE preparation.</p>
                        <Link to={"https://wa.me/message/AZBPWRR2G4ZRO1"}>
                            <Button className="mt-4" variant={"whatsapp"} size={"lg"}>Ask on WhatsApp</Button>
                        </Link>
                    </div>
                    <img src={whatsappDaily} alt="" className="sm:w-1/3 sm:block hidden" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                    <img src={whatsappTrack} alt="" className="sm:w-1/3" />
                    <div className="flex flex-col items-start sm:w-1/2">
                        <div className="sm:text-5xl text-4xl gap-8 font-semibold flex items-center flex-wrap sm:mb-0 mb-4"><p >Stay on <br className="" /> Track</p> <img src={track} className="sm:w-1/3 w-1/4" /></div>
                        <p className="text-lg">Track your learning journey with smart insights. Get reminders, performance stats, and improvement suggestions right in your WhatsApp chats.</p>
                        <Link to={"https://wa.me/message/AZBPWRR2G4ZRO1"}>
                            <Button className="mt-4" variant={"whatsapp"} size={"lg"}>Ask on WhatsApp</Button>
                        </Link>
                    </div>
                </div>

                <div className="flex border rounded-xl sm:flex-row flex-col border-primary sm:gap-32 gap-4    p-4 sm:p-16 mt-8 sm:mt-24 items-center justify-around bg-blue-50">
                    <div className="flex flex-col gap-8 sm:items-start items-center">
                        <p className="sm:text-5xl text-3xl font-medium">Practice Questions</p>
                        <div className="flex gap-4">
                            <Link to={"https://wa.me/message/AZBPWRR2G4ZRO1"}>
                                <Button className="py-5 px-24 border border-green-600 hover:border-green-900 bg-green-600 text-white" variant={"whatsapp"}>Ask on WhatsApp</Button>
                            </Link>
                            
                                <Button className="py-5 w-32 text-green-700 border border-[#25d366] hover:border-green-900 bg-transparent" variant={"whatsapp"} onClick={copyToClipboard}>Share</Button>
                         
                        </div>
                    </div>
                    
                    <img src={whatsappQr} alt="whatsapp-qr" className="sm:w-1/5 w-1/2" />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Whatsapp
