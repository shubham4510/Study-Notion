import React, { act } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import HighlightText from "../components/core/HomePage/HighlightText.jsx";

import CTAButton from "../components/core/HomePage/Button.jsx";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx";
import TimeLineSection from "../components/core/HomePage/TimeLineSection.jsx";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection.jsx";
import InstructorSection from "../components/core/HomePage/InstructorSection.jsx";

const Home = () => {
  return (
    <div>
      {/* Section 1  */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between">
        <Link to={"/signup"}>
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 shadow-white shadow-sm">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblue-900">
              <p>Become an Instructor</p>
              <FaArrowRightLong />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" w-[70%] text-center text-lg font-bold text-richblack-300 mt-4">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton linkto={"/login"}>Book a Demo</CTAButton>
        </div>

        <div className=" relative shadow-blue-200 shadow-lg w-[70%]  my-12 ">
          <video muted loop autoPlay>
            <source src={Banner} />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock Your <HighlightText text={"coding potential"} /> with our
                online courses{" "}
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* Code Section 2  */}
        <div></div>
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[333px]">
          <div className=" w-11/12 max-w-maxContent flex items-center gap-5 mx-auto flex-col">
            <div className=" h-[150px]"></div>

            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore full Catalog
                  <FaArrowRightLong />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div className="">Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex items-center justify-evenly py-6 px-12">
          <div className="flex flex-row gap-5">
            <div className="text-4xl font-semibold w-[45%]">
              Get the Skills you need for a{" "}
              <span className=" text-gradient">Job that is in demand</span>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-[50%] items-start">
            <div className=" text-[18px] ">
              The modern StudyNotion is the dictates its own terms. Today, to be
              a competitive specialist requires more than professional skills.
            </div>
            <CTAButton active={true} linkto={"/signup"}>
              <div>Learn more</div>
            </CTAButton>
          </div>
        </div>
      </div>
      <div className=" w-screen bg-pure-greys-5 py-12">
        <div className=" w-11/12  mx-auto">
          <TimeLineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3  */}
      <div className=" w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">

            <InstructorSection />


            <h2 className=" text-center text-4xl font-semibold mt-10">Review from other learners</h2>

            {/* Review Slider  */}

      </div>



{/* Section 4 */}

    </div>
  );
};

export default Home;
