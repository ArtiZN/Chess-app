import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NotifierModule } from 'angular-notifier';

import { MaterialModule } from './../material/material.module';
import { NavigationComponent } from '@core/components/navigation/navigation.component';
import { HomeComponent } from '@core/components/home/home.component';
import { LoginComponent } from '@core/components/login/login.component';
import { ErrorInterceptor } from '@core/mock-backend/interceptors/error.interceptor';
import { JwtInterceptor } from '@core/mock-backend/interceptors/jwt.interceptor';
import { fakeBackendProvider } from '@core/mock-backend/interceptors/auth.interceptor';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { MessageService } from '@core/services/message/message.service';
import { ChatService } from '@core/services/chat/chat.service';
import { UserService } from '@core/mock-backend/services/user.service';
import { AuthenticationService } from '@core/mock-backend/services/auth.service';
import { WebsocketService } from '@core/services/websocket/websocket.service';
import { notifierConfig } from '@core/constants/notifier.constants';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule.withConfig(notifierConfig),
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent
  ],
  declarations: [
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    NotFoundComponent
  ],
  providers: [
    ChatService,
    MessageService,
    WebsocketService,
    UserService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ]
})
export class CoreModule { }
