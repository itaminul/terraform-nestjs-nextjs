import { Module } from '@nestjs/common';
import { PaymentserviceService } from './paymentservice.service';
import { PaymentserviceController } from './paymentservice.controller';

@Module({
  providers: [PaymentserviceService],
  controllers: [PaymentserviceController]
})
export class PaymentserviceModule {}
