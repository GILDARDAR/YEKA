const fs = require('fs');
const path = require('path');

const resources = ['material', 'tipo-arreglo', 'zona'];
const modelNames = ['material', 'tipoArreglo', 'zona'];

for (let i = 0; i < resources.length; i++) {
  const resource = resources[i];
  const camelCase = modelNames[i];
  const PascalCase = resource.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  
  const basePath = path.join(__dirname, 'src', 'modules', resource);
  
  // Create DTO
  fs.writeFileSync(path.join(basePath, 'dto', `create-${resource}.dto.ts`), `
export class Create${PascalCase}Dto {
  descripcion: string;
  activo?: boolean;
}
  `.trim() + '\n');

  // Update DTO
  fs.writeFileSync(path.join(basePath, 'dto', `update-${resource}.dto.ts`), `
import { PartialType } from '@nestjs/mapped-types';
import { Create${PascalCase}Dto } from './create-${resource}.dto';

export class Update${PascalCase}Dto extends PartialType(Create${PascalCase}Dto) {}
  `.trim() + '\n');

  // Module
  fs.writeFileSync(path.join(basePath, `${resource}.module.ts`), `
import { Module } from '@nestjs/common';
import { ${PascalCase}Service } from './${resource}.service';
import { ${PascalCase}Controller } from './${resource}.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [${PascalCase}Controller],
  providers: [${PascalCase}Service],
})
export class ${PascalCase}Module {}
  `.trim() + '\n');

  // Service
  fs.writeFileSync(path.join(basePath, `${resource}.service.ts`), `
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Create${PascalCase}Dto } from './dto/create-${resource}.dto';
import { Update${PascalCase}Dto } from './dto/update-${resource}.dto';

@Injectable()
export class ${PascalCase}Service {
  constructor(private prisma: PrismaService) {}

  create(create${PascalCase}Dto: Create${PascalCase}Dto) {
    return this.prisma.${camelCase}.create({
      data: create${PascalCase}Dto,
    });
  }

  findAll() {
    return this.prisma.${camelCase}.findMany();
  }

  findOne(id: number) {
    return this.prisma.${camelCase}.findUnique({
      where: { id },
    });
  }

  update(id: number, update${PascalCase}Dto: Update${PascalCase}Dto) {
    return this.prisma.${camelCase}.update({
      where: { id },
      data: update${PascalCase}Dto,
    });
  }

  remove(id: number) {
    return this.prisma.${camelCase}.delete({
      where: { id },
    });
  }
}
  `.trim() + '\n');

  // Controller
  fs.writeFileSync(path.join(basePath, `${resource}.controller.ts`), `
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ${PascalCase}Service } from './${resource}.service';
import { Create${PascalCase}Dto } from './dto/create-${resource}.dto';
import { Update${PascalCase}Dto } from './dto/update-${resource}.dto';

@Controller('${resource}')
export class ${PascalCase}Controller {
  constructor(private readonly ${camelCase}Service: ${PascalCase}Service) {}

  @Post()
  create(@Body() create${PascalCase}Dto: Create${PascalCase}Dto) {
    return this.${camelCase}Service.create(create${PascalCase}Dto);
  }

  @Get()
  findAll() {
    return this.${camelCase}Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.${camelCase}Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() update${PascalCase}Dto: Update${PascalCase}Dto) {
    return this.${camelCase}Service.update(+id, update${PascalCase}Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.${camelCase}Service.remove(+id);
  }
}
  `.trim() + '\n');
}

console.log('Backend resources updated successfully.');
