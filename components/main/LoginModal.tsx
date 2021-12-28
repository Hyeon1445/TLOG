import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type LoginModalProps = {
  isModalOpen: boolean
  setIsModalOpen: (isModalOpen: boolean) => void
}

const LoginModal = ({
  isModalOpen,
  setIsModalOpen
}: LoginModalProps) => {
  const closeModal = () => { setIsModalOpen(false) }

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
    >
      <div className="login-modal relative bg-white mx-4 top-40 h-60 rounded">
        <section className="modal-header">
          <CloseIcon
            className="absolute right-4 top-4"
            onClick={closeModal}
          />
          <h2 className="p-4 text-center font-bold">
            LOGIN
          </h2>
        </section>

        <section className="modal-body flex flex-col items-center">
          <TextField
            label="ID"
            variant="outlined"
            size="small"
            className="w-60 mb-4"
          />
          <TextField
            label="PW"
            variant="outlined"
            size="small"
            className="w-60"
          />
          {/* TODO: hide password option */}
        </section>
      
        <section className="modal-footer flex justify-center pt-4">
          <Button
            variant="contained"
            className="bg-violet-400 w-28 mr-4"
            onClick={closeModal}
          >
            SIGNUP
          </Button>
          <Button
            variant="contained"
            className="bg-red-400 w-28"
            onClick={closeModal}
          >
            LOGIN
          </Button>
          {/* TODO: change button color */}
        </section>
      </div>
    </Modal>
  )
}

export default LoginModal