import React, { act } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import HighlightText from "../components/core/HomePage/HighlightText.jsx";

import CTAButton from "../components/core/HomePage/Button.jsx";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks.jsx";

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
          Empower Your Future with {" "}
          <HighlightText text={"Coding Skills"} />
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

        <div className=" relative shadow-blue-200 w-[70%]  my-12 ">
          <video  muted loop autoPlay>
            <source src={Banner} />
          </video>
        </div>

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className=" text-4xl font-semibold">Unlock Your <HighlightText text={"coding potential"}/> 
                     {" "} with our online courses </div>
              }
              
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }

              ctabtn1={
                {
                  btnText:"Try it yourself",
                  linkto:"/signup",
                  active:true,
                }
              }
              ctabtn2={
                {
                  btnText:"Learn more",
                  linkto:"/login",
                  active:false,
                }
              }

              codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}

              codeColor={"text-yellow-25"}
          />
        </div>

        {/* Code Section 1  */}
          <div>
            
          </div>

      </div>

      {/* Section 2 */}

      {/* Section 3  */}

      {/* Section 4 */}
    </div>
  );
};

export default Home;
