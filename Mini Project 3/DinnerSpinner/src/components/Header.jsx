import logo from '../assets/images/food.png'

export default function Header(props) {
    return (
<nav className="nav-bar">
<p><img src={logo} alt="logo" height="40"/></p>
<ul>
  <li>
    <a href to="/homepage">Home</a>
  </li>
  <li>
    <a href="/contact-us">Contact</a>
  </li>
  <li>
    <a href="/meal-generator">Dinner Spinner</a>
  </li>
  <li>
    <a href="/signup">Signup</a>
  </li>
  
</ul>
</nav>
    )
}