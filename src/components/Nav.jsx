import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex max-container justify-between itemscenter">
        <a href="/">Logo</a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <a href="/" className="leading-normal text-lg">Nigeria (EN)</a>
          <a href="/" className="leading-normal text-lg">Support</a>
        </ul>
        <div className="block">
          <img 
            src={hamburger} 
            alt="Hamburger"
            width={25}
            height={25} />
        </div>
      </nav>
    </header>
    
  )
}

export default Nav