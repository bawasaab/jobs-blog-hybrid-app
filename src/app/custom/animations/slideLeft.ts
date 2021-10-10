import { animate, style, transition, trigger } from '@angular/animations';

export let slideLeft = trigger('slideLeft', [
    transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateX(150%)'
        }),
        animate(
            // '450ms 400ms ease-out',
            '450ms 400ms ease-out',
            style({
                transform: 'translateX(0%)',
                opacity: 1
            })
        )
    ]),
]);