import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { UserRole } from './role/entities/user-role.entity';
import { Role } from './role/entities/role.entity';
import { Permission } from './permission/entities/permission.entity';
import { BusinessModule } from './business/business.module';
import { BusinessEntity } from './business/entities/business.entity';
import { BusinessUser } from './business/entities/business-user.entity';
import { BusinessRole } from './business/entities/business-role.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RolePermission } from './permission/entities/role.permission.entity';
import { ProjectModule } from './project/project.module';
import { BusinessTeam } from './team/entities/business-team.entity';
import { Team } from './team/entities/team.entity';
import { BusinessTeamMember } from './business/entities/business-team-member.entity';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'ishworisbillionire',
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234', 
      database: 'project_management', 
      entities: [User,  UserRole, Role, Permission, BusinessEntity, BusinessUser, BusinessRole, RolePermission, BusinessRole, BusinessTeam, Team, BusinessTeamMember],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    BusinessModule,
    ProjectModule,
    TeamModule
  ], 

  
})
export class AppModule {}