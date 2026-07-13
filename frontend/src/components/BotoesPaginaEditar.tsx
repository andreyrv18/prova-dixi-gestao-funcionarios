import {NavLink} from "react-router-dom";
import Button from "./Button.tsx";
import {ptBR} from "../locales/pt-BR.ts";
import {AppIcons} from "../util/AppIcons.ts";

interface BotoesPaginaEditarProps {
    navLink: string;
    onClick?: () => void;
}

function BotoesPaginaEditar({ navLink, onClick }: BotoesPaginaEditarProps) {
    return (
        <section>
            <NavLink to={navLink}>
                <Button
                    name={ptBR.botao.cancelar}
                    Icon={AppIcons.Fechar}
                ></Button>
            </NavLink>
            <Button
                onClick={onClick}
                name={ptBR.botao.salvar}
                Icon={AppIcons.Salvar}
            ></Button>
        </section>
    );
}

export default BotoesPaginaEditar;
