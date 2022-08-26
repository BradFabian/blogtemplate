class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `<header>
        <div class="header-brand">MkdirCode</div>
      
        <nav class="header__nav">
            <ul role="list">
                <li class="header__nav-item header__nav-item--active"><a href='/'>Home</a></li>
                <li class="header__nav-item"><a href='/about.html'>About</a></li>
                <li class="header__nav-item"><a href='/contact.html'>Contact</a></li>
            </ul>
        </nav>

    </header>`
    }
}

customElements.define(`header-component`, Header);