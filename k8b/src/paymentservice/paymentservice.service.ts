import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class PaymentserviceService {
    getpayment(): string {
        return 'Hello welcome to payment service!';
    }
}
