import { Globe, RadioTower } from 'lucide-react'
import React from 'react'
import Breadcrumb from './BreadCrumb'

const SupportHeader = () => {




  return (
    <nav className='h-[50px] flex flex-col md:flex-row  items-center justify-between  bg-gray-100 px-24'>
      <div className='hidden md:visible'>
        <Breadcrumb />
      </div>
      <div className='flex text-gray-400 items-center h-fit w-fit gap-4'>
        <div className='flex items-center w-fit h-fit gap-3'>
          <RadioTower className='size-4 ' />
          <p className='font-thin text-gray-700'>Support</p>
        </div>
        <div className='flex items-center w-fit h-fit gap-3'>
          <Globe className='size-4' />
          <p className='font-thin text-gray-700'>Languages</p>
        </div>
      </div>
    </nav>
  )
}

export default SupportHeader