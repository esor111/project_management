"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const user_entity_1 = require("./user/entities/user.entity");
const role_module_1 = require("./role/role.module");
const permission_module_1 = require("./permission/permission.module");
const user_role_entity_1 = require("./role/entities/user-role.entity");
const role_entity_1 = require("./role/entities/role.entity");
const permission_entity_1 = require("./permission/entities/permission.entity");
const business_module_1 = require("./business/business.module");
const business_entity_1 = require("./business/entities/business.entity");
const business_user_entity_1 = require("./business/entities/business-user.entity");
const business_role_entity_1 = require("./business/entities/business-role.entity");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const role_permission_entity_1 = require("./permission/entities/role.permission.entity");
const project_module_1 = require("./project/project.module");
const business_team_entity_1 = require("./team/entities/business-team.entity");
const team_entity_1 = require("./team/entities/team.entity");
const business_team_member_entity_1 = require("./business/entities/business-team-member.entity");
const team_module_1 = require("./team/team.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'ishworisbillionire',
                signOptions: { expiresIn: '1d' },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1234',
                database: 'project_management',
                entities: [user_entity_1.User, user_role_entity_1.UserRole, role_entity_1.Role, permission_entity_1.Permission, business_entity_1.BusinessEntity, business_user_entity_1.BusinessUser, business_role_entity_1.BusinessRole, role_permission_entity_1.RolePermission, business_role_entity_1.BusinessRole, business_team_entity_1.BusinessTeam, team_entity_1.Team, business_team_member_entity_1.BusinessTeamMember],
                synchronize: true,
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            permission_module_1.PermissionModule,
            business_module_1.BusinessModule,
            project_module_1.ProjectModule,
            team_module_1.TeamModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map