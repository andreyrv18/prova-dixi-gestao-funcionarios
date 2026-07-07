import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"
import {MdBadge, MdMeetingRoom, MdPerson} from "react-icons/md";
import LogoDixi from "../assets/Union.svg"
import {ptBR} from "../locales/pt-BR";


function Navbar() {
    return (
        <div className={styles.menu}>

            <img className={styles.link} src={LogoDixi} alt="logo dixi"></img>
            <hr className={styles.linha}/>

            <Link className={styles.link} to="/funcionario"><MdPerson size={40}/>{ptBR.navbar.funcionario}</Link>
            <hr className={styles.linha}/>

            <Link className={styles.link} to="/cargo"><MdBadge size={40}/>{ptBR.navbar.cargo}</Link>

            <hr className={styles.linha}/>
            <Link className={styles.link} to="/departamento"><MdMeetingRoom size={40}/>{ptBR.navbar.departamento}</Link>
        </div>
    );
}

export default Navbar;
