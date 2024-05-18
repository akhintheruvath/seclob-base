import React from 'react';

export const SignInForm = () => {
  return (
    <div>
      <div className='px-9 py-10 bg-white rounded-2xl'>
         <form>
            <label className='font-lato text-base' htmlFor="email">Email address</label><br />
            <input className='w-full mt-3 mb-5 font-lato bg-[#F5F5F5] focus:bg-[#EAEAEA] focus:outline-none p-3 rounded-xl text-base' type="email" id="email" name="email" placeholder='johndoe@gmail.com' /><br />
            <label className='font-lato text-base' htmlFor="password">Password</label><br />
            <input className='w-full mt-3 font-lato bg-[#F5F5F5] focus:bg-[#EAEAEA] focus:outline-none p-3 rounded-xl text-base' type="password" id="password" name="password" /><br /><br />
            <a href='' className='font-lato text-[#346BD4] text-base'>Forgot password?</a>
            <button
               className='bg-[#605BFF] w-full flex items-center justify-center p-2 mt-6 rounded-xl font-montserrat text-white font-bold'
               onClick={(e) => e.preventDefault()}
            >
               Sign In
            </button>
         </form>
      </div>
    </div>
  );
}