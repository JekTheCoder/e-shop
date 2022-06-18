import { animate, state, style, transition, trigger } from "@angular/animations";

const inputAnimation = trigger('inputAnim', [
    state('opened', style({ width: '*' }) ),
    state('closed', style({ width: '0', padding: '0' }) ),
    transition('* => *', [
      animate('300ms')
    ] )
])

const buttonAnimation = trigger('buttonAnim', [
    state('open', style({ transform: 'rotate(0deg)' }) ),
    state('closed', style({ transform: 'rotate(-360deg)' }) ),
    transition('* => *', animate('300ms') )
])

export { inputAnimation, buttonAnimation }