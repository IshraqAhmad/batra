import { Test, TestingModule } from '@nestjs/testing';
import { CompanySetupController } from './company-setup.controller';

describe('CompanySetup Controller', () => {
  let controller: CompanySetupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanySetupController],
    }).compile();

    controller = module.get<CompanySetupController>(CompanySetupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
