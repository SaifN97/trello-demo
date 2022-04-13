import Image from 'next/image'
import Link from 'next/link'

const MainHeader = () => {
  return (
    <header>
      <div className="flex ">
        <div className="flex items-center">
          <div className=" cursor-pointer px-4">
            <Image src="/assets/logo.svg" width="140px" height="80px" />
          </div>
          <nav className="hidden w-full md:ml-3 lg:flex">
            <ul className=" flex w-auto items-center gap-8 text-base tracking-normal">
              <li className="hover:text-blue-600">
                <Link href="/">Features</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/">Solutions</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/">Plans</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/">Pricing</Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/">Resources</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden items-stretch text-lg tracking-normal md:ml-auto md:flex">
          <button className="w-20 hover:text-blue-600">Log in</button>
          <button className="w-48 bg-blue-600 text-white hover:bg-blue-700">
            Get Trello For Free
          </button>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
