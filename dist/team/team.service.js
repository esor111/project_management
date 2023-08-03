"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const team_entity_1 = require("./entities/team.entity");
const team_repository_1 = require("./team.repository");
let TeamService = exports.TeamService = class TeamService {
    constructor(teamRepo) {
        this.teamRepo = teamRepo;
    }
    async createTeam(createTeamDto) {
        const { name, description } = createTeamDto;
        const team = new team_entity_1.Team();
        team.name = name;
        team.description = description;
        return await this.teamRepo.save(team);
    }
    async getAllTeams() {
        return this.teamRepo.find();
    }
    async addBusinessTeam(createTeamDto) {
        const { name, description } = createTeamDto;
        const team = new team_entity_1.Team();
        team.name = name;
        team.description = description;
        return await this.teamRepo.save(team);
    }
    findOne(id) {
        return `This action returns a #${id} team`;
    }
    update(id, updateTeamDto) {
        return `This action updates a #${id} team`;
    }
    remove(id) {
        return `This action removes a #${id} team`;
    }
};
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [team_repository_1.TeamRepository])
], TeamService);
//# sourceMappingURL=team.service.js.map