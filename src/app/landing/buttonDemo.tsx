'use client'
import React from 'react'
import { Button } from '@/components/button'
import { useToggleDemo } from '@/store/demoHooks'

const ButtonDemo = () => {
  const { toggleDemo } = useToggleDemo()

  return (
    <div>
      <div>
        <Button
          onClick={toggleDemo}
          className={`w-96 text-xl h-14 bg-primary hover:bg-transparent 
          hover:text-primary hover:border-primary hover:border-2`}
        >
          Try Demo
        </Button>
      </div>
    </div>
  )
}

export default ButtonDemo
