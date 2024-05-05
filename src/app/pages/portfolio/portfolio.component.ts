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
    "companyLogo": "assets/images/logomiru.png", // Path to MIRU's logo if available
    "companyName": "MIRU",
    "role": "Full Stack Developer",
    "startDate": "February 2024", // Start date of your tenure at MIRU
    "endDate": "Present", // or "Month Year" if the project/role has concluded
    "responsibilities": [
      "https://ocr-miru-dev.uc.r.appspot.com/",
      "Developed a comprehensive web platform aimed at facilitating the real estate buying and selling process, enhancing user experience.",
      "Implemented a dynamic listing system that allows users to filter, search, and manage property listings efficiently, increasing user engagement and satisfaction.",
      "Designed back end models, services, controllers, repositories and mapped the objects to Postgres tables by using Hibernate and JPA.",
      "Collaborated closely with a cross-functional team to deliver the main functionalities of the site. Led the weekly team meeting for the dev team.",
      "Utilized technologies such as Angular for the frontend to create interactive user interfaces and Spring for backend services.",
      "Led the deployment and continuous integration of the project using Docker and Google Cloud, significantly reducing downtime and improving the deployment process."
    ]
  },

    {
      companyLogo: 'assets/images/softtek.png',
      companyName: 'Softtek',
      role: 'Software Developer',
      startDate: 'August 2023',
      endDate: 'February 2024',
      responsibilities: [
        'Developed a secure front-end form for authenticated users from Banamex to update their passwords, featuring fields for the old password, new password, and password confirmation.',
        'Implemented stringent password validation rules to ensure compliance with security standards, enhancing system integrity.',
        'Engineered an Autochecker feature to verify the identity of users attempting to make updates, thereby bolstering security measures.',
        'Designed user interfaces and managed views to optimize user experience and facilitate seamless data updates.',
        'Created detailed flowcharts for User Stories, aiding in the visualization and planning of development tasks.',
        'Utilized a diverse technology stack, including Java, C#, Struts, MVC, DAO, HTML5, CSS3, JavaScript, XML, WebLogic, jQuery.'
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
            'Led the development of a comprehensive sales system encompassing product catalogs, customer, and supplier modules.',
            'Engineered a home delivery module to expand the service offerings and enhance customer convenience.',
            'Maintained and updated the customer and supplier catalogs, ensuring accuracy and reliability.',
            'Managed database operations, including creating and executing stored queries and procedures in SQL Server.',
            'Conducted functionality testing and debugging to ensure robust application performance.',
            'Utilized technologies such as Java, JSF, MVC, DAO, Facade Front Controller, HTML5, CSS3, JavaScript, XML, WebServices, Oracle 11g.'
            // ... more responsibilities
          ],
        },
//      {
//            companyLogo: 'assets/images/management-solutions.svg',
//            companyName: 'Management Solutions',
//            role: 'Java Developer',
//            startDate: 'July 2021',
//            endDate: 'November 2022',
//            responsibilities: [
//              'Developed a sophisticated system for managing customer records for Santander, optimizing operational efficiency.',
//              'Created a specialized module to handle incidents across various company departments, enhancing response capabilities.',
//              'Improved the front-end functionality of the warehouse management system, increasing user engagement.',
//              'Performed preventive and corrective maintenance on production line system modules, ensuring continuous operation.',
//              'Implemented comprehensive testing and debugging procedures to maintain system integrity and functionality.',
//              'Updated the corporate website, enhancing user experience and information accessibility.',
//              'Integrated technologies including Java, Spring, MVC, DAO, Front Controller, HTML5, CSS3, JavaScript, XML, WebServices, Oracle 11g, Ajax.'
//              // ... more responsibilities
//            ],
//          },

    // ... more experiences
  ];

  ngOnInit(): void {}

  isUrl(text: string): boolean {
      try {
        new URL(text);
        return true;
      } catch {
        return false;
      }
    }
}
