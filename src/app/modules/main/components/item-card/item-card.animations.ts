import { animate, state, style, transition, trigger } from "@angular/animations";

const cardHover = trigger('card-hover', [
    state('hover', style({ transform: 'scale(1.1)', "box-shadow": "0 0 12px -4px rgba(0,0,0,0.63)" })),
    transition('*<=>hover', animate('100ms'))
])

export const animations = [cardHover];