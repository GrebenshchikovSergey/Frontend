import { Inter } from 'next/font/google'
import Profile from './Profile'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <h1>Hello</h1>
      <Profile />
    </>
  )
}
