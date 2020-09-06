import { read, write } from '../storage';
import { add, read as readAll, remove } from './task';

const TaskRepository = { add: add(write, read), read: readAll(read), remove: remove(write, read) };

export { TaskRepository };
