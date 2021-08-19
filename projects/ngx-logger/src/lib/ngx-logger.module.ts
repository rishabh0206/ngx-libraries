import { NgModule } from '@angular/core';
import { NgxLoggerService } from './ngx-logger.service';
import { NgxLoggerComponent } from './ngx-logger.component';

@NgModule({
  declarations: [
    NgxLoggerComponent
  ],
  imports: [
  ],
  exports: [
    NgxLoggerComponent
  ]
})
export class NgxLoggerModule {
  public static forRoot(environment: any): NgxLoggerModule {

    return {
      ngModule: NgxLoggerModule,
      providers: [
        NgxLoggerService,
        {
          provide: 'env', // you can also use InjectionToken
          useValue: environment
        }
      ]
    };
  }
}
