import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ example: 'tanka sadak', default: 'Default Project' })
  @IsString()
  projectName: string;

  @ApiProperty({ example: 'Description of the project', default: 'Default Description' })
  @IsString()
  projectDescription: string;

  @ApiProperty({ example: '2023-08-01', default: new Date().toISOString().split('T')[0] })
  @IsDate()
  startDate: Date;

  @ApiProperty({ example: '2023-08-10', default: new Date().toISOString().split('T')[0] })
  @IsDate()
  endDate: Date;
}

// export class CreateProjectDto {}