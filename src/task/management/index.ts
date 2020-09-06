import * as inbox from './inbox';
import * as waiting from './waiting';
import * as maybe from './maybe';

export interface Management {
  readonly inbox: inbox.Inbox;
  readonly waiting: waiting.Waiting
  readonly maybe: maybe.Maybe
}

export { inbox, maybe, waiting };
