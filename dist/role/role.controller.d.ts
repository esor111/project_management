import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<{
        data: import("./entities/role.entity").Role;
        message: string;
    }>;
    findAll(): Promise<import("./entities/role.entity").Role[]>;
    findOne(id: string): Promise<import("./entities/role.entity").Role>;
    update(id: string, updateRoleDto: UpdateRoleDto): string;
    remove(id: string): string;
}
