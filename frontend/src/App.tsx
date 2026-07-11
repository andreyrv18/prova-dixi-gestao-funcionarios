import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import styles from "./App.module.css";

export default function App() {
    return (
        <section className={styles.layout}>
            <Navbar />

            <main className={styles.conteudo}>
                <Outlet />
            </main>
        </section>
    );
}
