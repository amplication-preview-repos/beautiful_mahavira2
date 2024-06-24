import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CompStatusService } from "./compStatus.service";
import { CompStatusControllerBase } from "./base/compStatus.controller.base";

@swagger.ApiTags("compStatuses")
@common.Controller("compStatuses")
export class CompStatusController extends CompStatusControllerBase {
  constructor(
    protected readonly service: CompStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
