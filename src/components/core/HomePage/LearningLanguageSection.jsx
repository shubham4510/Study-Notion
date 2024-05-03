import React from 'react'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "./Button.jsx"

const LearningLanguageSection = () => {
  return (
    <div className=' flex flex-col gap-5 mt-[130px] items-center '>

        <div className='text-4xl font-semibold text-center'>
            Your Swiss Knife for <span className="text-gradient">learning any language</span>
        </div>

        <div className=' text-center text-richblack-600 mx-auto text-base'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, <br />
            progress tracking, custom schedule and more.
        </div>

        <div className=' flex flex-row items-center mt-5'>
            <img src={know_your_progress} alt='know_your_progress' className=' object-contain translate-x-28 z-[1]' />
            <img src={compare_with_others} alt='compare_with_others' className=' object-contain z-[2]' />
            <img src={plan_your_lesson} alt='plan_your_lesson' className=' object-contain -translate-x-32 z-[3]' />
        </div>

        <div className=' w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn more
                    </div></CTAButton>
        </div>
    </div>
  )
}

export default LearningLanguageSection