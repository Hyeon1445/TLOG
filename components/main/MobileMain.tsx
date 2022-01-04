import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt'
import LoginModal from './LoginModal'


const MobileMain = () => {
  const router = useRouter()
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className="h-screen text-white bg-cover bg-center bg-[url('~/public/images/main/swiss.jpg')]">
      <div className="title__wrapper pt-10 py-16 text-center">
        <span className="text-4xl font-pen">
          여행을 기록하다
        </span>
        <br />
        <span className="text-4xl font-highlight text-purple-100">
          TLOG
        </span>
      </div>
      <div className="p-4 flex justify-end">
        <Button
          className="bg-violet-600" variant="contained"
          onClick={() =>setIsLoginModalOpen(true)}
        >
          LOGIN / SIGNUP
        </Button>
      </div>
      <div className="main-buttons__wrapper bg-white mx-4 rounded bg-opacity-50 grid grid-cols-1 gap-4 py-10 px-4">
        <Button
          className="bg-white text-violet-600 font-semibold" 
          variant="contained"
        >
          오늘의 추천 여행지
        </Button>
        <Button 
          className="bg-white text-violet-600 font-semibold"
          variant="contained"
        >
          여행 후기
        </Button>
        <Button
          className="bg-red-500"
          variant="contained"
          startIcon={<EditLocationAltIcon />}
          onClick={() => { router.push('/my-page')}}
        >
          MY TLOG
        </Button>
      </div>
      <LoginModal
        isModalOpen={isLoginModalOpen}
        setIsModalOpen={setIsLoginModalOpen}
      />
    </div>
  )
}

export default MobileMain