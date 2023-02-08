import { Info } from './info';
import { User } from './user';
export interface Response {
  results: User[];
  info: Info;
}
