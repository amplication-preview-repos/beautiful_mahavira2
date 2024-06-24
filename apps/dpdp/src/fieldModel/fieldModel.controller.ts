import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FieldModelService } from "./fieldModel.service";
import { FieldModelControllerBase } from "./base/fieldModel.controller.base";

@swagger.ApiTags("fieldModels")
@common.Controller("fieldModels")
export class FieldModelController extends FieldModelControllerBase {
  constructor(
    protected readonly service: FieldModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
