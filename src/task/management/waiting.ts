import { TaskRepository } from '../repository';

export interface Waiting {
  readonly add: ReturnType<typeof TaskRepository.add>;
  readonly read: ReturnType<typeof TaskRepository.read>;
  readonly remove: ReturnType<typeof TaskRepository.remove>;
}

export const add = TaskRepository.add('waiting');
export const read = TaskRepository.read('waiting');
export const remove = TaskRepository.remove('waiting');
