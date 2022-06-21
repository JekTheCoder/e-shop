import { animate, state, style, transition, trigger } from "@angular/animations";

const move = 
trigger('move', [
    state(
        'in',
        style({ transform: 'translateX({{ to }}%)' }),
        { params: { to: 0 } }
    ),
    state(
        'out',
        style({ transform: 'translateX({{ to }}%)' }),
        { params: { to: 100, from: 0 } }
    ),
    transition('in => out', animate('400ms')),
    transition('out => in', [
        style({ transform: 'translateX({{ from }}%)' }),
        animate('400ms')
    ]),
])

export const animations = [move]