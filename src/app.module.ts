import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsermoduleModule } from './usermodule/usermodule.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';


@Module({
  imports: [UsermoduleModule],
  controllers: [UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
