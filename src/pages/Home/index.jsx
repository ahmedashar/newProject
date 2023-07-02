
import mainBackground from "../../assets/Main.png"
import Navbar from "../../components/Navbar";
import styles from './home.module.css'
import twitterIcon from "../../assets/twitter.svg"
import discordIcon from "../../assets/2.svg"
import telegramIcon from "../../assets/3.svg"
import WalletBtn from "../../components/WalletBtn";


const Home = ()=>{
    return (
    <div className={styles.home_container}>
        <div className="container">
        <Navbar/>
        <div className="row mt-5">
            <div className="col-lg-10 col-md-12 col-sm-12  col-12">
                <p className={styles.main_para +" main_para"}>Welcome to</p>
                <p className={styles.main_para + " main_para " + styles.main_para2}>Empureal Exchange</p>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 col-12 text-end">
                <img className={styles.social_icons} src={twitterIcon} alt="" /> <br />
                <img className={styles.social_icons} src={discordIcon} alt="" /> <br />
                <img className={styles.social_icons} src={telegramIcon} alt="" /> <br />
            </div>

            {/*  */}
        <div className="mt-5 pt-5"></div>

            <div className="col-lg-1 col-md-3 col-sm-3 col-3 ">
                <p style={{color:"white"}} className={styles.para1}>Welcome &nbsp; &nbsp; .</p>
            </div>
            <div className="col-lg-7 col-md-9 col-sm-9 col-9 ">
                <p className={styles.para1}>Empyreal Exchange (EmpEx) - Complex strategies <br /> made easy for everyone</p>
               <div style={{display: "inline-block"}}> <WalletBtn /> </div>
                <button className={styles.explore_btn}> EXPLORE THE SITE </button>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-5">
                <p className={styles.para2 +" "+ "normal_para"}>Accessible tokenized positions for everyone, earn yield, and give power to those who wouldn't normally have it. "Democratize DeFi".</p>
            </div>
        </div>
        </div>
    </div>)
}

export default Home;