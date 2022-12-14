class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
       
        this.innerHTML = `
        
        <header>
        <div class="header-brand">MkdirCode</div>
       
        <nav class="header__nav">
            <ul class="menu" role="list">
                <li class="header__nav-item"><a class="header__nav-item-link" href='./'>Home</a></li>
                <li class="header__nav-item"><a  class="header__nav-item-link" href='./about.html'>About</a></li>
                <li class="header__nav-item"><a class="header__nav-item-link" href='./contact.html'>Contact</a></li>
            </ul>
        </nav>

    </header>`
    }
}

customElements.define(`header-component`, Header);