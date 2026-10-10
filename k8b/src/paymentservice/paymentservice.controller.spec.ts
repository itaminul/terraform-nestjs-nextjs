import { Test, TestingModule } from '@nestjs/testing';
import { PaymentserviceController } from './paymentservice.controller';

describe('PaymentserviceController', () => {
  let controller: PaymentserviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentserviceController],
    }).compile();

    controller = module.get<PaymentserviceController>(PaymentserviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
