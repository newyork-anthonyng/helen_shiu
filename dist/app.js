class Router {
  constructor() {
    this.workContainerEl = Array.prototype.slice.apply(document.querySelectorAll('.work__container'));
    this.prevNavEl = document.querySelector('.work__navigation__prev');
    this.nextNavEl = document.querySelector('.work__navigation__next');
    this.aboutEl = document.querySelector('.about');
    this.workShowcaseEl = document.querySelector('.work__showcase');
    this.thumbnailsEl = document.querySelector('.work__thumbnails');
    const links = Array.prototype.slice.apply(document.querySelectorAll('.work__thumbnails a'));
    this.linkHrefs = links.map((e) => {
      return e.href.split('#')[1];
    });

    this.addEventListeners = this.addEventListeners.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.getCurrentHash = this.getCurrentHash.bind(this);
    this.getHashFromURL = this.getHashFromURL.bind(this);
    this.showWork = this.showWork.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.getIndexOfCurrentHash = this.getIndexOfCurrentHash.bind(this);
    this.showHomePage = this.showHomePage.bind(this);
    this.showAboutPage = this.showAboutPage.bind(this);

    this.addEventListeners();
    this.handleHashChange();
  }

  addEventListeners() {
    window.addEventListener('hashchange', this.handleHashChange);

    // add event listener to the navigation elements
    this.prevNavEl.addEventListener('click', this.handlePrevClick);
    this.nextNavEl.addEventListener('click', this.handleNextClick);
  }

  handleHashChange(e) {
    const hash = this.getCurrentHash();

    if (hash === 'about') {
      this.showAboutPage();
    } else if (!hash) {
      this.showHomePage();
    } else {
      this.showWork(hash);
    }
  }

  getCurrentHash() {
    return this.getHashFromURL(window.location.hash);
  }

  getHashFromURL(hash) {
    const splitURL = hash.split('#');
    return splitURL[splitURL.length - 1];
  }

  showAboutPage() {
    this.thumbnailsEl.classList.remove('work__thumbnails--active');
    this.workShowcaseEl.classList.remove('work__showcase--active');

    this.aboutEl.classList.add('about--active');
  }

  showHomePage() {
    this.workShowcaseEl.classList.remove('work__showcase--active');
    this.aboutEl.classList.remove('about--active');

    this.thumbnailsEl.classList.add('work__thumbnails--active');
  }

  showWork(name) {
    this.aboutEl.classList.remove('about--active');
    this.thumbnailsEl.classList.remove('work__thumbnails--active');

    this.workShowcaseEl.classList.add('work__showcase--active');

    this.workContainerEl.forEach(el => {
      if (el.classList.contains(name)) {
        el.classList.add('work__container--active');
      } else {
        el.classList.remove('work__container--active');
      }
    });
  }

  handlePrevClick() {
    const index = this.getIndexOfCurrentHash();

    if (index <= 0) return;

    const prevHash = this.linkHrefs[index - 1];
    window.location.hash = prevHash;
  }

  getIndexOfCurrentHash() {
    const currentHash = this.getCurrentHash();
    return this.linkHrefs.indexOf(currentHash);
  }

  handleNextClick() {
    const index = this.getIndexOfCurrentHash();

    if (index >= this.linkHrefs.length - 1) return;

    const nextHash = this.linkHrefs[index + 1];
    window.location.hash = nextHash;
  }
}

class MobileNav {
  constructor() {
    this.mobileNavToggleEl = document.querySelector('.menu__mobile__toggle');
    this.mobileNavEl = document.querySelector('.menu__mobile');

    this.mobileNavToggleEl.addEventListener('click', () => {
      this.mobileNavEl.classList.toggle('menu__mobile--active');
    });
  }
}

new Router();
new MobileNav();
