export type Position = {
    top: number;
    left: number;
    width: number;
    height: number;
};
export type FocusableDetail = {
    horizontalIndex: number;
    verticalIndex: number;
    position: Position;
};
/**
 * 1. Adiciona as classes relacionadas ao spatial navigation
 * 2. Pega o seu indice e o indice do container
 * 3. Pega as suas posicoes na tela
 * 4. Guarda os valores em umn store
 * 5. Dispara evento `focused` quando recebe o foco do spatial navigation
 */
export declare function focusableArea(node: HTMLElement): {
    destroy(): void;
};
export declare const focusableItem: (element: HTMLElement, params?: any) => void;
export declare const focusableDisabled: (element: HTMLElement, params?: any) => void;
