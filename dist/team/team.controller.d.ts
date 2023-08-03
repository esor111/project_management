import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeam(teamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    addBusinessTeam(teamDto: CreateTeamDto): Promise<Team>;
    findOne(id: string): string;
    update(id: string, updateTeamDto: UpdateTeamDto): string;
    remove(id: string): string;
}
