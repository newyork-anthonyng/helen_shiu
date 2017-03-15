class Router {
  constructor() {
    // pages
    this.homeEl = document.querySelector('.work__thumbnails');
    this.aboutEl = document.querySelector('.about');
    this.showHomePage = this.showHomePage.bind(this);
    this.showAboutPage = this.showAboutPage.bind(this);

    this.addEventListeners = this.addEventListeners.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.getCurrentHash = this.getCurrentHash.bind(this);
    this.getHashFromURL = this.getHashFromURL.bind(this);

    this.addEventListeners();
    this.handleHashChange();
  }

  addEventListeners() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange() {
    const hash = this.getCurrentHash();

    if (hash === 'about') {
      this.showAboutPage();
    } else if (!hash || hash === 'work') {
      this.showHomePage();
    } else {
      // this.showWork(hash);
    }

    // this.updateNavigation();

    window.scroll(0, 0);
  }

  showAboutPage() {
    this.homeEl.classList.remove('work__thumbnails--active');

    this.aboutEl.classList.add('about--active');
  }

  showHomePage() {
    this.aboutEl.classList.remove('about--active');

    this.homeEl.classList.add('work__thumbnails--active');
  }

  getCurrentHash() {
    return this.getHashFromURL(window.location.hash);
  }

  getHashFromURL(hash) {
    const splitURL = hash.split('#');
    return splitURL[splitURL.length - 1];
  }
}

new Router();

// class Router {
//   constructor() {
//     this.workContainerEl = Array.prototype.slice.apply(document.querySelectorAll('.work__container'));
//     this.prevNavEl = document.querySelector('.work__navigation__prev');
//     this.nextNavEl = document.querySelector('.work__navigation__next');
//     this.aboutEl = document.querySelector('.about');
//     this.workShowcaseEl = document.querySelector('.work__showcase');
//     this.thumbnailsEl = document.querySelector('.work__thumbnails');
//     this.desktopWorkLinkEl = document.querySelector('.menu__link[href="#"]');
//     this.desktopAboutLinkEl = document.querySelector('.menu__link[href="#about"]');
//     this.mobileMenuEl = document.querySelector('.menu__mobile');
//
//     const links = Array.prototype.slice.apply(document.querySelectorAll('.work__thumbnails a'));
//     this.linkHrefs = links.map((e) => {
//       return e.href.split('#')[1];
//     });
//
//     this.addEventListeners = this.addEventListeners.bind(this);
//     this.handleHashChange = this.handleHashChange.bind(this);
//     this.getCurrentHash = this.getCurrentHash.bind(this);
//     this.getHashFromURL = this.getHashFromURL.bind(this);
//     this.showWork = this.showWork.bind(this);
//     this.handlePrevClick = this.handlePrevClick.bind(this);
//     this.handleNextClick = this.handleNextClick.bind(this);
//     this.getIndexOfCurrentHash = this.getIndexOfCurrentHash.bind(this);
//     this.showHomePage = this.showHomePage.bind(this);
//     this.showAboutPage = this.showAboutPage.bind(this);
//     this.updateMenuLinks = this.updateMenuLinks.bind(this);
//     this.updateNavigation = this.updateNavigation.bind(this);
//
//     this.addEventListeners();
//     this.handleHashChange();
//     this.updateNavigation();
//   }
//
//   addEventListeners() {
//     window.addEventListener('hashchange', this.handleHashChange);
//     this.prevNavEl.addEventListener('click', this.handlePrevClick);
//     this.nextNavEl.addEventListener('click', this.handleNextClick);
//   }
//
//   handleHashChange(e) {
//     const hash = this.getCurrentHash();
//
//     if (hash === 'about') {
//       this.showAboutPage();
//     } else if (!hash) {
//       this.showHomePage();
//     } else {
//       this.showWork(hash);
//     }
//
//     this.updateMenuLinks(hash);
//     this.updateNavigation();
//
//     window.scroll(0, 0);
//   }
//
//   getCurrentHash() {
//     return this.getHashFromURL(window.location.hash);
//   }
//
//   getHashFromURL(hash) {
//     const splitURL = hash.split('#');
//     return splitURL[splitURL.length - 1];
//   }
//
//   showAboutPage() {
//     this.thumbnailsEl.classList.remove('work__thumbnails--active');
//     this.workShowcaseEl.classList.remove('work__showcase--active');
//
//     this.aboutEl.classList.add('about--active');
//   }
//
//   showHomePage() {
//     this.workShowcaseEl.classList.remove('work__showcase--active');
//     this.aboutEl.classList.remove('about--active');
//
//     this.thumbnailsEl.classList.add('work__thumbnails--active');
//   }
//
//   showWork(name) {
//     this.aboutEl.classList.remove('about--active');
//     this.thumbnailsEl.classList.remove('work__thumbnails--active');
//
//     this.workShowcaseEl.classList.add('work__showcase--active');
//
//     this.workContainerEl.forEach(el => {
//       if (el.classList.contains(name)) {
//         el.classList.add('work__container--active');
//       } else {
//         el.classList.remove('work__container--active');
//       }
//     });
//   }
//
//   updateMenuLinks(hash) {
//     if (hash === 'about') {
//       this.desktopAboutLinkEl.classList.add('menu__link--active');
//       this.desktopWorkLinkEl.classList.remove('menu__link--active');
//     } else {
//       this.desktopWorkLinkEl.classList.add('menu__link--active');
//       this.desktopAboutLinkEl.classList.remove('menu__link--active');
//     }
//
//     this.mobileMenuEl.classList.remove('menu__mobile--active');
//   }
//
//   handlePrevClick() {
//     const index = this.getIndexOfCurrentHash();
//     if (index <= 0) return;
//
//     const prevHash = this.linkHrefs[index - 1];
//     window.location.hash = prevHash;
//   }
//
//   getIndexOfCurrentHash() {
//     const currentHash = this.getCurrentHash();
//     return this.linkHrefs.indexOf(currentHash);
//   }
//
//   handleNextClick() {
//     const index = this.getIndexOfCurrentHash();
//     if (index >= this.linkHrefs.length - 1) return;
//
//     const nextHash = this.linkHrefs[index + 1];
//     window.location.hash = nextHash;
//   }
//
//   updateNavigation() {
//     this.prevNavEl.classList.remove('work__navigation--inactive');
//     this.nextNavEl.classList.remove('work__navigation--inactive');
//
//     const index = this.getIndexOfCurrentHash();
//     if (index <= 0) {
//       this.prevNavEl.classList.add('work__navigation--inactive');
//     } else if (index >= this.linkHrefs.length - 1) {
//       this.nextNavEl.classList.add('work__navigation--inactive');
//     }
//   }
// }
//
// new Router();
