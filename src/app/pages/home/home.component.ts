import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // Animation-related initialization
  }
}
