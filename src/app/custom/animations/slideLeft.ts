import { animate, style, transition, trigger } from '@angular/animations';

export let slideLeft = trigger('slideLeft', [
    transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateX(150%)'
        }),
        animate(
            // '450ms 400ms ease-out',
            '300ms 250ms ease-out',
            style({
                transform: 'translateX(0%)',
                opacity: 1
            })
        )
    ]),
]);