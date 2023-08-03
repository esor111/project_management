import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTeamDto {
   @ApiProperty({ description: 'The name of the team', example: 'Development Team' })
   @IsNotEmpty()
   name: string;
 
   @ApiProperty({ description: 'The description of the team', example: 'A team responsible for software development' })
   @IsNotEmpty()
   description: string;
}
