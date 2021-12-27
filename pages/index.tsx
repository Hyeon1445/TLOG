import type { NextPage } from 'next'

const Main: NextPage = () => {
  return (
    <div className="h-screen text-white bg-cover bg-center bg-[url('~/public/images/main/swiss.jpg')]">
      <span className="text-xl">TLOG</span>
      <span className="text-xl font-pen">TLOG</span>
      <span className="text-xl font-highlight">TLOG</span>
    </div>
  )
}

export default Main
