import React, { ReactNode } from 'react'

const PurpilTitle = ({ children }: { children: string | ReactNode }) => {
  return (
    <span className='text-purpil font-medium'>{children}</span>
  )
}

export default PurpilTitle