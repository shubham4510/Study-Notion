import {React} from 'react'
import { Link, matchPath } from 'react-router-dom'
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import ProfileDropDown from '../core/Auth/ProfileDropDown'


const Navbar = () => {

    const {token} = useSelector((state) => state.auth);
    const {user} = useSelector((state) => state.profile);
    const {totalItems} = useSelector((state) => state.cart);


    const location = useLocation();

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
                                link.title === "Catalog" ? <div></div> : <Link to={link?.path}>
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