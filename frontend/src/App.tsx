import './App.module.css';
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import styles from "./App.module.css";

export default function App() {

    return (
        <div className={styles.layout}>
            <Navbar/>
            <img src="/assets/logo.png" alt=""></img>
            <main style={{display: "flex", width: "100vw", justifyContent: "flex-start", padding: "2rem",}}>


                <Outlet/>
            </main>
        </div>
    )
}
