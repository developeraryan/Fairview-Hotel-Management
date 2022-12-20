import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DomainSettingComponent } from './modules/domain-setting/domain-setting.component';
import { SmartflowComponent } from './modules/smartflow/smartflow.component';
import { DomainDetailsComponent } from './modules/domain-setting/domain-details/domain-details.component';
import { UserMgmtComponent } from './modules/domain-setting/user-mgmt/user-mgmt.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'domainsetting',
    component: DomainSettingComponent,
    children: [{
      path: 'domaindetails',
      component: DomainDetailsComponent
    },
    {
      path: 'usermanagement',
      component: UserMgmtComponent
    },
  ]
  },
  {
    path: 'smartflow',
    component: SmartflowComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
