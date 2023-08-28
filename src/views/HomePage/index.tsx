import React, { useState } from 'react';

import { Inter } from 'next/font/google';
import Image from 'next/image';
import { BsThreeDots } from 'react-icons/bs';
import { GoComment } from 'react-icons/go';

import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import Modal from '@/components/atoms/Modal';
import LoginContainer from '@/components/molecules/LoginContainer';
import RegisterContainer from '@/components/molecules/RegisterContainer';
import { Dialog } from '@headlessui/react';

const inter = Inter({ subsets: ['latin'] })

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalStatus, setModalStatus] = useState("login")

  return (
    <main className={inter.className}>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <Dialog.Panel className='w-[460px] mx-auto'>
          {
            modalStatus === "login" && <LoginContainer onLoginClick={() => setIsModalOpen(false)} onRegisterClick={() => setModalStatus("register")} onClose={() => setIsModalOpen(false)} />
          }
          {
            modalStatus === "register" && <RegisterContainer onRegisterClick={() => setIsModalOpen(false)} onLoginClick={() => setModalStatus("login")} onClose={() => setIsModalOpen(false)} />
          }
        </Dialog.Panel>
      </Modal>

      <div className='flex flex-col min-h-screen px-4 max-w-[700px] mx-auto py-16'>
        <div className="text-stone-300 text-[28px] font-medium">Hello Jane</div>

        <div className="text-zinc-500 text-base font-normal leading-normal w-[80%] mb-10">How are you doing today? Would you like to share something with the community 🤗</div>

        <Card onClick={() => setIsModalOpen(true)} borderType='simple' styles={{ padding: '24px 20px', marginBottom: "16px", cursor: "pointer" }}>
          <div className='flex flex-col gap-4 w-full'>
            <div className="text-stone-300 text-lg font-medium">Create post</div>

            <div className='bg-zinc-900 rounded-lg p-4 flex gap-4 items-center'>
              <div className='w-12 h-12 bg-zinc-800 rounded-full flex justify-center items-center flex-shrink-0'>
                💬
              </div>

              <input placeholder='How are you feeling today?' className="placeholder:text-zinc-500 text-base font-normal leading-none bg-transparent w-full outline-none text-white" />
            </div>

            <Button customStyle={{ marginLeft: "auto" }} size='regular' text='Post' />
          </div>
        </Card>

        <div className='flex flex-col gap-4'>
          {
            feedData.map(data => (
              <Card onClick={() => setIsModalOpen(true)} key={data.id} borderType='simple' styles={{ padding: '24px 20px', cursor: "pointer" }}>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex gap-4 justify-between items-center'>
                    <Image alt='face' height={44} width={44} className="object-cover h-11 w-11 rounded-full shrink-0" src={data.profileImgSrc} />

                    <div className='flex-1'>
                      <div className="text-stone-300 text-base font-medium">{data.name}</div>
                      <div className="text-zinc-500 text-sm font-medium flex items-center gap-1">
                        {data.timeAgo}
                        {data.isEdited && <span>• Edited</span>}
                      </div>
                    </div>

                    <BsThreeDots className="text-xl cursor-pointer" />
                  </div>

                  <div className='bg-zinc-900 rounded-lg p-4 flex gap-4'>
                    <div className='w-12 h-12 bg-zinc-800 rounded-full flex justify-center items-center flex-shrink-0'>
                      {data.emoji}
                    </div>

                    <div className="text-zinc-500 text-base font-normal leading-normal">
                      {data.postText}
                    </div>
                  </div>

                  <div className='flex gap-2'>
                    <GoComment className="text-xl transform scale-x-[-1] text-stone-300" />
                    <div className="text-zinc-500 text-sm font-medium">{data.comments} Comments</div>
                  </div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
    </main>
  )
}

const feedData = [{
  id: "1",
  profileImgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  name: "Theresa Webb",
  timeAgo: "5 mins ago",
  emoji: "👋",
  postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  comments: "24",
  isEdited: false
},
{
  id: "2",
  profileImgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
  name: "Marvin McKinney",
  timeAgo: "8 mins ago",
  emoji: "😞",
  postText: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  comments: "32",
  isEdited: true
}
]

export default HomePage