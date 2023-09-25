import {useState,useEffect} from 'react'
import {useLocation,Link} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
const NaveBar = () => {
    const [className, setClassName] = useState("");
    const [menu, setMenu] = useState(false);
   const location = useLocation();

   const openMenu =()=>{
         setMenu(!menu);
   }
   const closeMenu =()=>{
    setMenu(false);
   }
useEffect(() => {
    console.log(location.pathname); 
    if (location.pathname !== '/') {
        setClassName('relative-header');
      }
      else{
        setClassName('');
        }
},[location])
  return (
    <header className={`${className}`}>
      <div className="logo" onClick={closeMenu}>
        <h1><Link to="/">Quiz</Link></h1>
      </div>
      <nav className="nav-links">
        <ul className={menu?"openMenu":""}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/addquestion" onClick={closeMenu}>Add Test</Link>
          </li>
          <li>
            <Link to="/testlist" onClick={closeMenu}>Test List</Link>
          </li>
          <li>
            <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
          </li>
          <li>
            <Link to="/signin" onClick={closeMenu}>Sign In</Link>
          </li>
        </ul>
      </nav>
     {/*  <div className="settings">setting</div> */}
      <div className="menu" onClick={openMenu}><AiOutlineMenu className='icon'/></div>
    </header>
  );
};

export default NaveBar;
