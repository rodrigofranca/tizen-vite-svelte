<script lang="ts">
  import Button from './Button.svelte';
  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<Button on:click={increment}>
  count is {count}
</Button>
