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
exports.BusinessTeamMember = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../domain/base.entity");
const business_team_entity_1 = require("../../team/entities/business-team.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let BusinessTeamMember = exports.BusinessTeamMember = class BusinessTeamMember extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_team_entity_1.BusinessTeam, businessteam => businessteam.businessteammember),
    __metadata("design:type", business_team_entity_1.BusinessTeam)
], BusinessTeamMember.prototype, "businessteam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.businessteammember),
    __metadata("design:type", user_entity_1.User)
], BusinessTeamMember.prototype, "user", void 0);
exports.BusinessTeamMember = BusinessTeamMember = __decorate([
    (0, typeorm_1.Entity)("business_team_member")
], BusinessTeamMember);
//# sourceMappingURL=business-team-member.entity.js.map