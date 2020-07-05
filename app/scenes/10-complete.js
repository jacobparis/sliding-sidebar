import * as React from 'react'

import Menu from '../components/Menu'

import useBreakpoint from '../hooks/useBreakpoint'

export default function HomeScene() {
  const [isClosed, setClosed] = React.useState(true)

  const isStatic = useBreakpoint('sm')

  return (
    <Menu isStatic={isStatic} isClosed={isClosed} setClosed={setClosed}>
      <div className="flex flex-grow items-center justify-between px-3">
        <h1 className="text-lg">Home</h1>
        <button className="text-blue-700 underline">Log in</button>
      </div>
    </Menu>
  )
}
