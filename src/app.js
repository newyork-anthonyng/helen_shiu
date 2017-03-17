class Router {
  constructor() {
    /*
      Pages and elements
    */
    this.homeEl = document.querySelector('.work__thumbnails');
    this.aboutEl = document.querySelector('.about');
    /*
      The wrapper <section /> surrounding each work showcase
    */
    this.workShowcaseEl = document.querySelector('.work__showcase');
    this.workEl = Array.prototype.slice.apply(document.querySelectorAll('.work__showcase__container'));
    this.prevNavEl = document.querySelector('.work__showcase__navigation--prev');
    this.nextNavEl = document.querySelector('.work__showcase__navigation--next');

    /*
      Actions to show pages
    */
    this.showHomePage = this.showHomePage.bind(this);
    this.showAboutPage = this.showAboutPage.bind(this);
    this.showWork = this.showWork.bind(this);

    /*
      All work showcase links
    */
    const links = Array.prototype.slice.apply(document.querySelectorAll('.work__thumbnails a'));
    this.linkHrefs = links.map((link) => {
      return link.href.split('#')[1];
    });

    this.addEventListeners = this.addEventListeners.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.getCurrentHash = this.getCurrentHash.bind(this);
    this.getHashFromURL = this.getHashFromURL.bind(this);
    this.getIndexOfCurrentHash = this.getIndexOfCurrentHash.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);

    this.addEventListeners();
    this.handleHashChange();
  }

  addEventListeners() {
    window.addEventListener('hashchange', this.handleHashChange);
    this.prevNavEl.addEventListener('click', this.handlePrevClick);
    this.nextNavEl.addEventListener('click', this.handleNextClick);
  }

  handleHashChange() {
    const hash = this.getCurrentHash();

    if (hash === 'about') {
      this.showAboutPage();
    } else if (!hash || hash === 'work') {
      this.showHomePage();
    } else {
      this.showWork(hash);
    }

    // this.updateNavigation();

    window.scroll(0, 0);
  }

  showAboutPage() {
    this.homeEl.classList.remove('work__thumbnails--active');
    this.workShowcaseEl.classList.remove('work__showcase--active');

    this.aboutEl.classList.add('about--active');
  }

  showHomePage() {
    this.aboutEl.classList.remove('about--active');
    this.workShowcaseEl.classList.remove('work__showcase--active');

    this.homeEl.classList.add('work__thumbnails--active');
  }

  showWork(work) {
    this.aboutEl.classList.remove('about--active');
    this.homeEl.classList.remove('work__thumbnails--active');

    this.workShowcaseEl.classList.add('work__showcase--active');
    this.workEl.forEach((el) => {
      if (el.classList.contains(work)) {
        el.classList.add('work__showcase__container--active');
      } else {
        el.classList.remove('work__showcase__container--active');
      }
    });
  }

  getCurrentHash() {
    return this.getHashFromURL(window.location.hash);
  }

  getIndexOfCurrentHash() {
    return this.linkHrefs.indexOf(this.getCurrentHash());
  }

  getHashFromURL(hash) {
    const splitURL = hash.split('#');
    return splitURL[splitURL.length - 1];
  }

  handlePrevClick() {
    const index = this.getIndexOfCurrentHash();
    if (index <= 0) return;

    const prevHash = this.linkHrefs[index - 1];
    window.location.hash = prevHash;
  }

  handleNextClick() {
    const index = this.getIndexOfCurrentHash();
    if (index >= this.linkHrefs.length - 1) return;

    const nextHash = this.linkHrefs[index + 1];
    window.location.hash = nextHash;
  }
}

new Router();
