import './Navbar.css'

const Navbar = ({title, items}) => {

  let key = 0

  return(
    <nav className="navbar">
      <span className="title">{title}</span>
      <span className="items">
        {items.map(i => 
          <span key={key++} className="item" onClick={i.clickEvent} >{i.name}</span>
        )}
      </span>
    </nav>
  )
}

export default Navbar
