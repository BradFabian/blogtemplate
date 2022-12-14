class Footer extends HTMLElement {
    constructor(){
        super();
    }
   connectedCallback(){
    this.innerHTML = `
    <footer>
    <div class="footer__group">
        <ul class="footer__links-social">
            <li class="footer__links-social-links">Twitter</li>
            <li class="footer__links-social-links">LinkedIn</li>
            <li class="footer__links-social-links">Portfolio</li>
          </ul>
          <ul class="footer__links-resource">
            <li class="footer__links-resource-links">MDN</li>
            <li class="footer__links-resource-links">CSS-Tricks</li>
            <li class="footer__links-resource-links">Smashing Magazine</li>
          </ul>
            <div class="footer__group-visitor">
            <p class="footer__group-visitor-title">My Visitor Counter</p>
            <div class="footer__group-counter">
            <div class="footer__group-counter-number">1</div>
            <div class="footer__group-counter-number">2</div>
            <div class="footer__group-counter-number">0</div>
            <div class="footer__group-counter-number">0</div>
            <div class="footer__group-counter-number">9</div>
            </div>
            </div>
    </div>
      
     <p>Blog Designed & Developed By <a>Fabian Web Dev</a></p>
      
    </footer>

    `
   }

}

customElements.define(`footer-component`, Footer);