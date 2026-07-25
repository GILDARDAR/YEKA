import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import * as fs from 'fs';
import * as crypto from 'crypto';

const ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB

const uploadsDir = join(process.cwd(), 'uploads', 'iconos');

// Ensure directory exists at startup
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

@Controller('upload')
@UseGuards(JwtAuthGuard)
export class UploadController {
  @Post('icono')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadsDir,
        filename: (_req, file, cb) => {
          const ext = extname(file.originalname).toLowerCase();
          cb(null, `${crypto.randomUUID()}${ext}`);
        },
      }),
      limits: { fileSize: MAX_SIZE_BYTES },
      fileFilter: (_req, file, cb) => {
        const ext = extname(file.originalname).toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(ext)) {
          return cb(
            new BadRequestException(
              `Extensión no permitida. Usa: ${ALLOWED_EXTENSIONS.join(', ')}`,
            ),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  uploadIcono(@UploadedFile() file: Express.Multer.File, @Req() req: any) {
    if (!file) {
      throw new BadRequestException('No se recibió ningún archivo.');
    }
    const protocol = req.protocol;
    const host = req.get('host');
    const url = `${protocol}://${host}/uploads/iconos/${file.filename}`;
    return { url };
  }
}
