import { homedir } from 'os';
import { join } from 'path';
import { dataAccess } from './file-storage';

export interface Data {
  meta: Metadata;
  inbox: MenuData;
}

export interface Metadata {
  inbox: MenuMetadata;
}

export interface MenuMetadata {
  lastId: number;
}

export interface MenuData {
  [k: string]: string;
}

export type FileWriterBuilder = (path: string) => Writer;
export type Writer = (data: Data) => void;

export type FileReaderBuilder = (path: string) => Reader;
export type Reader = () => Data;

const path =
  process.env.ENV === 'test'
    ? join(homedir(), '.tomate.json')
    : join(__dirname, '.tomate.test.json');

const { read, write } = dataAccess(path);

export { read, write };
