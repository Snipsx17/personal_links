import React from 'react'
import { Navbar } from './components/NavBar'
import { Logo } from '@/components/shared'


export default function Home() {
  return (
    <>
    <Logo/>
      <Navbar />
      <div>Home Page</div>
    </>
  )
}
