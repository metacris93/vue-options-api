export default {
  instances: new Set(),
  init(el) {
    return new Promise((resolve) => {
      const randomDelay = Math.round(Math.random() * 300 + 100);
      setTimeout(() => {
        const templateEl = document.createElement("template");
        templateEl.innerHTML = `<div class="third-party-libarary-element third-party">
					This div was added by a third party library that doesn't know about Vue.js (with ${randomDelay}ms delay)
					<div class="nesting-container"></div>
				</div>`;
        const newEl = templateEl.content.firstElementChild;
        el.appendChild(newEl);
        this.instances[el] = newEl;
        resolve(newEl);
      }, randomDelay);
    });
  },
  destroy(el) {
    if (this.instances[el]) {
      el.removeChild(this.instances[el]);
      delete this.instances.delete(el);
    }
  },
};
