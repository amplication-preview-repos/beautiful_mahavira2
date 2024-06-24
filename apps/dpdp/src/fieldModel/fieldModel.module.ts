import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FieldModelModuleBase } from "./base/fieldModel.module.base";
import { FieldModelService } from "./fieldModel.service";
import { FieldModelController } from "./fieldModel.controller";
import { FieldModelResolver } from "./fieldModel.resolver";

@Module({
  imports: [FieldModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [FieldModelController],
  providers: [FieldModelService, FieldModelResolver],
  exports: [FieldModelService],
})
export class FieldModelModule {}
