import { Test, TestingModule } from '@nestjs/testing';
import { PaymentserviceService } from './paymentservice.service';

describe('PaymentserviceService', () => {
  let service: PaymentserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentserviceService],
    }).compile();

    service = module.get<PaymentserviceService>(PaymentserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
