import { animate, state, style, transition, trigger } from "@angular/animations";

const move = 
trigger('move', [
    state('position', 
        style({ 'transform': 'translateX({{pos}}%)'}),
        {params: { pos: 0 }}
    ),
    transition('*=>*', animate('2s'))
])

export const animations = [move]