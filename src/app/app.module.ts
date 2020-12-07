import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ContributingComponent } from './contributing/contributing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContributingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighlightModule,
    MaterialModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        xml: () => import('highlight.js/lib/languages/xml')
      }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
