
import Logo from '../assets/img/menu.png'
import './Navbar.css'
function Navbar(){
return(
    <div>
        <nav>
        <div className='logo'> 
            <img src ={Logo}/>
            </div>
            <div className='search'>
                <input type='text' placeholder='Search' />
                 </div>
            <div className='menus'> </div>
        </nav>
    </div>
)
}

export default Navbar;