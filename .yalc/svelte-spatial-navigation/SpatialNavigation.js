import * as JsSpatialNavigation from './core/js_spatial_navigation';
// let navigation;
const TAG = '[NAVIGATION]';
// export const spatialNavigationSingleton = async () => {
//   const spatialNavigation = (await import('js-spatial-navigation')).default
//   spatialNavigation.init()
// }
// let spatialNavigation:any
// export async function spatialNavigationSingleton(){
//   console.log(spatialNavigation);
//   if(!spatialNavigation){
//     // spatialNavigation = (await import('js-spatial-navigation')).default
//     spatialNavigation.init()
//     console.log('create spatial navigation');
//   }
//   return spatialNavigation
// }
// const GlobalConfig = {
//   selector: '', // can be a valid <extSelector> except "@" syntax.
//   straightOnly: false,
//   straightOverlapThreshold: 0.5,
//   rememberSource: false,
//   disabled: false,
//   defaultElement: '', // <extSelector> except "@" syntax.
//   enterTo: '', // '', 'last-focused', 'default-element'
//   leaveFor: null, // {left: <extSelector>, right: <extSelector>,
//   //  up: <extSelector>, down: <extSelector>}
//   restrict: 'self-first', // 'self-first', 'self-only', 'none'
//   tabIndexIgnoreList:
//     'a, input, select, textarea, button, iframe, [contentEditable=true]',
//   navigableFilter: null
// };
class spatialNavigationSingleton {
    navigation;
    constructor() {
        console.log(TAG, 'init');
        this.navigation = JsSpatialNavigation;
        // document.body.addEventListener('keydown', this.keydownHandler);
        this.navigation.init();
        // navigation.add({
        //   id: 'main-menu',
        //   selector: '.main-menu .main-button',
        //   enterTo: 'default-element',
        //   defaultElement: '.main-menu .main-button:first-child',
        //   navigableFilter: function (elem) {
        //     return elem.className.indexOf('disable-spatial') < 0;
        //   }
        // });
        // navigation.makeFocusable();
        // navigation.focus();
        return this.navigation;
    }
}
export const SpatialNavigation = new spatialNavigationSingleton();
