import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighlightText from './HighlightText';
import CourseCard from './CourseCard'

const tabsName = [
    "Free",
    "New to Coding",
   " Most popular",
   "Skill paths",
   "Career paths",
]

const ExploreMore = () => {

    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

    const setMyCards = (value) =>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=> course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div className='flex flex-col items-center relative'>
        <div className=' font-bold text-4xl '>
            Unlock the <HighlightText text={"Power of Code"}/>
        </div>

        <p className=' text-center text-richblack-300 text-md  my-3'>
            Learn to build anything you can imagine
        </p>

        <div className=" flex items-center gap-2 rounded-full bg-richblack-800 mb-3 px-4">
            {
                tabsName.map((element,index)=>{
                    return (
                        <div key={index} className={` text-[16px] ${element === currentTab ? "bg-richblack-900 font-medium text-richblack-5" : " text-richblack-200 "}
                     rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-3 py-5   `}
                     
                     onClick={()=>{
                        setMyCards(element)
                     }}
                     
                     >{element}</div>
                    )
                })
            }
        </div>


            <div className='lg:h-[150px] '></div>

            {/* course card ka group  */}

            <div className=' absolute -bottom-8 flex text-black gap-10 justify-between w-full'>
                {
                    courses.map((element,index) =>{
                        return (
                            <CourseCard key={index} cardData={element} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
                        )
                    })
                }
            </div>
        
    </div>
  )
}

export default ExploreMore