import React from 'react';
import { BaseLogoSignIn } from './BaseLogoSignIn';
import { GitHubLogo } from './GitHubLogo';
import { TwitterLogo } from './TwitterLogo';
import { LinkedInLogo } from './LinkedInLogo';
import { DiscordLogo } from './DiscordLogo';
import { GoogleLogo } from './GoogleLogo';
import { AppleLogo } from './AppleLogo';
import { SignInForm } from './SignInForm';
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="flex bg-[#F8FAFF]">
      <div id='left-div' className="hidden md:flex flex-col items-center justify-between py-16 h-screen w-1/2 bg-[#605BFF]">
        <div className='ml-36 flex w-full items-start'><BaseLogoSignIn /></div>
        <div>
          <h1 className='font-montserrat font-bold text-white text-7xl mr-20'>BASE</h1>
        </div>
        <div>
          <div className='flex flex-row mr-20'>
            <div className='mx-6'><GitHubLogo /></div>
            <div className='mx-6'><TwitterLogo /></div>
            <div className='mx-6'><LinkedInLogo /></div>
            <div className='mx-6'><DiscordLogo /></div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-normal items-center h-screen md:pl-24">
        <div>
          <h3 className='font-montserrat font-bold text-black text-2xl md:text-4xl'>Sign In</h3>
          <p className='font-lato text-black text-xs md:text-base mt-3 mb-6'>Sign in to your account</p>
          <div className='flex items-center mb-6'>
            <div className='text-[10px] md:text-xs text-[#858585] rounded-xl bg-white flex items-center px-6 py-2 mr-7'>
              <GoogleLogo /><span className='ml-4 md:mr-2 text-nowrap'>Sign in with Google</span>
            </div>
            <div className='text-[10px] md:text-xs text-[#858585] rounded-xl bg-white flex items-center px-6 py-2'>
              <AppleLogo /><span className='ml-4 md:mr-2 text-nowrap'>Sign in with Apple</span>
            </div>
          </div>
          <SignInForm />
          <div className='flex justify-center mt-5'>
            <p className='font-lato text-base text-[#858585]'>Don't have an account? <a href='' onClick={(e) => e.preventDefault()} className='text-[#346BD4]'>Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;