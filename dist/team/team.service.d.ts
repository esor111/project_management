import { CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { Team } from "./entities/team.entity";
import { TeamRepository } from "./team.repository";
export declare class TeamService {
    private readonly teamRepo;
    constructor(teamRepo: TeamRepository);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    addBusinessTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    findOne(id: number): string;
    update(id: number, updateTeamDto: UpdateTeamDto): string;
    remove(id: number): string;
}
