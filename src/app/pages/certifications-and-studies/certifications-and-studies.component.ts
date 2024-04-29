import { Component, OnInit } from '@angular/core';

interface Certification {
  title: string;
  issuer: string;
  image: string;
  description: string;
  dateRange: string;
  url: string;

}

@Component({
  selector: 'app-certifications-and-studies',
  templateUrl: './certifications-and-studies.component.html',
  styleUrls: ['./certifications-and-studies.component.scss']
})
export class CertificationsAndStudiesComponent implements OnInit {
  certifications: Certification[] = [
    {
      title: "Bachelor's Degree in Applied Mathematics",
      issuer: 'Instituto Tecnologico Autonomo de Mexico',
      image: 'assets/images/logo-ITAM.png',
      description: 'A comprehensive program designed to equip students with a profound understanding of mathematical principles and how they can be applied to solve real-world problems. This degree program emphasizes not only the theoretical aspects of mathematics but also its practical applications in various fields such as economics, engineering, computer science, and more.',
      dateRange: 'Aug 2017 - Jun 2022',
      url: 'https://www.itam.mx/'

    },
    {
          title: 'Full Stack Development Program',
          issuer: 'TR Network (Puebla, Mexico)',
          image: 'assets/images/tr.png',
          description: '100 hours of training in tools for the development of Business applications and pre-web services with JavaEE. 50 hours of training focused on application development in Angular 8',
          dateRange: 'Jul 2023 - Aug 2023',
          url: 'https://www.trnetwork.com.mx/'

        },
    // ... more certifications ...
  ];

  ngOnInit(): void {
  }

  goToSite(url: string): void {
      window.open(url, '_blank');
    }
}
