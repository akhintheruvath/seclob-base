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
import { GitHubGrayLogo } from './GitHubGrayLogo';
import { TwitterGrayLogo } from './TwitterGrayLogo';
import { LinkedInGrayLogo } from './LinkedInGrayLogo';
import { DiscordGrayLogo } from './DiscordGrayLogo';

const SignInPage = () => {
  return (
    <div className="md:flex bg-[#F8FAFF]">
      <div id='left-div' className="hidden md:flex flex-col items-center justify-between py-16 md:h-screen w-1/2 bg-[#605BFF]">
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
      <div className='h-20 bg-[#605BFF] w-screen md:hidden mb-8 flex items-center px-5'>
        <BaseLogoSignIn smallScreen={true} /><span className='ml-4 font-nunito text-[#FAFAFB] text-xl font-semibold'>Base</span>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-normal md:items-center h-screen md:pl-24">
        <div>
          <h3 className='font-montserrat font-bold text-black text-2xl md:text-4xl'>Sign In</h3>
          <p className='font-lato text-black text-xs md:text-base mt-3 mb-9 md:mb-6'>Sign in to your account</p>
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
            <p className='hidden md:block font-lato text-base text-[#858585]'>Don't have an account? <a href='' onClick={(e) => e.preventDefault()} className='text-[#346BD4]'>Register here</a></p>
            <p className='md:hidden mt-2 font-lato text-base text-[#858585]'>Don't have an account?</p>
          </div>
          <div className='flex justify-center mt-4 mb-7 md:hidden'>
            <a href='' onClick={(e) => e.preventDefault()} className='text-[#346BD4]'>Register here</a>
          </div>
          <div className='flex justify-center md:hidden'>
            <div className='flex justify-around items-center w-1/2'>
              <GitHubGrayLogo />
              <TwitterGrayLogo />
              <LinkedInGrayLogo />
              <DiscordGrayLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;