import { TestBed } from '@angular/core/testing';
import { NgxLoggerModule } from './ngx-logger.module';

import { NgxLoggerService } from './ngx-logger.service';

describe('NgxLoggerService', () => {
  let service: NgxLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxLoggerModule.forRoot({
          production: false
        })
      ]
    });
    service = TestBed.inject(NgxLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
