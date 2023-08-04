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


export class TeammemberDto{
   @ApiProperty()
   public userId: number
}

export class TeamMemberDto{
   @ApiProperty()
   public teamId: number

   @ApiProperty()
   public businessId: number


   @ApiProperty({type:[TeammemberDto]})
   public member: TeammemberDto[]

}

export class CreateBusinessTeamDto{
   @ApiProperty({type:[TeamMemberDto]})
   public businessteam:TeamMemberDto[]
}


// export class CreateBusinessTeamDto {
//    @ApiProperty()
//    public businessId: number;
 
//    @ApiProperty()
//    public team: string;
//  }
