import Icon from '@components/shared/Icon'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ul className="min-h-screen bg-[#1d3557] w-auto mt-10">
          <li className="p-2 m-2 bg-[#457b9d] rounded-lg translate-y-[-16px]">
            <Link href="/">
              <Icon name="start" className="w-5 h-5 " />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
