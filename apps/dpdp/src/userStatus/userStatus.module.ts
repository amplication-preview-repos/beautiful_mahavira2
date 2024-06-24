import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserStatusModuleBase } from "./base/userStatus.module.base";
import { UserStatusService } from "./userStatus.service";
import { UserStatusController } from "./userStatus.controller";
import { UserStatusResolver } from "./userStatus.resolver";

@Module({
  imports: [UserStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserStatusController],
  providers: [UserStatusService, UserStatusResolver],
  exports: [UserStatusService],
})
export class UserStatusModule {}
