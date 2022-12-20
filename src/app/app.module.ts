import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp  } from "@angular/fire/app"
import { environment } from 'src/environments/environment';
// import { AngularFireModule } from '@angular/fire/compat/';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { SmartflowComponent } from './modules/smartflow/smartflow.component';
import { DomainSettingComponent } from './modules/domain-setting/domain-setting.component';
import { DomainDetailsComponent } from './modules/domain-setting/domain-details/domain-details.component';
import { UserMgmtComponent } from './modules/domain-setting/user-mgmt/user-mgmt.component';
import { HeaderComponent } from './shared/header/header.component';
import { DomainSidebarComponent } from './modules/domain-setting/domain-sidebar/domain-sidebar.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SmartflowComponent,
    DomainSettingComponent,
    DomainDetailsComponent,
    UserMgmtComponent,
    HeaderComponent,
    DomainSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
