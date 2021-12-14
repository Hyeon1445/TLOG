import type { NextPage } from 'next'
import Button from '@mui/material/Button'

const Home: NextPage = () => {
  return (
    <div className="font-bold bg-red-100">
      <p>hello</p>
      <Button variant="contained">World</Button>
    </div>
  )
}

export default Home
