import { SvelteComponentTyped } from "svelte";
type SpatialNavigationContext = {
    verticalIndex: number;
    horizontalIndex: number;
};
export declare const useSpatialNavigationContext: () => SpatialNavigationContext;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SpatialNavigationProps = typeof __propDef.props;
export type SpatialNavigationEvents = typeof __propDef.events;
export type SpatialNavigationSlots = typeof __propDef.slots;
export default class SpatialNavigation extends SvelteComponentTyped<SpatialNavigationProps, SpatialNavigationEvents, SpatialNavigationSlots> {
}
export {};
