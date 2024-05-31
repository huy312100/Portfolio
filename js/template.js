class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="site_header" class="header">
            <div class="header-content clearfix">

            <!-- Text Logo -->
            <div class="text-logo">
                <a href="index.html">
                <div class="logo-symbol">H</div>
                <div class="logo-text">Huy <span>Nguyen</span></div>
                </a>
            </div>
            <!-- /Text Logo -->

            <!-- Navigation -->
            <div class="site-nav mobile-menu-hide">
                <ul class="leven-classic-menu site-main-menu">
                <li class="menu-item">
                    <a href="index.html">About Me</a>
                </li>

                <li class="menu-item">
                    <a href="experience.html">Experience</a>
                </li>

                <li class="menu-item">
                    <a href="contact.html">Contact</a>
                </li>
                </ul>
            </div>

            <!-- Mobile Menu Toggle -->
            <a class="menu-toggle mobile-visible">
                <i class="fa fa-bars"></i>
            </a>
            <!-- Mobile Menu Toggle -->
            </div>
        </header>
        `;
  }
}
