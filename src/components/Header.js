import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
// Top and Buttom
// whitespace-nowrap: no wrap

function Header() {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https:links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center bg-yellow-400 hover:bg-yellow-500
          h-10 rounded-md flex-grow cursor-pointer">
          <input className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
          <SearchIcon className="h-12 p-4"/>
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Jacob</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 
              text-center rounded-full font-bold hover:bg-yellow-500 cursor-pointer">6</span>
            <ShoppingCartIcon className="h-10"/>
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Prime Video</p>
        <p className="link">Prime Video</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
      </div>
    </header>
  )
}

export default Header