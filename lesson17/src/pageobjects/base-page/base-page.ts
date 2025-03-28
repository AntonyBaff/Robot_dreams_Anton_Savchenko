import { SideBar } from './side-bar';
import { CartModalWindow } from '../cart-modal-window';
import { Header } from './header';

export class BasePage {
    public sidebar: SideBar;
    public cartModalWindow: CartModalWindow;
    public header: Header;

    public constructor() {
        this.sidebar = new SideBar();
        this.cartModalWindow = new CartModalWindow();
        this.header = new Header();
    }
}
