import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  content: string;

  @Prop([String])
  tags: string[];
}

export const NewsSchema = SchemaFactory.createForClass(News);
