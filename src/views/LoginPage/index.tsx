import React from 'react';

import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

import Logo from '@/components/atoms/Logo';
import LoginContainer from '@/components/molecules/LoginContainer';

const inter = Inter({ subsets: ['latin'] })

const LoginPage = () => {
  const router = useRouter()
  return (
    <main className={inter.className} >
      <div className='flex flex-col justify-center items-center min-h-screen gap-12 max-w-[460px] px-4 mx-auto'>
        <Logo />
        <LoginContainer onLoginClick={() => router.push("/")} onRegisterClick={() => {}} />
      </div>
    </main>
  )
}



export default LoginPage