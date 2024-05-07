import {React, useEffect, useState} from 'react'
import { Link, matchPath } from 'react-router-dom'
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { IoIosArrowDown } from "react-icons/io";


// const subLinks = [
//     {
//         title:"python",
//         link:"/catalog/python",
//     },
//     {
//         title:"web dev",
//         link:"/catalog/web-development",
//     },
// ];


const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);
    const location = useLocation();
    const [subLinks, setSubLinks] = useState([])

    const fetchSublinks = async () => {
        try {
            const result = await apiConnector("GET",categories.CATEGORIES_API);
            console.log("Printing Sublinks result:",result);
            setSubLink(result.data.data)
        } catch (error) {
            console.log("Could not fetch the category list")  
        }
    }

    useEffect(()=>{
        fetchSublinks();
    },[])

    const matchRoute = (route) =>{
        return matchPath({path:route},location.pathname);
    }


  return (
    <div className=' h-14  border-b-[1px] border-b-richblack-700'>
        <div className='  mx-auto flex w-11/12 items-center justify-between max-w-maxContent h-full'>
        <Link to="/">
            <img src={Logo} alt="Logo" width={160} height={42} />
        </Link>


        {/* Nav Links  */}

        <nav>
            <ul className=' flex gap-x-6 text-richblue-25'>
                {
                    NavbarLinks.map((link,index) => (
                        <li key={index}>
                            {
                                link.title === "Catalog" ? (
                                    <div>
                                        <p className=' relative flex gap-1 items-center group'>
                                            {link.title}
                                            <IoIosArrowDown/>
                                            <div className='absolute invisible left-[50%] translate-y-4 -translate-x-[55%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                            opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]'>
                                                <div className=' absolute left-[61%] -top-2 h-6 w-6 rotate-45 rounded bg-richblack-5'></div>

                                                {
                                                    subLinks.length ? (
                                                        
                                                            subLinks?.map((subLink,index)=>(
                                                                <Link to={`${subLink.link}`} key={index}>
                                                                    <p>
                                                                        {subLink.title}
                                                                    </p>
                                                                </Link>
                                                            ))
                                                        
                                                    ) : (<div></div>)
                                                }


                                            </div>
                                        </p>
                                    </div>
                                ) : <Link to={link?.path}>
                                    <p className={`${matchRoute(link?.path) ? ' text-yellow-25': 'text-richblack-25'}`}>
                                    {link?.title}
                                    </p>
                                    </Link>
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>

        {/* Login/Signup/Dashboard  */}
        <div className=' flex gap-x-4 items-center w-[15%]'>
                {
                    user && user?.accountType != "Instructor" && (
                        <Link to={"/dashboard/cart"} className='relative'>
                            <FaCartShopping/>
                            {
                                totalItems > 0 && (
                                    <span>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/login"}> 
                            <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblue-100 rounded-md'>
                                Log in
                                </button> 
                        </Link>
                    )
                }
                {
                    token === null && (
                        <Link to={"/signup"}>
                            <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblue-100 rounded-md'>
                                Sign Up
                            </button>
                        </Link>
                    )
                }
                {
                    token !== null && <ProfileDropDown/>
                }
        </div>

        </div>
    </div>
  )
}

export default Navbar