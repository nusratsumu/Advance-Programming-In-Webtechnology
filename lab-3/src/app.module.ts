import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { EntrollmentService } from './entrollment/entrollment.service';
import { NotificationModule } from './notification/notification.module';
import { NotificatonController } from './notificaton/notificaton.controller';

@Module({
  imports: [CourseModule, EnrollmentModule, NotificationModule],
  controllers: [AppController, NotificatonController],
  providers: [AppService, EntrollmentService],
})
export class AppModule {}
