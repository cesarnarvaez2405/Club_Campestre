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
  Res,
  UnsupportedMediaTypeException,
  NotFoundException,
} from '@nestjs/common';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import * as fs from 'fs';
import { Response } from 'express';
import { obtenerFechaAlmacenamiento } from 'src/util/filesDate';
import { Auth } from '../auth/decorators/auth.decorators';
import { Role } from '../common/enums/rol.enum';

@Controller('file')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  // @Post('upload-image')
  // @Auth(Role.Admin)
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: (req, file, cb) => {
  //         const año = new Date().getFullYear();
  //         const mes = String(new Date().getMonth() + 1).padStart(2, '0');
  //         const ruta = process.env.ROUTE_DOCS;
  //         const uploadPath = path.join(__dirname, ruta, `${año}/${mes}`);
  //         if (!fs.existsSync(uploadPath)) {
  //           fs.mkdirSync(uploadPath, { recursive: true });
  //         }
  //         cb(null, uploadPath);
  //       },
  //       filename: (req, file, cb) => {
  //         const prefijoUnico =
  //           Date.now() + '-' + Math.round(Math.round(5) * 1e9);
  //         const extension = file.originalname.split('.').pop();
  //         const filename = `${prefijoUnico}.${extension}`;
  //         cb(null, filename);
  //       },
  //     }),
  //   }),
  // )
  @Post('image-upload-ftp')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFileFtp(@UploadedFile() file: Express.Multer.File) {
    const localFile = await this.docsService.uploadFile(file);
    return localFile;
  }

  async cargarImagen(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({
            fileType: /^(image\/png|image\/jpeg|image\/jpg)$/,
          }),
        ],
      }),
    )
    file,
  ) {
    try {
      const filename = file.filename;
      return { imageUrl: `/uploads/${filename}`, filename: filename };
    } catch (error) {
      throw new UnsupportedMediaTypeException();
    }
  }

  @Get(':filename')
  serveFile(@Param('filename') filename: string, @Res() res: Response) {
    try {
      const ruta = process.env.ROUTE_DOCS;

      const coincidencia = filename.match(/^(\d+)-\d+\.(png|jpg|jpeg)$/i);
      const fechaNumerico = coincidencia ? coincidencia[1] : null;

      const fecha = new Date(parseInt(fechaNumerico));
      const { año, mes } = obtenerFechaAlmacenamiento(fecha);

      const file = path.join(__dirname, ruta, `${año}/${mes}`, filename);
      res.sendFile(file);
    } catch (error) {
      throw new NotFoundException();
    }
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
