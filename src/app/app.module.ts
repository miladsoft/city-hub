import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './components/root/root.component';
import { MaterialModule } from './material.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { RootModule} from './components/root/root.module';
import { NotFoundModule } from './components/not-found/not-found.module';
import { WalletModule } from './components/wallet/wallet.module';
import { SettingsModule } from './components/settings/settings.module';
import { LoginModule } from './components/login/login.module';
import { AppServicesModule } from './services/services.module';
import { LogoutModule } from './components/logout/logout.module';
import { AboutModule } from './components/about/about.module';
import { ChangesModule } from './components/changes/changes.module';
import { LicensesModule } from './components/licenses/licenses.module';
import { PrivacyModule } from './components/privacy/privacy.module';
import { AppSharedModule } from './shared/app-shared.module';
import { APP_TITLE } from './services/title.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppServicesModule,
    MaterialModule,
    RootModule,
    DashboardModule,
    WalletModule,
    SettingsModule,
    LoginModule,
    LogoutModule,
    AboutModule,
    AppSharedModule,
    ChangesModule,
    LicensesModule,
    PrivacyModule,
    NotFoundModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: APP_TITLE, useValue: 'City Chain' },
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
