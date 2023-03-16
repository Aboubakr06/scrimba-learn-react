import logo from "./assets/Group.png"

function Navbar() {  
  return (
  <>
    <nav className="nav">
    <div className="nav-item">
        <img src={logo} alt="logo" />
        <p>ReactFacts</p>
    </div>
    <p className="nav-text">React Course - Project 1</p>
    </nav>    
  </>
  )
}

export default Navbar
