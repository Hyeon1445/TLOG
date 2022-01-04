import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

type HeaderProps = {
  title: string
}

const BaseHeader = ({ title }: HeaderProps) => {

  return (
    <header className="header h-10 bg-violet-300 text-white flex justify-center items-center">
      <MenuIcon
        className="absolute left-4"
      />
      {title}
    </header>
    // TODO: NavMenu (Desktop) / sidemenu(PC)
  )
}

export default BaseHeader