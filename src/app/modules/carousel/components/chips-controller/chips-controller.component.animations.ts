import { animate, state, style, transition, trigger } from "@angular/animations"

const chipsAnimation = 
trigger('chipAnimation', [
    state('selected', style({ filter: 'brightness(100%)' })),
    state('no-selected', style({ filter: 'brightness(80%)' })),
    transition('selected <=> no-selected', animate(200))
])

export const animations = [chipsAnimation]