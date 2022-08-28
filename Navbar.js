import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({title, items}) => {
  return(
    <nav className="navbar">
      <span className="title">{title}</span>
      <span className="items">
        {items.map(i => 
          <Link key={i.id} className="item" to={i.path} >{i.name}</Link>
        )}
      </span>
    </nav>
  )
}

export default Navbar
