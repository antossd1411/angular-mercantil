import { TestBed } from '@angular/core/testing';

import { PaymentsService } from './payments.service';
import { HttpClientModule } from '@angular/common/http';

describe('PaymentsService', () => {
  let service: PaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
