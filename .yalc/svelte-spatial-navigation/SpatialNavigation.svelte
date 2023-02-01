<script context="module">const contextKey = {};
export const useSpatialNavigationContext = () => getContext(contextKey);
</script>

<script>import { getContext, onMount, setContext } from "svelte";
import JsSpatialNavigation from "./core/js_spatial_navigation";
let navigation;
setContext(contextKey, {
  verticalIndex: -1,
  horizontalIndex: -1
});
onMount(async () => {
  navigation = JsSpatialNavigation;
  navigation.init();
  navigation.add({
    selector: ".focusable-area .focusable-item",
    navigableFilter: function(elem) {
      return elem.className.indexOf("focusable-disabled") < 0;
    }
  });
  navigation.makeFocusable();
  navigation.focus();
});
</script>

{#if navigation}
	<slot />
{/if}
