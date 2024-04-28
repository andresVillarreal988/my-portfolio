import { Component, OnInit } from '@angular/core';

interface Experience {
  companyLogo: string; // URL to the company logo image
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  experiences: Experience[] = [
    {
      companyLogo: 'assets/images/softtek.png',
      companyName: 'Softtek',
      role: 'Software Developer',
      startDate: 'August 2023',
      endDate: 'February 2024',
      responsibilities: [
        'Development of a customer data updating system for Banamex',
        'Development of an Autochecker within the system to verify that the user updating the data is a person with authorization by the bank',
        'Creation and management of views for users and front end functionalities',
        'Creating flowcharts for different User Stories',
        'Technologies used: Java, C#, Struts, MVC, DAO, HTML5, CSS3, JavaScript, XML, WebLogic, jQuery. Softtek Courses'
        // ... more responsibilities
      ],
    },
    {
          companyLogo: 'assets/images/frubana.png',
          companyName: 'Frubana',
          role: 'Java Developer',
          startDate: 'Nov 2022',
          endDate: 'Jul 2023',
          responsibilities: [
            'Development of a sales system, where the product catalogs, customer module and suppliers modules were developed',
            'Development of a module for home delivery of products',
            'Maintenance of the customer and supplier catalog',
            'Creating and consuming stored queries and procedures',
            'Application of functionality testing and error correction',
            'Database management and creation in SQL Server',
            'Technologies used: Java, JSF, MVC, DAO, Facade Front Controller, HTML5, CSS3, JavaScript, XML, WebServices, Oracle 11g'
            // ... more responsibilities
          ],
        },
     {
           companyLogo: 'assets/images/management-solutions.svg',
           companyName: 'Management Solutions',
           role: 'Java Developer',
           startDate: 'July 2021',
           endDate: 'November 2022',
           responsibilities: [
             'Development of a system for the control of customer records for the bank Santander',
             'Development of a module for dealing with incidents in the different departments of the company',
             'Improvements were made to the front end of the warehouse system',
             'Preventive and corrective maintenance of the system modules of the production lines',
             'Application of functionality testing and error correction',
             'Updating website',
             'Technologies used: Java, Spring, MVC, DAO, Front Controller, HTML5, CSS3, JavaScript, XML, WebServices, Oracle 11g, Ajax'
             // ... more responsibilities
           ],
         },
     {
           companyLogo: 'assets/images/primeroseguros.png',
           companyName: 'Primero Seguros',
           role: 'Software Developer',
           startDate: 'January 2021',
           endDate: 'June 2021',
           responsibilities: [
             'Development of a web system to generate business plans with a focus on simplicity and help for inexperienced users in the area',
             'Design and creation of the database',
             'Technologies used: Java, MySQL, JavaScript, HTML5, Bootstrap',

             // ... more responsibilities
           ],
         }
    // ... more experiences
  ];

  ngOnInit(): void {}
}
