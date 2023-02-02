import { Module } from '@nestjs/common';
import { Database } from './DB/db.module';
import { UserController } from './users/user.controller';
import { UserModule } from './users/user.module';
import { UserService } from './users/user.service';

@Module({
  imports: [Database, UserModule]
})
export class AppModule {}
