import './Navbar.css'

const Navbar = ({title, items}) => {
  return(
    <nav className="navbar">
      <span className="title">{title}</span>
      <span className="items">
        {items.map(i => 
          <span key={i.id} className="item" onClick={i.clickEvent} >{i.name}</span>
        )}
      </span>
    </nav>
  )
}

export default Navbar
