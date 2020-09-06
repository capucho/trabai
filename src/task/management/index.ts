import * as inbox from './inbox';

export interface Management {
  readonly inbox: inbox.Inbox;
}

export { inbox };
