import './globals.css'
import type { Metadata } from 'next'
import { Inter,Outfit,Raleway } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/component/Navbar'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  <Link href='https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css' rel='stylesheet' />


  
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={outfit.className}>
      <Navbar/>
        
        
        {children}
        
        </body>

    </html>
    </ClerkProvider>
  )
}
