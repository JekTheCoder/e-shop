import { animate, state, style, transition, trigger } from "@angular/animations";

const move = 
trigger('move', [
    state('*', style({ transform: 'translateX({{ to }}%)' }), { params: { passingBy: 100, to: 100, from: 100 } }),
    transition('void=>*', animate(0)),
    transition(':increment, :decrement', [
        style({ transform: 'translateX({{ from }}%)' }),
        animate('1s ease-in', style({ transform: 'translateX({{ passingBy }}%)' }))
    ]),
])



export const animations = [move]