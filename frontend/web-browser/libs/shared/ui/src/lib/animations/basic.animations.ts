import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function fadeEnter(animateTime: string): AnimationTriggerMetadata {
  return trigger(
    'fadeEnter',
    [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in')
      ]),

      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ]
  );
}

export function fadeLeave(animateTime: string): AnimationTriggerMetadata {
  return trigger(
    'fadeLeave',
    [
      transition(':leave', [
        animate(animateTime, style({ opacity: 0 }))
      ])
    ]
  );
}

export function moveFromTopEnter(animateTime: string, top: string): AnimationTriggerMetadata {
  return trigger(
    'moveFromTopEnter',
    [
      transition(':enter', [
        animate(animateTime, style({ top }))
      ])
    ]
  );
}

export function moveToLeftLeave(animateTime: string, left: string): AnimationTriggerMetadata {
  return trigger(
    'moveToLeftLeave',
    [
      transition(':leave', [
        animate(animateTime, style({ left }))
      ])
    ]
  );
}

