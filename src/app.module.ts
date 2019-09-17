import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CompanySetupModule } from './company-setup/company-setup.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        TasksModule,
        AuthModule,
        CompanySetupModule
    ],
})
export class AppModule {}
