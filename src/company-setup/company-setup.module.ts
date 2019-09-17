import { Module } from '@nestjs/common';
import { CompanySetupController } from './company-setup.controller';
import { CompanySetupService } from './company-setup.service';

@Module({
  controllers: [CompanySetupController],
  providers: [CompanySetupService]
})
export class CompanySetupModule {}
