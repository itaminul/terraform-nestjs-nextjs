import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './healthController';
import { TerminusModule } from '@nestjs/terminus';
import { DashboardModule } from './dashboard/dashboard.module';
import { PaymentserviceModule } from './paymentservice/paymentservice.module';

@Module({
  imports: [TerminusModule, DashboardModule, PaymentserviceModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
