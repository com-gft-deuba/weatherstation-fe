import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'

import { AppComponent } from './app.component';
import { DeviceComponent } from './device/device.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfigService } from './services/config.service';

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    },
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
