import { Test, TestingModule } from '@nestjs/testing';
import { CompanySetupService } from './company-setup.service';

describe('CompanySetupService', () => {
  let service: CompanySetupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanySetupService],
    }).compile();

    service = module.get<CompanySetupService>(CompanySetupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
