import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth/guards/auth-guard-login.guard';
import { MessageService } from 'primeng/api';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp(environment.firebaseConfig);
export const db = getFirestore(app);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
