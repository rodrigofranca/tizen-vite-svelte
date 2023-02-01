<script lang="ts">
  import { focusableItem } from 'svelte-spatial-navigation';
</script>

<button on:click use:focusableItem><slot /></button>

<style>
  button {
    transition: all 200ms ease;

    --bgColor: #1a1a1a;
    --textColor: white;

    background-color: var(--bgColor);
    color: var(--textColor);
    border: 4px solid transparent;

    margin: 16px;
    font-size: 32px;
    border-radius: 16px;
    font-weight: bold;
    /* width: 128px; */
    /* height: 128px; */
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 24px 38px;
    white-space: nowrap;
  }
  button:focus {
    --bgColor: #646cff;
    --textColor: white;
    /* background-color: white;
		color: blueviolet;
		border: 4px solid blueviolet */
  }
</style>
