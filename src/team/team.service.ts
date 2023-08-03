import { Injectable } from "@nestjs/common";
import { CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { TeamRepository } from "./team.repository";

@Injectable()
export class TeamService {
  constructor(
    private readonly teamRepo: TeamRepository
  ) {}

  async createTeam(createTeamDto: CreateTeamDto) {
    const { name, description } = createTeamDto;
    const team = new Team();
    team.name = name;
    team.description = description;

    return await this.teamRepo.save(team);
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamRepo.find();
  }

  async addBusinessTeam(createTeamDto: CreateTeamDto) {
    const { name, description } = createTeamDto;
    const team = new Team();
    team.name = name;
    team.description = description;

    return await this.teamRepo.save(team);
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
