import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular21May';
  pricingData = [
    {
      type : "FREE",
      price : 0,
      duration: "month",
      details:[
        {
          title : "Single User",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "5GB Storage",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Public Projects",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Community Access",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Private Projects",
          isAvailable : false,
          boldLetter : false
        },
        {
          title : "Dedicated Phone Support",
          isAvailable : false,
          boldLetter : false
        },
        {
          title : "Free SubDomain",
          isAvailable : false,
          boldLetter : false
        },
        {
          title : "Monthly Status Reports",
          isAvailable : false,
          boldLetter : false
        }
      ]
    },
    {
      type : "PLUS",
      price : 9,
      duration: "month",
      details:[
        {
          title : "5 User",
          isAvailable : true,
          boldLetter : true
        },
        {
          title : "50GB Storage",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Public Projects",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Community Access",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Private Projects",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Dedicated Phone Support",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Free SubDomain",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Monthly Status Reports",
          isAvailable : false,
          boldLetter : false
        }
      ]
    },
    {
      type : "PRO",
      price : 49,
      duration: "month",
      details:[
        {
          title : "Unlimitted Users",
          isAvailable : true,
          boldLetter : true
        },
        {
          title : "150GB Storage",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Public Projects",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Community Access",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Private Projects",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Dedicated Phone Support",
          isAvailable : true,
          boldLetter : false
        },
        {
          title : "Unlimitted Free SubDomain",
          isAvailable : true,
          boldLetter : true
        },
        {
          title : "Monthly Status Reports",
          isAvailable : true,
          boldLetter : false
        }
      ]
    }
  ]
  
}