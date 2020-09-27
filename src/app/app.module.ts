import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductAlertComponent } from './components/products/product-alert/product-alert.component';
import { routing, listAppComponents } from './app.routing';
import { RN } from './app.routes';
import { Constant } from './app.constant';
import { SpyDirective } from './services/directives/spy.directive';
import { FormatNumberPipe } from './services/pipes/format-number.pipe';
import { HighlightDirective } from './services/directives/highlight.directive';
import { OnChangeComponent } from './components/hooks/on-change/on-change.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertComponent,
    ...listAppComponents,
    SpyDirective,
    FormatNumberPipe,
    HighlightDirective,
    OnChangeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [RN, Constant],
  bootstrap: [AppComponent]
})
export class AppModule { }
