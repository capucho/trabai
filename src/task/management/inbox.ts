import { TaskRepository } from '../repository';

export interface Inbox {
  readonly add: ReturnType<typeof TaskRepository.add>;
  readonly read: ReturnType<typeof TaskRepository.read>;
  readonly remove: ReturnType<typeof TaskRepository.remove>;
}

export const add = TaskRepository.add('inbox');
export const read = TaskRepository.read('inbox');
export const remove = TaskRepository.remove('inbox');
