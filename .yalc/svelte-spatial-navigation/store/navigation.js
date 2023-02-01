import { writable } from 'svelte/store';
export const horizontalIndex = writable(-1);
export const verticalIndex = writable(-1);
export const position = writable({});
export const navigationMatrix = writable([]);
