export function register<T>(tagName, Component: any, props: string[] = []) {
  class SvelteElement extends HTMLElement {
    target: ShadowRoot;
    data: {};
    instance: any;
    constructor() {
      super();

      this.target = this.attachShadow({ mode: 'open' });
      this.data = {};
    }

    connectedCallback() {
      props.forEach((prop) => {
        const value = this[prop];
        if (value !== undefined) {
          this.data[prop] = this[prop];
        }
      });

      this.instance = new Component({
        target: this.target,
        props: this.data
      });

      props.forEach((prop) => {
        this.instance.$on(prop, (value) => {
          this.setAttribute(prop, value?.detail || value);
        });
      });
    }

    detachedCallback() {
      this.instance.$destroy();
      this.instance = null;
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      let value = isNaN(newValue) ? newValue : +newValue;
      try {
        value = JSON.parse(value);
      } catch (error) {}
      this.data[attr] = value;
      if (this.instance) this.instance.$set({ [attr]: value });
    }
  }

  Object.defineProperty(SvelteElement, 'observedAttributes', {
    get() {
      return props;
    }
  });

  props.forEach((prop) => {
    Object.defineProperty(SvelteElement.prototype, prop, {
      get() {
        return this.instance ? this.instance[prop] : this.data[prop];
      },
      set(value) {
        // if (this.instance) console.log('set', this.instance);
        this.data[prop] = value;
        if (this.instance) {
          // this.instance[prop] = value;
          this.instance.$$set({ [prop]: value });
        }
      }
    });
  });

  customElements.define(tagName, SvelteElement);
  return SvelteElement;
}
