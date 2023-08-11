"use client"

import AuthKit from '@/components/AuthKit'
import Image from 'next/image'
import { AccountAbstractionProvider } from './store/accountAbstractionContext'

export default function Home() {
  return (
    <main className="">

      <AccountAbstractionProvider>
        <AuthKit />
      </AccountAbstractionProvider>


    </main>
  )
}
