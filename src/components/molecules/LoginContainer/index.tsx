import React from 'react';

import { useRouter } from 'next/router';
import { AiFillEye } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';

const LoginContainer = ({onClose, onRegisterClick, onLoginClick}: {onClose?: () => void, onRegisterClick: () => void, onLoginClick: () => void}) => {
  const router = useRouter()
  return (
    <Card borderType='gradient' styles={{padding: "40px 24px", position: "relative"}}>
      {
        onClose && <div onClick={onClose} className='w-8 h-8 bg-neutral-900 rounded-full flex justify-center items-center absolute right-4 top-4 cursor-pointer'>
        <MdClose className="text-sm" />
      </div>
      }

      <div className='text-center'>
        <div className='flex flex-col gap-2 mb-11'>
          <p className='text-sm font-medium text-[#6B6C70]'>WELCOME BACK</p>
          <p className='font-semibold'>Log into your account</p>
        </div>

        <div className='flex flex-col gap-4 mb-5'>
          <Input label='Email or Username' name='email' placeholder='Enter your email or username' type='text' />

          <Input label='Password' name='password' placeholder='Enter your password' type='password' Icon={AiFillEye} />
        </div>

        <Button text='Login now' onClick={onLoginClick} />

        <div className='text-zinc-500 text-sm text-left mt-3'>Not registered yet? 
          <span onClick={onRegisterClick} className='text-stone-300 cursor-pointer hover:underline hover:underline-offset-2'> Register →</span>
        </div>
      </div>
    </Card>
  )
}

export default LoginContainer