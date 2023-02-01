<script lang="ts">
  import { focusableArea, focusableItem } from 'svelte-spatial-navigation';
  import Button from './Button.svelte';
</script>

<div class="controls" use:focusableArea>
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
</div>

<style>
  .controls {
    display: flex;
    justify-content: center;
  }
</style>
