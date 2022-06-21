import { animate, state, style, transition, trigger } from "@angular/animations";

const move = 
trigger('move', [
    state(
        '*', 
        style({ transform: 'translateX({{ to }}%)' }),
        { params: { to: 0, from: 0 } }
        ),
    transition('*=>*', [ style({ transform: 'translateX({{ from }}%)' }), animate('400ms') ])
])

export const animations = [move]