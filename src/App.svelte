<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import Counter from './lib/Counter.svelte';
  import { SpatialNavigation, focusableArea, focusableItem } from 'svelte-spatial-navigation';
  import SpatialExample from './lib/SpatialExample.svelte';

  export let test = {
    key: 'value'
  };
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="tizen.png" class="logo" alt="Tizen Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Tizen + Vite + Svelte</h1>

  <h2>{test?.key === 'vai' ?? 'teste'}</h2>

  <SpatialNavigation>
    <SpatialExample />
  </SpatialNavigation>

  <div class="card" use:focusableArea>
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer"
      >SvelteKit</a
    >, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
</main>

<style global>
  main,
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
