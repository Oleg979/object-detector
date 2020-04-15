import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbAlertModule,
  NgbProgressbarModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClassificationService } from './services/classification.service';
import { TranslationPipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [AppComponent, TranslationPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    NgbProgressbarModule,
  ],
  providers: [ClassificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
