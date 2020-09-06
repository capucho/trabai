import type { Writer, Reader } from '../storage';
import { Modules } from './index';

const add = (writer: Writer, reader: Reader) => (module: Modules) => (todo: string) => {
  const data = reader();
  try {
    ++data.meta[module].lastId;
    data[module][`${data.meta[module].lastId}`] = todo;
    writer(data);
    return todo;
  } catch (e) {
    console.error('Adding todo failed');
  }
};

const remove = (writer: Writer, reader: Reader) => (module: Modules) => (id: string) => {
  try {
    const data = reader();
    delete data[module][id];
    writer(data);
  } catch (e) {
    console.error('Removing todo failed');
  }
};

const read = (reader: Reader) => (module: Modules) => () => {
  const data = reader();
  console.table(data[module]);
};

export { add, read, remove };
