import { Base } from "src/domain/base.entity";
import { Project } from "./project.entity";
import { Team } from "src/team/entities/team.entity";
export declare class ProjectTeam extends Base {
    project: Project;
    team: Team;
}
