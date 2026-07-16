import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoArregloDto } from './create-tipo-arreglo.dto';

export class UpdateTipoArregloDto extends PartialType(CreateTipoArregloDto) {}
