import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button'
const Nav = () => {
  return (
    <header className="padding py-2 fixed top-0 z-10 w-full bg-slate-50">
      <nav className="flex max-container justify-between">
        <a href="/" className='text-2xl flex items-center'>Logo</a>
        <div className='flex p-3 items-start gap-9'>

          <ul className="flex-1 flex justify-center items-center gap-9 max-lg:hidden">
            <a href="/" className="flex items-center gap-2 leading-normal text-lg"><div className="h-4 w-4 bg-black rounded-full"></div>Nigeria (EN)</a>
            <a href="/" className="leading-normal text-lg">Support</a>
            <Button 
              variant='bg-fill'
              px='px-4'
              label='Sign Up'
            />
          </ul>
          <div className="block">
            <img 
              src={hamburger} 
              alt="Hamburger"
              width={25}
              height={25} />
          </div>
        </div>
      </nav>
    </header>
    
  )
}

export default Nav