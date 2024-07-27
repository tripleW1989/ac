import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcModule } from './ac/ac.module';

@Module({
  imports: [AcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
