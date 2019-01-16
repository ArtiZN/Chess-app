import { User } from './user.interfaces';
import { Action } from '@core/enums/action.enums';

export interface Message {
  from: User;
  content: string;
  action: Action;
  timestamp: number;
}
