import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateDocDto } from './dto/create-doc.dto';
import { UpdateDocDto } from './dto/update-doc.dto';
import * as ftp from 'basic-ftp';
import path, { join } from 'path';
import * as fs from 'fs';
import * as crypto from 'crypto';

@Injectable()
export class DocsService {
  private client = new ftp.Client();

  constructor() {
    this.client = new ftp.Client();
  }

  create(createDocDto: CreateDocDto) {
    return 'This action adds a new doc';
  }

  findAll() {
    return `This action returns all docs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} doc`;
  }

  update(id: number, updateDocDto: UpdateDocDto) {
    return `This action updates a #${id} doc`;
  }

  remove(id: number) {
    return `This action removes a #${id} doc`;
  }

  async uploadFile(file: Express.Multer.File) {
    // Paso 1: Guardar temporalmente el archivo
    const ruta = process.env.ROUTE_DOCS;
    const tempDir = join(__dirname, ruta);
    const tempFilePath = join(tempDir, file.originalname);

    // Guardar el buffer en el archivo temporal
    await fs.promises.writeFile(tempFilePath, file.buffer);

    try {
      await this.client.access({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        secure: false, // Cambia esto a true si usas FTPS
      });

      const remoteFilePath = `/IMG/img_uploads/${file.originalname}`;
      await this.client.uploadFrom(tempFilePath, remoteFilePath);
      return remoteFilePath;
    } catch (error) {
      throw new NotAcceptableException('No se pudo guardar el archivo');
    } finally {
      // Eliminar el archivo temporal después de la subida
      await fs.promises.unlink(tempFilePath);
      this.client.close();
    }
  }

  private encryptFileName(fileName: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(fileName + Date.now().toString());
    return hash.digest('hex') + path.extname(fileName);
  }
}
