import Footer from "./Footer"
import Navbar from "./Navbar"
import heroBg from "@/assets/heroBg.png";
const OurStory = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center px-4 sm:px-14 2xl:px-32 min-h-screen gap-8 bg-center bg-no-repeat"
       style={{
        backgroundImage: `url(${heroBg})`, // Set the image as background
      }}>
      <p className="max-w-7xl px-6 py-2 text-4xl sm:text-2xl lg:text-5xl text-center font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Our Story</p>
      <div className="bg-white bg-opacity-50 rounded-xl shadow-sm p-2">
        <p className="text-lg leading-relaxed">
          Sometimes, we want to achieve a dream, but no matter what we do to manage things outside of our control, we don't seem to be getting there. We often think, "I could've done better only if I had access to more resources." But in reality, the answer always lies within us – in the priorities we set, the dedication we show, and how badly we want to succeed.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The journey of cracking a competitive exam is a dream for many of us, representing a pathway to a better life and creating a success story we'll share for years to come. Growing up in small cities in India, Abhishek and I faced numerous challenges while preparing for our first major competitive exam. We were overwhelmed by daunting decisions: choosing from an endless array of books, navigating through claims of star-studded teachers who promised to make us the next IIT success story, and facing the immense competition of lakhs of aspirants fighting for that one seat that could change our lives.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Like many others, we struggled through the confusion with a mix of determination and luck. But the journey revealed deep flaws in the system – inefficient learning methods from teachers who seemed indifferent, endless searches for toppers' notes in Telegram communities, asking doubts from random strangers, and mindlessly memorizing concepts without truly understanding them. The reality check came during mock tests when we found ourselves unable to solve problems, despite hours spent on questions and concepts.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          That's when Abhishek and I realized there had to be a better way. We knew firsthand the struggles of countless students like us – bright minds held back not by their capabilities, but by a fragmented learning system that left them swimming in an ocean of unstructured information.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Drawing from our own experiences, we built something we wish we had during our preparation days. A platform that doesn't just throw information at you, but understands where you are in your journey. We crafted a learning companion that adapts to your pace, fills your knowledge gaps, and most importantly, helps you truly understand concepts rather than merely memorizing them.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Today, when I see students using our platform, I see myself in them – but with one crucial difference. Where we once struggled alone, they now have a structured pathway. Where we once doubted our methods, they have confidence in their learning approach. Our community of mentors, all of whom have walked this path before, provide not just answers, but understanding. They don't just solve problems; they build problem-solvers.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          What started as a solution to our own struggles has grown into something bigger than us. We're seeing students from small towns, with limited resources, compete shoulder-to-shoulder with those from major cities. They're not just passing exams; they're developing a deeper understanding of their subjects, building confidence that will serve them well beyond their competitive exam journey.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The future we envision isn't just about creating more toppers – it's about transforming how students learn. It's about building a world where quality education isn't limited by geography or resources. Where every aspirant, regardless of their background, has access to the tools and guidance they need to succeed.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          When I look back at those difficult days of preparation, I realize that our struggles weren't in vain. They were the seeds of a solution that would help thousands of students after us. And as our community grows, each success story adds to our conviction that we're on the right path – creating not just an educational platform, but a movement towards more accessible, effective, and meaningful learning.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          This is more than just our story now – it's the story of every student who dares to dream big, every mentor who chooses to give back, and every small-town aspirant who refuses to let their circumstances define their future. Together, we're rewriting the narrative of competitive exam preparation, one student at a time.
        </p>
      </div>

    </div>
    <Footer/>
    </div>
  )
}

export default OurStory
