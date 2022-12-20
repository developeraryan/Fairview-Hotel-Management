import { Component } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-domain-sidebar',
  templateUrl: './domain-sidebar.component.html',
  styleUrls: ['./domain-sidebar.component.scss']
})
export class DomainSidebarComponent {
  status: any;
  constructor (public router: Router) {

  }
  domainlist = [
    {
        name: 'Domain Details',
        route: 'domaindetails'
    },
    {
      name: 'User Management',
      route: 'usermanagement'
    }
  ];
    ngOnInit() {
      this.router.navigate(["domainsetting/domaindetails"])
    }
    route() {
      RouterLinkActive
    }
}
