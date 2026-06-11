import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto, UpdateClienteDto, ClienteResponseDto } from './cliente.dto';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';

@Controller('clientes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  async getClientes(
    @Query('q') q?: string,
    @Query('sedeId') sedeIdQuery?: string,
  ): Promise<ClienteResponseDto[]> {
    if (q) {
      return this.clienteService.buscarClientes(q);
    }
    const sedeId = sedeIdQuery ? parseInt(sedeIdQuery, 10) : undefined;
    return this.clienteService.getClientes(sedeId);
  }

  @Get(':id')
  async getClienteById(@Param('id', ParseIntPipe) id: number): Promise<ClienteResponseDto> {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  async createCliente(@Body() dto: CreateClienteDto): Promise<ClienteResponseDto> {
    return this.clienteService.createCliente(dto);
  }

  @Patch(':id')
  async updateCliente(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateClienteDto,
  ): Promise<ClienteResponseDto> {
    return this.clienteService.updateCliente(id, dto);
  }

  @Delete(':id')
  async deleteCliente(@Param('id', ParseIntPipe) id: number): Promise<ClienteResponseDto> {
    return this.clienteService.deleteCliente(id);
  }
}
