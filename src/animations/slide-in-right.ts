import { animate, style, transition, trigger } from "@angular/animations";

export let slideInRight = trigger('slideInRight', [
  transition(':enter', [
      style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('600ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0%)', opacity: 1 }),
    animate('600ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 1 }))
])
]);
