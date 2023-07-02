
import logo from "../../assets/logo.png"
import styles from './navbar.module.css'
import WalletBtn from "../WalletBtn"
const Navbar = ()=>{
    return (
//     <div className={styles.nav_container}>
//         <div className={styles.logo_container}>
// asd
//         </div>
//         <div className={styles.nav_main}>
// asd
//         </div>
//         <div className={styles.btn_container}>
//             <WalletBtn/>
//         </div>
//     </div>)
    
<nav className={"navbar navbar-expand-lg "+ styles.navBar_main} >
  <div className={"container-fluid " + styles.nav_div}>
    <img src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">

      <ul className={"navbar-nav me-auto m-auto mb-2 mb-lg-0 "+ styles.nav_main}>
        <li className={"nav-item "+ styles.home_nav_item}>
          <a className={"nav-link "+ styles.home_link} href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TEAM</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQS</a>
        </li>
      </ul>

      <WalletBtn/>
    </div>
  </div>
</nav>
)
}

export default Navbar;