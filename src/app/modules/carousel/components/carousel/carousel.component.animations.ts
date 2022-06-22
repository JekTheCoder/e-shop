import { animate, state, style, transition, trigger } from "@angular/animations"

const buttonShow = 
trigger('buttonShow', [
    state('in', style({ opacity: 1 })),
    state('out', style({ opacity: 0 })),
    transition('in <=> out', animate('200ms'))
])

export const animations = [buttonShow]