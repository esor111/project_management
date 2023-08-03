import { ApiProperty } from "@nestjs/swagger";

export class CreateBusinessTeamDto {
  @ApiProperty()
  public businessId: number;

  @ApiProperty()
  public team: string;
}
