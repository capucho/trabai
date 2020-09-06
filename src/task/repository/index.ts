import { read, write } from '../storage';
import { add, read as readAll, remove } from './task';

export type Modules = 'inbox';
const TaskRepository = { add: add(write, read), read: readAll(read), remove: remove(write, read) };

export { TaskRepository };
