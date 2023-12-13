import React from 'react'
import { FormInput } from '../components/FormInput'

const Login = () => {
  return (
    <div className="flex h-[100svh]">
      <div className="bg-register bg-cover bg-center flex flex-col flex-[0.3] px-16 py-20 h-full">
        <img src="./logo.png" alt="logo" className="w-fit" />
        <div className="mt-auto text-white">
          <h2 className="text-xl font-semibold pb-2">Start your journey with us.</h2>
          <p>Discover simple methods to attend to your patients and provide the best healthcare for them.</p>
        </div>
      </div>
      <div className="flex-[0.7] max-w-[60%] p-20 h-full justify-center flex flex-col gap-6">
        <div className='pb-4'>
          <h1 className="text-[#EA6011] text-3xl ">Sign in to your account</h1>
          <p>Provide information that would be used to register you and your firm</p>
        </div>
        <div className="flex flex-col gap-y-6">

          <FormInput name="username" placeholder="Enter your username or id number" required={true} autoComplete="false" label="Username/ UserID" type="text" id="username" onChange={() => { return null }} />
          <FormInput name="password" placeholder="Enter your password" required={true} autoComplete="false" label="Password" type="text" id="password" onChange={() => { return null }} />


          <button className="w-full py-2 text-white bg-[#EA6011]">
            Sign in
          </button>
          <div className="flex w-full justify-center">
            <p className='text-[#94A3B8]'>Don't have an account ? <a href="/login" className="text-[#EA6011]">Sign Up</a></p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login