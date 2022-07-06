import { animate, state, style, transition, trigger } from "@angular/animations";

const move = 
trigger('move', [
    state('*', style({ transform: 'translateX({{ to }}%)' }), { params: { from: 100, to: 100 } }),
    transition(':increment, :decrement', [
        style({ transform: 'translateX({{ from }}%)' }),
        animate('1s ease-in', style({ transform: 'translateX({{ to }}%)' }))
    ]),
])



export const animations = [move]