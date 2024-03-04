import { TestBed } from '@angular/core/testing';

import { AssetListServiceService } from './asset-list-service.service';

describe('AssetListServiceService', () => {
  let service: AssetListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
