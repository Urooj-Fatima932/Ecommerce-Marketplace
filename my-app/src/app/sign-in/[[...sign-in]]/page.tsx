'use client'
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import Image from 'next/image'
import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-[93%] mx-auto">
        <div className="h-auto w-[380px] mx-auto my-10 p-4 sm:p-6 bg-white rounded-lg">
          <div className="w-full mx-auto text-center">
            <div className="flex justify-center">
              <Image
                className="mb-4"
                src="/images/logo2.png"
                alt="logo"
                width={60}
                height={20}
              />
            </div>
            <h1 className="text-2xl font-semibold mb-4">WELCOME BACK</h1>
            <p className="text-sm text-gray-600 mb-6">
              Log in to your Nike Member profile for exclusive access
            </p>

            <SignIn.Root>
              <SignIn.Step name="start">
                <div className='flex justify-between gap-2'>
                  <Clerk.Connection 
                    name="google"
                    className='flex-1 bg-white shadow-md text-[#1f1f1f] py-1 px-4 border-[1px] border-[#1f1f1f] rounded-[10px] hover:bg-zinc-200'
                  >
                    <div className='flex gap-2 items-center justify-center'>
                      <RiGoogleFill size={20}/>
                      <p className='text-sm'>Google</p>
                    </div>
                  </Clerk.Connection>
                  <Clerk.Connection 
                    name="github"
                    className='flex-1 bg-white shadow-md text-[#1f1f1f] py-1 px-4 border-[1px] border-[#1f1f1f] rounded-[10px] hover:bg-zinc-200'
                  >
                    <div className='flex gap-2 items-center justify-center'>
                      <RiGithubFill size={20}/>
                      <p className='text-sm'>Github</p>
                    </div>
                  </Clerk.Connection>
                </div>

                <p className='text-gray-500 w-full text-center my-4 text-xs'>or</p>
                <h3 className='text-[#1f1f1f] w-full font-light text-lg text-center mb-4'>
                  Continue With Email
                </h3>

                <Clerk.Field name="identifier">
                  <div className='w-full text-left mb-2'>
                    <Clerk.Label className="text-sm font-medium">Email</Clerk.Label>
                  </div>
                  <Clerk.Input 
                    placeholder='Enter your email'
                    className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                  />
                  <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                </Clerk.Field>

                <SignIn.Action
                  submit
                  className='w-full bg-black text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-800 transition-colors mt-4'
                >
                  Continue
                </SignIn.Action>
              </SignIn.Step>

              {/* Verification Steps */}
              <SignIn.Step name="verifications">
                <SignIn.Strategy name="email_code">
                  <h2 className="text-lg font-semibold mb-4">Check Your Email</h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Verification code sent to <SignIn.SafeIdentifier />
                  </p>

                  <Clerk.Field name="code">
                    <div className='w-full text-left mb-2'>
                      <Clerk.Label className="text-sm font-medium">Code</Clerk.Label>
                    </div>
                    <Clerk.Input 
                      placeholder='Enter 6-digit code'
                      className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                    />
                    <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                  </Clerk.Field>

                  <SignIn.Action
                    submit
                    className='w-full bg-black text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-800 transition-colors mt-4'
                  >
                    Verify Code
                  </SignIn.Action>
                </SignIn.Strategy>

                <SignIn.Strategy name="password">
                  <h2 className="text-lg font-semibold mb-4">Enter Password</h2>
                  <Clerk.Field name="password">
                    <div className='w-full text-left mb-2'>
                      <Clerk.Label className="text-sm font-medium">Password</Clerk.Label>
                    </div>
                    <Clerk.Input 
                      type="password"
                      placeholder='Enter your password'
                      className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                    />
                    <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                  </Clerk.Field>

                  <div className="mt-4 space-y-2">
                    <SignIn.Action
                      submit
                      className='w-full bg-black text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-800 transition-colors'
                    >
                      Sign In
                    </SignIn.Action>
                    <SignIn.Action
                      navigate="forgot-password"
                      className='text-sm text-neutral-600 hover:text-neutral-800'
                    >
                      Forgot Password?
                    </SignIn.Action>
                  </div>
                </SignIn.Strategy>
              </SignIn.Step>

              {/* Password Reset Flow */}
              <SignIn.Step name="forgot-password">
                <h2 className="text-lg font-semibold mb-4">Reset Password</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Enter your email to receive reset instructions
                </p>

                <Clerk.Field name="identifier">
                  <div className='w-full text-left mb-2'>
                    <Clerk.Label className="text-sm font-medium">Email</Clerk.Label>
                  </div>
                  <Clerk.Input 
                    placeholder='Your account email'
                    className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                  />
                  <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                </Clerk.Field>

                <div className="mt-4 space-y-2">
                  <SignIn.Action
                    submit
                    className='w-full bg-black text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-800 transition-colors'
                  >
                    Send Reset Link
                  </SignIn.Action>
                  <SignIn.Action
                    navigate="previous"
                    className='text-sm text-neutral-600 hover:text-neutral-800'
                  >
                    Back to Login
                  </SignIn.Action>
                </div>
              </SignIn.Step>

              <SignIn.Step name="reset-password">
                <h2 className="text-lg font-semibold mb-4">New Password</h2>
                <Clerk.Field name="password">
                  <div className='w-full text-left mb-2'>
                    <Clerk.Label className="text-sm font-medium">New Password</Clerk.Label>
                  </div>
                  <Clerk.Input 
                    type="password"
                    placeholder='Create new password'
                    className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                  />
                  <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                </Clerk.Field>

                <Clerk.Field name="confirmPassword" className='mt-4'>
                  <div className='w-full text-left mb-2'>
                    <Clerk.Label className="text-sm font-medium">Confirm Password</Clerk.Label>
                  </div>
                  <Clerk.Input 
                    type="password"
                    placeholder='Re-enter your password'
                    className='w-full rounded-[10px] border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950'
                  />
                  <Clerk.FieldError className='text-xs text-red-600 mt-1' />
                </Clerk.Field>

                <SignIn.Action
                  submit
                  className='w-full bg-black text-white font-medium py-2 px-5 rounded-[20px] hover:bg-zinc-800 transition-colors mt-4'
                >
                  Update Password
                </SignIn.Action>
              </SignIn.Step>
            </SignIn.Root>
          </div>
        </div>
      </div>
    </main>
  )
}