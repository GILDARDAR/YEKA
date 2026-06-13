import { ConfiguracionService, AppConfig } from './configuracion.service';
export declare class ConfiguracionController {
    private readonly configuracionService;
    constructor(configuracionService: ConfiguracionService);
    getAll(): Promise<AppConfig>;
    update(dto: Partial<AppConfig>): Promise<AppConfig>;
}
