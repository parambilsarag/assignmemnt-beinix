import { TestBed } from '@angular/core/testing';

import { RegistartionserviceService } from './registartionservice.service';

describe('RegistartionserviceService', () => {
  let service: RegistartionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistartionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
