import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompStatusServiceBase } from "./base/compStatus.service.base";

@Injectable()
export class CompStatusService extends CompStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
