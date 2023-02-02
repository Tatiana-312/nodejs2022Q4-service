import { Module } from '@nestjs/common';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';

@Module({
  imports: [UserModule]
})
export class AppModule {}
