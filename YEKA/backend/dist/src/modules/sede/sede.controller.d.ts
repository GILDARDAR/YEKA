import { SedeService } from './sede.service';
import { CreateSedeDto, UpdateSedeDto, SedeResponseDto, CapacidadResponseDto } from './sede.dto';
export declare class SedeController {
    private readonly SedeService;
    constructor(SedeService: SedeService);
    getSedes(): Promise<SedeResponseDto[]>;
    getSedeById(id: number): Promise<SedeResponseDto>;
    createSede(dto: CreateSedeDto): Promise<SedeResponseDto>;
    updateSede(id: number, dto: UpdateSedeDto): Promise<SedeResponseDto>;
    deleteSede(id: number): Promise<SedeResponseDto>;
    getCapacidad(id: number, fechaQuery?: string): Promise<CapacidadResponseDto>;
}
