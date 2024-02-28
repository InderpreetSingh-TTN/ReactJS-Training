import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useParams,
    useMatch,
    useNavigate,
    Prompt
} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart'
import { useState , useEffect} from "react";

function NavBar() {

    const[cartItems,setCartItems] = useState([]) ;


    return (
        <>
            <Router>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <Link class="nav-link" aria-current="page" to="/">Home</Link>
                                <Link class="nav-link" to="/products">Products</Link>
                                <Link class="nav-link" to="/cart">Cart</Link>

                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/products' element={<Products setCartItems={setCartItems} cartItems ={cartItems} />} />
                    <Route exact path='/cart' element={<Cart cartItems ={cartItems} /> } />

                </Routes>
            </Router>
        </>
    )
}
export default NavBar;