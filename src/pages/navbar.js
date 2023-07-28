import { Outlet, Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar = (req, res) => {
    return (
        <>

<nav class="navbar navbar-expand-lg  navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Foodwind</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active linkk" aria-current="page" to="/">HOME</Link>
        <Link class="nav-link active linkk" to="/secret" tabindex="-1" aria-disabled="true">FOOD</Link>
        <Link class="nav-link active linkk" to="/cart" tabindex="-1" aria-disabled="true">CART</Link>
        <Link class="nav-link active linkk" to="/myorder" tabindex="-1" aria-disabled="true">MY ORDER</Link>
        <Link class="nav-link active linkk" to="/login">LOGIN</Link>
        <Link class="nav-link active linkk" to="/signup">SIGN UP</Link>
      </div>
    </div>
  </div>
</nav>
<Outlet />
</>
    )
}
export default Navbar;