import {Link} from "react-router-dom";
import styles from "./navbar.module.css";
import LogoDixi from "../assets/Union.svg";
import {ptBR} from "../locales/pt-BR";
import {AppIcons} from "../util/AppIcons.ts";
import {rotas} from "../util/rotas.ts";

function Navbar() {
    return (
        <div className={styles.menu}>
            <img className={styles.link} src={LogoDixi} alt="logo dixi"></img>
            <hr className={styles.linha} />

            <Link className={styles.link} to={rotas.funcionarios.listar}>
                <AppIcons.Funcionario className={styles.icons} />
                {ptBR.navbar.funcionario}
            </Link>
            <hr className={styles.linha} />

            <Link className={styles.link} to={rotas.cargos.listar}>
                <AppIcons.Cargo className={styles.icons} />
                {ptBR.navbar.cargo}
            </Link>

            <hr className={styles.linha} />

            <Link className={styles.link} to={rotas.departamentos.listar}>
                <AppIcons.Departamento className={styles.icons} />
                {ptBR.navbar.departamento}
            </Link>
        </div>
    );
}

export default Navbar;
