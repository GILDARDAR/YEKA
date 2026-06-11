import { SedeDAO } from './sede.dao';
import { CreateSedeDto, UpdateSedeDto, SedeResponseDto, CapacidadResponseDto } from './sede.dto';
export declare class SedeFacade {
    private readonly sedeDAO;
    constructor(sedeDAO: SedeDAO);
    getSedes(): Promise<SedeResponseDto[]>;
    getSedeById(id: number): Promise<SedeResponseDto>;
    createSede(dto: CreateSedeDto): Promise<SedeResponseDto>;
    updateSede(id: number, dto: UpdateSedeDto): Promise<SedeResponseDto>;
    deleteSede(id: number): Promise<SedeResponseDto>;
    getCapacidadDisponible(sedeId: number, fecha: Date): Promise<CapacidadResponseDto>;
}
