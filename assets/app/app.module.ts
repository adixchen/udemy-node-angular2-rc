///<reference path="../../typings.d.ts"/>
import { NgModule }       from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageService} from "./messages/message.service";


//bootstrap(AppComponent);

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        MessageService,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}