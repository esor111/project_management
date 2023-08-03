import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("teams")
@Controller('team')
export class TeamController {

  constructor(private readonly teamService: TeamService,
    ) {}

    @Post()
    async createTeam(@Body() teamDto: CreateTeamDto): Promise<Team> {
      return this.teamService.createTeam(teamDto);
    }

    @Get()
    async getAllTeams(): Promise<Team[]> {
      return this.teamService.getAllTeams();
    }


    @Post("/addteam/:businessId")
    async addBusinessTeam(@Body() teamDto: CreateTeamDto): Promise<Team> {
      return this.teamService.addBusinessTeam(teamDto);
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
