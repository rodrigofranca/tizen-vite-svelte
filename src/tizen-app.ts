import App from './App.svelte';
import { register } from './register';

const tagName = 'tizen-svelte-ott';
!customElements.get(tagName) && register(tagName, App);
