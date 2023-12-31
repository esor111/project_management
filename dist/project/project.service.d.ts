import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectRepository } from './project.repository';
export declare class ProjectService {
    private readonly projectRepo;
    constructor(projectRepo: ProjectRepository);
    create(createProjectDto: CreateProjectDto): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProjectDto: UpdateProjectDto): string;
    remove(id: number): string;
}
