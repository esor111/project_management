import { BusinessTeamMember } from 'src/business/entities/business-team-member.entity';
import { BusinessUser } from 'src/business/entities/business-user.entity';
import { GeneralInformation } from 'src/domain/general.entity';
import { UserRole } from 'src/role/entities/user-role.entity';
export declare class User extends GeneralInformation {
    password: string;
    userrole: UserRole;
    businessuser: BusinessUser;
    businessteammember: BusinessTeamMember;
}
