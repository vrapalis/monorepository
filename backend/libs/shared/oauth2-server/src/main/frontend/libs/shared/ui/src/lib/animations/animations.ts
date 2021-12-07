import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LoginPage <=> RegistrationPage', [
      style({position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '-100%',
          left: 0,
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        style({})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('250ms ease-in', style({ top: '-100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('250ms ease-in', style({ top: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild())
    ]),

    transition('* <=> LoginPage', [
      style({position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '-100%',
          left: 0,
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        style({})
      ]),
      group([
        query(':enter', [
          animate('250ms ease-in', style({ top: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild())
    ]),
  ]);