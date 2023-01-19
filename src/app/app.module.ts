import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { GlobClickDirective } from './glob-click.directive';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookCardComponent } from './book-card/book-card.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OnlineStatusModule } from 'ngx-online-status';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    GlobClickDirective,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    RegisterComponent,
    AllBooksComponent,
    BookCardComponent,
    CompletedBooksComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    OnlineStatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
