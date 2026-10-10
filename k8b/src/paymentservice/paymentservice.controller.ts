import { Controller, Get } from '@nestjs/common';
import { PaymentserviceService } from './paymentservice.service';

@Controller('paymentservice')
export class PaymentserviceController {
        constructor(private readonly paymentService: PaymentserviceService) {}    
      @Get()
      getPayment(): string {
        return this.paymentService.getpayment();
      }
}
