import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ReversestrPipe } from './pipes/reversestr.pipe';
import {FormsModule} from "@angular/forms";
import {UsersService} from "./services/users.service";
import {HttpClientModule} from "@angular/common/http";
import {CommentiService} from "./services/commenti.service";
import { CommentiComponent } from './components/commenti/commenti.component';
import { PetComponent } from './components/pet/pet.component';
import {PetService} from "./services/pet.service";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReversestrPipe,
    CommentiComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //installato di default ma non importato
    HttpClientModule //installato di default ma non importato
  ],
  providers: [
    UsersService,
    CommentiService,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }















