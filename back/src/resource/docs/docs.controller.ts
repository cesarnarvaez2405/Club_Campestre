import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
} from '@nestjs/common';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';

@Controller()
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @Post('noticias/upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const año = new Date().getFullYear();
          const mes = String(new Date().getMonth() + 1).padStart(2, '0');
          const ruta = process.env.ROUTE_DOCS;
          const uploadPath = path.join(__dirname, ruta, `${año}/${mes}`);
          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
          }
          cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
          const prefijoUnico =
            Date.now() + '-' + Math.round(Math.round(2) * 1e9);
          const extension = file.originalname.split('.').pop();
          const filename = `${prefijoUnico}.${extension}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async cargarImagen(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/png' }),
        ],
      }),
    )
    file,
  ) {
    try {
      const filename = file.filename;
      return { imageUrl: `/uploads/${filename}` };
    } catch (error) {
      console.log(error);
    }
  }

  @Get()
  findAll() {
    return this.docsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocDto: UpdateDocDto) {
    return this.docsService.update(+id, updateDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docsService.remove(+id);
  }
}
