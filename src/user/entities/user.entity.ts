import { BusinessTeamMember } from 'src/business/entities/business-team-member.entity';
import { BusinessUser } from 'src/business/entities/business-user.entity';
import { GeneralInformation } from 'src/domain/general.entity';
import { UserRole } from 'src/role/entities/user-role.entity';
import { TeamMember } from 'src/team/entities/team-member.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends GeneralInformation {
  @Column('text')
  public password: string;

  @OneToMany(() => UserRole, (userrole) => userrole.user)
  public userrole: UserRole;

  @OneToMany(() => BusinessUser, (businessuser) => businessuser.business)
  public businessuser: BusinessUser;

  @OneToMany(()=>BusinessTeamMember, businessteammeber=>businessteammeber.user)
  public businessteammember: BusinessTeamMember

  @OneToMany(() => TeamMember, teammember=> teammember.user)
  teammember: TeamMember;

}