import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CustomerModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
