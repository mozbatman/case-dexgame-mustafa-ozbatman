import styles from "./Footer.module.scss";

const Footer = () => {
  
  return <div className={styles.footer}>
      <div className={styles.info}> 
        <span className={styles.author}>Mustafa Ozbatman @2021</span>
        <a className={styles.source} href="https://github.com/mozbatman" >Dexgame Case</a>
      </div> 
    </div>
}

export default Footer;