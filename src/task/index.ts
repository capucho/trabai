import * as management from './management';

export interface Task {
  readonly management: management.Management;
}

export { management };
