import { Test, TestingModule } from '@nestjs/testing';
import { NotificatonController } from './notificaton.controller';

describe('NotificatonController', () => {
  let controller: NotificatonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificatonController],
    }).compile();

    controller = module.get<NotificatonController>(NotificatonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
