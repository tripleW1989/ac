import { ApiProperty } from "@nestjs/swagger";

export class ControllerDto {
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: ['开', '关', '设置温度'] })
  type: string;
  @ApiProperty()
  addr: number;
  @ApiProperty({ description: '用于设置温度,调高,调低温度' })
  value: number;
}
export class ContollerResponse {
  @ApiProperty()
  result: string;
}

export class DevicesResponse {
  @ApiProperty()
  devices: object;

}