import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import BlogCard from '../components/BlogCard';
import { Link } from "react-router-dom";
import {MdAccountCircle, MdDelete, MdEdit} from "react-icons/md"

const Blog = () => {
  const { id } = useParams();
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  return (
    <section>

      {/* NAVIGATION BAR */}
      <nav className='p-5 border-b-2 flex gap-2 bg-purple-500'>
        <Link to="/" className="font-semibold flex justify-center items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 ease-in-out">
        <AiFillHome /> <span>Home</span>
        </Link>
        /
        <span className='text-white cursor-pointer '>mern stack crash course</span>
      </nav>


      {/* BlOG */}
      <div className='flex mx-5 gap-3 md:gap-5 flex-col md:flex-row'>
        {/* SELECTED BLOG SECTION */}
        <div className='w-full md:w-[60vw] bg-white mx-auto p-5 rounded-lg my-10'>
          <h1 className='text-4xl font-bold my-5'>Mern Stack Crash Course in hindi</h1>
          <img src="/thumbnail.jpg" alt="thumbnail" className='w-full h-[40vh] object-cover rounded-2xl shadow-md ' />
          <div className='flex gap-2 my-5'>
            <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Coding</span>
            <span className='px-4 py-2 text-gray-600 text-xs md:text-sm bg-white rounded-full font-semibold shadow-md capitalize'>Programming</span>
          </div>
          <hr />
          <div className='my-5'>
            <p className='overflow-x-clip'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum minima magnam harum, architecto at, odit excepturi natus error cupiditate, totam ea deserunt accusamus ipsa cumque repellendus laudantium quisquam modi optio doloribus aliquid. Ullam non harum, soluta ducimus exercitationem minus itaque officia nisi beatae et sit ratione accusantium totam ut cupiditate perspiciatis quis ipsam ipsa voluptate quidem sequi error, dolore nesciunt consectetur. Esse, accusantium iste. Itaque, dignissimos nostrum. Non et ipsa eos explicabo distinctio eaque, aliquid quaerat ab accusamus quia voluptates provident voluptate ea eveniet odit exercitationem maiores totam. Odio voluptatum quidem esse ad aliquid totam harum necessitatibus, magnam voluptatem accusantium?
            </p>
          </div>
          <div className='flex justify-start items-center gap-3 text-base'>
            <img src="/logo.png" alt="logo" className='rounded-full w-[40px] h-[40px]' />
            <div>
              <h4 className='font-bold'>ConnectHub</h4>
              <p className='font-bold'>11 April 2024</p>
            </div>
          </div>
        </div>

        {/* SIDEBAR FOR BLOGS */}
        <div className='my-10 '>
          
          {/* BLOG STARTS */}
          <h3 className='text-3xl font-semibold text-gray-600 ml-3'>More Blogs</h3>
          
          {/* BLOG CONTENT */}
          <div className='grid grid-cols-1 gap-3 md:h-[80vh] md:overflow-y-scroll md:px-3 md:pb-2 scroll-hide my-3'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />

          </div>

          {/* COMMENT SECTION */}
          <h3 className='text-3xl font-semibold text-gray-600 ml-3 mt-10'>Comments</h3>

          {/* COMMENT CONTENT */}
          <div >

            {/* ADDING COMMENT */}
            <div className='flex justify-between items-start gap-3 my-5'>
              {
                userAuthenticated ? (<img src="/logo.png" alt='profile' className='w-[50px] rounded-full '/> ) : (<MdAccountCircle className='text-5xl text-gray-600' />)
              }
              <div>
                <textarea name="message" id="message" rows="2" className='md:w-[35vw] rounded-lg outline-none shadow-md text-base px-3'></textarea>
                <div className='flex gap-3'>
                  <button className='text-white bg-purple-500 hover:bg-purple-400 px-5 py-1 text-base font-semibold transition-all duration-300 ease-linear rounded-md w-fit'>
                    Add
                  </button>
                  <button className='text-white bg-purple-500 hover:bg-purple-400 px-5 py-1 text-base font-semibold transition-all duration-300 ease-linear rounded-md w-fit'>
                    {
                      !userAuthenticated ? "Sign In With Google" : "Sign Out"
                    }
                  </button>
                </div>
              </div>
            </div>

            {/* LISTING COMMENTS */}

            <div>
              <div className='flex flex-col md:flex-row justify-start items-center md:gap-3 my-3'>
                <img src="/logo.png" alt="" className='rounded-full hidden md:block w-[50px] text-gray-600' />
                <div className='bg-white w-full md:w-[35vw] rounded-lg py-2 text-sm md:text-base px-3 shadow-md'>
                  <div className='flex justify-between'>
                    <span className='text-sm md:text-sm font-semibold'>ConnectHub</span>
                    <div className='flex gap-1'>
                      <MdEdit className='text-gray-500 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer' />
                      <MdDelete className='text-gray-500 hover:text-purple-500 hover:scale-105 transition-all ease-in-out cursor-pointer' /> 
                    </div>
                  </div>
                  <p className={`outline-none bg-gray-100 shadow-inner pl-1 rounded-md my-3 transition-all duration-100 ease-in-out`}>
                    Your video was just amazing, thanks bri!
                  </p>
                  <button className='bg-purple-500 hover:bg-purple-600 px-3 py-1 text-white text-sm rounded-lg'>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Blog