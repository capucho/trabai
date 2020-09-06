import { existsSync, readFileSync, writeFileSync } from 'fs';
import type { Data, FileWriterBuilder, FileReaderBuilder, Reader, Writer } from './index';

const createFile = (path: string) => {
  // first run, create the file
  const fileBuffer = Buffer.from(JSON.stringify({ meta: {}, modules: {} }));
  write(path, fileBuffer);

  return fileBuffer;
};

/**
 * Impure Function
 */
const read = (path: string) => {
  try {
    if (existsSync(path)) {
      return readFileSync(path);
    }
    return createFile(path);
  } catch (err) {
    console.error('Error while reading file, killing process');
    throw new Error('Error while reading file');
  }
};

/**
 * Impure Function
 */
const write = (path: string, file: Buffer) => {
  try {
    return writeFileSync(path, file);
  } catch (e) {
    console.error('Error while reading file, killing process');
    throw new Error('Error while writing file');
  }
};

const fileToJson = (rawJson: string | Buffer) => JSON.parse(rawJson.toString());

/**
 * Impure Function
 */
const readTomateData: FileReaderBuilder = (path: string): Reader => (): Data =>
  fileToJson(read(path));

/**
 * Impure Function
 */
const writeTomateData: FileWriterBuilder = (path: string): Writer => (file: Data) =>
  write(path, Buffer.from(JSON.stringify(file)));

/**
 * Module Tomate Data
 * @param path
 */
const dataAccess = (path: string) => ({ read: readTomateData(path), write: writeTomateData(path) });

export { dataAccess };
