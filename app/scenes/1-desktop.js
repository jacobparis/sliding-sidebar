import * as React from 'react'

export default function HomeScene() {
  return (
    <div className="flex bg-gray-100">
      <aside className="bg-white w-64 min-h-screen flex flex-col">
        <div className="bg-white border-r border-b px-4 h-10 flex items-center">
          <span className="text-blue py-2">Application</span>
        </div>

        <div className="border-r py-4 flex-grow">
          <nav>
            <ul>
              <li className="p-3">
                <a href=""> Home </a>
              </li>
              <li className="p-3">
                <a href=""> Profile </a>
              </li>
              <li className="p-3">
                <a href=""> Portfolio </a>
              </li>
              <li className="p-3">
                <a href=""> Contact </a>
              </li>
              <li className="p-3">
                <a href=""> About </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          <div className="flex flex-grow items-center justify-between px-3">
            <h1 className="text-lg">Home</h1>
            <button className="text-blue-700 underline">Log in</button>
          </div>
        </header>
      </main>
    </div>
  )
}
