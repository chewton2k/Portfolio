import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className = "header">
        <NavLink to= "/" className = "w-10 h-10 rounded-lg bg-white justify-center flex font-bold items-center shadow-md"> 
            <p className = "blue-gradient_text"> CS </p>
        </NavLink> 
        <nav className = "flex text-lg gap-7 font-medium">
            <NavLink to ="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
        </nav>
        <nav>
            <NavLink to ="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
        <nav>
            <NavLink to ="/blog" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
        </nav>
        <nav>
            <NavLink to ="/contact" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Contact
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar