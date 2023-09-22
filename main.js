import './css/style.css'

document.querySelector("#app").innerHTML = `
  <!-- Header and Nav -->
  <header>
    <div class="logo">
      <img src="img/devclyde.png" alt="">
    </div>
    <button class="nav-toggle" aria-label="toggle navigation">
      <span class="hamburger"></span>
    </button>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
        <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
        <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
      </ul>
    </nav>
  </header>

  <!-- Introduction -->
  <section class="intro" id="home">
    <h1 class="section__title section__title--intro">
      Hi, I am <strong>Clyde Goodner</strong>
    </h1>
      <p class="section__subtitle section__subtitle--intro">full-stack dev</p>
        <img src="img/dev-jane-01.jpg" alt="a picture of Jane Smith smiling" class="intro__img">
  </section>

  <!-- My services -->
  <section class="my-services" id="services">
    <h2 class="section__title section__title--services">What I do</h2>
    <div class="services">
      <div class="service">
        <h3>Back-end Java Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> <!-- / service -->
                
      <div class="service">
        <h3>React Front-end</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> <!-- / service -->
                
      <div class="service">
        <h3>Node Back-end</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> <!-- / service -->
    </div> <!-- / services -->      
    <a href="#work" class="btn">My Work</a>
  </section>

  <!-- About me -->
  <section class="about-me" id="about">
    <h2 class="section__title section__title--about">Who I am</h2>
    <p class="section__subtitle section__subtitle--about">Developer based out of Minneapolis</p>
      
    <div class="about-me__body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
          
    <img src="img/dev-jane-02.jpg" alt="Jane leaning against a bus" class="about-me__img">
  </section>

  <!-- My Work -->
  <section class="my-work" id="work">
    <h2 class="section__title section__title--work">My work</h2>
    <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
    
    <div class="portfolio">
      <!-- Portfolio item 01 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-01.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 02 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-02.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 03 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-03.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 04 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-04.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 05 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-05.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 06 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-06.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 07 -->
      <a href="portfolio-item.html" class="portfolio__item">
        <img src="img/portfolio-07.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 08 -->
      <a href="#" class="portfolio__item">
        <img src="img/portfolio-08.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 09 -->
      <a href="#" class="portfolio__item">
        <img src="img/portfolio-09.jpg" alt="" class="portfolio__img">
      </a>
                
      <!-- Portfolio item 0 0-->
      <a href="#" class="portfolio__item">
        <img src="img/portfolio-10.jpg" alt="" class="portfolio__img">
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <!-- replace with your own email address -->
    <a href="mailto:clyde.goodner3@gmail.com" class="footer__link">clyde.goodner3@gmail.com</a>
    <ul class="social-list">
      <li class="social-list__item">
        <a class="social-list__link" href="https://www.linkedin.com/in/clydegoodner/">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li class="social-list__item">
        <a class="social-list__link" href="https://github.com/ceg3">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
`;

