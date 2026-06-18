import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAnuncioDto {
  @IsInt()
  sedeId: number;

  @IsString()
  @IsNotEmpty()
  mensaje: string;
}

export class ResponderAnuncioDto {
  @IsString()
  @IsNotEmpty()
  respuesta: string;
}
