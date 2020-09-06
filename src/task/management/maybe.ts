import { TaskRepository } from '../repository';

export interface Maybe {
  readonly add: ReturnType<typeof TaskRepository.add>;
  readonly read: ReturnType<typeof TaskRepository.read>;
  readonly remove: ReturnType<typeof TaskRepository.remove>;
}

export const add = TaskRepository.add('maybe');
export const read = TaskRepository.read('maybe');
export const remove = TaskRepository.remove('maybe');
