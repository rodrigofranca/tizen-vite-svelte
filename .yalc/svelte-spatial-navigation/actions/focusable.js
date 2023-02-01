// import { SpatialNavigation } from './../components/SpatialNavigation';
import { horizontalIndex as horizontalIndexStore, verticalIndex as verticalIndexStore, position as positionStore } from '../store/navigation';
import { onMount } from 'svelte';
// TODO: BLog
/**
 * 1. Adiciona as classes relacionadas ao spatial navigation
 * 2. Pega o seu indice e o indice do container
 * 3. Pega as suas posicoes na tela
 * 4. Guarda os valores em umn store
 * 5. Dispara evento `focused` quando recebe o foco do spatial navigation
 */
export function focusableArea(node) {
    node.className = `${node.className} focusable-area`;
    // navigation.add({
    //   selector: node,
    //   navigableFilter: function (elem) {
    //     return elem.className.indexOf('focusable-disabled') < 0;
    //   }
    // });
    // navigation.makeFocusable();
    // navigation.focus();
    const createValues = (node) => (e) => {
        const htmlElement = node;
        const position = {
            top: htmlElement.offsetTop,
            left: htmlElement.offsetLeft,
            height: htmlElement.offsetHeight,
            width: htmlElement.offsetWidth
        };
        const verticalIndex = htmlElement.parentElement
            ? [...Array.from(htmlElement.parentElement.children)].indexOf(htmlElement)
            : 0;
        const horizontalIndex = [...e.target.parentElement.children].indexOf(e.target);
        return {
            verticalIndex,
            horizontalIndex,
            position
        };
    };
    const getValues = createValues(node);
    const resetIndex = () => horizontalIndexStore.set(-1);
    const dispatchEvent = (detail) => node.dispatchEvent(new CustomEvent('focused', { detail }));
    const dispatchOnfocus = (detail) => node.dispatchEvent(new CustomEvent('unfocused', { detail }));
    const handleFocus = (e) => {
        e.stopPropagation();
        const { verticalIndex, horizontalIndex, position } = getValues(e);
        horizontalIndexStore.set(horizontalIndex);
        verticalIndexStore.set(verticalIndex);
        positionStore.set(position);
        dispatchEvent({ verticalIndex, horizontalIndex, position });
    };
    const handleUnfocus = (e) => {
        e.stopPropagation();
        resetIndex();
        const { verticalIndex, horizontalIndex, position } = getValues(e);
        // dispatchEvent({verticalIndex, horizontalIndex, position})
        dispatchOnfocus({ verticalIndex, horizontalIndex: -1, position });
    };
    node.addEventListener('sn:focused', handleFocus);
    node.addEventListener('sn:unfocused', handleUnfocus);
    onMount(() => {
        dispatchEvent({});
    });
    return {
        destroy() {
            node.removeEventListener('sn:focused', handleFocus);
            node.removeEventListener('sn:unfocused', handleUnfocus);
        }
    };
}
export const focusableItem = (element, params) => {
    element.className = `${element.className} focusable-item`;
    console.log(element.tagName);
    if (element.tagName !== 'BUTTON')
        element.tabIndex = -1;
    // return {
    // destroy() {}
    // };
};
export const focusableDisabled = (element, params) => {
    element.className = `${element.className} focusable-disabled`;
    // return {
    // destroy() {}
    // };
};
