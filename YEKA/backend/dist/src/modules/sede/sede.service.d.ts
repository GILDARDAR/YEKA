import { SedeFacade } from './sede.facade';
import { CreateSedeDto, UpdateSedeDto, SedeResponseDto, CapacidadResponseDto } from './sede.dto';
export declare class SedeService {
    private readonly SedeFacade;
    constructor(SedeFacade: SedeFacade);
    getSedes(): Promise<SedeResponseDto[]>;
    getSedeById(id: number): Promise<SedeResponseDto>;
    createSede(dto: CreateSedeDto): Promise<SedeResponseDto>;
    updateSede(id: number, dto: UpdateSedeDto): Promise<SedeResponseDto>;
    deleteSede(id: number): Promise<SedeResponseDto>;
    getCapacidadDisponible(sedeId: number, fecha: Date): Promise<CapacidadResponseDto>;
}
