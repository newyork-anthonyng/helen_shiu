class Router {
  constructor() {
    this.workContainerEl = Array.prototype.slice.apply(document.querySelectorAll('.work__container'));

    this.addEventListeners = this.addEventListeners.bind(this);
    this.handleHashChange = this.handleHashChange.bind(this);
    this.getHashFromURL = this.getHashFromURL.bind(this);
    this.showWork = this.showWork.bind(this);
    this.hideAllWork = this.hideAllWork.bind(this);

    this.addEventListeners();
    this.handleHashChange();
  }

  addEventListeners() {
    window.addEventListener('hashchange', this.handleHashChange);
  }

  handleHashChange(e) {
    const hash = this.getHashFromURL(window.location.hash);

    if (!hash) {
      this.hideAllWork();
    } else {
      this.showWork(hash);
    }
  }

  getHashFromURL(hash) {
    const splitURL = hash.split('#');
    return splitURL[splitURL.length - 1];
  }

  showWork(name) {
    this.workContainerEl.forEach(el => {
      if (el.classList.contains(name)) {
        el.classList.add('work__container--active');
      } else {
        el.classList.remove('work__container--active');
      }
    });
  }

  hideAllWork() {
    this.workContainerEl.forEach(el => {
      el.classList.remove('work__container--active');
    });
  }
}

new Router();
