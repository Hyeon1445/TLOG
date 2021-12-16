import type { NextPage } from 'next'
import Image from 'next/image'
import mainImage from '../public/images/main/swiss.jpg'

const Main: NextPage = () => {
  return (
    <div className="">
      <Image
        src={mainImage}
        alt="example tour image"
      />
    </div>
  )
}

export default Main
