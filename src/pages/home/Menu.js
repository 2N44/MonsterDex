import "./Menu.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Menu = () => {
    return(
        <aside className="sidebar bg-primary-900">
            <div className="sidebar__top">
                <a href="#">
                    <Logo id="menu-logo" />
                </a>                
            </div>
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <a className="bg-primary-400" href="#">Deck builder</a>
                    </li>
                    <li>
                        <a className="bg-primary-400" href="#">Collection</a>
                    </li>
                    <li>
                        <a className="bg-primary-400" href="#">Cards</a>    
                    </li>                                      
                </ul>
            </div>
            <div className="sidebar__bot">
                <ul>
                    <li>
                        <a id="button-settings" className="bg-primary-400" href="#">Settings</a>
                    </li>    
                </ul>
            </div>
        </aside>
    );
}

export default Menu;