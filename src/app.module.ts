import { Module } from '@nestjs/common';
import { Database } from './DB/db.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [Database, UserModule],
})
export class AppModule {}
