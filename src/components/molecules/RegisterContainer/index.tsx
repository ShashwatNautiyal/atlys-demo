import React from 'react';

import { AiFillEye } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import Button from '../../atoms/Button';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';

const RegisterContainer = ({onClose, onLoginClick, onRegisterClick}: {onClose?: () => void, onLoginClick: () => void, onRegisterClick: () => void}) => {
  
  return (
    <Card borderType='gradient' styles={{ padding: "40px 24px", position: "relative" }}>

      {
        onClose && <div onClick={onClose} className='w-8 h-8 bg-neutral-900 rounded-full flex justify-center items-center absolute right-4 top-4 cursor-pointer'>
          <MdClose className="text-sm" />
        </div>
      }


      <div className='text-center'>
        <div className='flex flex-col gap-2 mb-11'>
          <p className='text-sm font-medium text-[#6B6C70]'>SIGN UP</p>
          <p className='font-semibold'>Create an account to continue</p>
        </div>

        <div className='flex flex-col gap-4 mb-5'>
          <Input label='Email' name='email' placeholder='Enter your email' type='text' />

          <Input label='Username' name='username' placeholder='Choose a preferred username' type='text' />

          <Input label='Password' name='password' placeholder='Choose a strong password' type='password' Icon={AiFillEye} />
        </div>

        <Button text='Continue' onClick={onRegisterClick} />

        <div className='text-zinc-500 text-sm text-left mt-3'>Already have an account?
          <span onClick={onLoginClick} className='text-stone-300 cursor-pointer hover:underline hover:underline-offset-2 ml-1'> 
            Login →
          </span>
        </div>
      </div>
    </Card>
  )
}

export default RegisterContainer