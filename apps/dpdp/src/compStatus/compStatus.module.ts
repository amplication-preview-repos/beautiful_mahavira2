import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CompStatusModuleBase } from "./base/compStatus.module.base";
import { CompStatusService } from "./compStatus.service";
import { CompStatusController } from "./compStatus.controller";
import { CompStatusResolver } from "./compStatus.resolver";

@Module({
  imports: [CompStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [CompStatusController],
  providers: [CompStatusService, CompStatusResolver],
  exports: [CompStatusService],
})
export class CompStatusModule {}
