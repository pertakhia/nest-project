import { Document } from 'mongoose';

export interface News extends Document {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly contet: string;
}
