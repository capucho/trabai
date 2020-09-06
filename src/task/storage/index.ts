import { homedir } from 'os';
import { join } from 'path';
import { dataAccess } from './file-storage';

export interface Data {
  meta: Metadata;
  modules: Modules;
}
export interface Modules {
  [k: string]: Module;
}

export interface Metadata {
  [k: string]: ModuleMetadata;
}

export interface ModuleMetadata {
  lastId: number;
}

export interface Module {
  [k: string]: string;
}

export type FileWriterBuilder = (path: string) => Writer;
export type Writer = (data: Data) => void;

export type FileReaderBuilder = (path: string) => Reader;
export type Reader = () => Data;

const path =
  process.env.ENV === 'test'
    ? join(__dirname, '.trabai.test.json')
    : join(homedir(), '.trabai.json');

const { read, write } = dataAccess(path);

export { read, write };
