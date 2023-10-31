import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({ versionKey: false, timestamps: true })
export class Book {
  @Prop({ type: String, unique: true })
  title: string;

  @Prop({ type: String })
  author: string;

  @Prop({ type: String })
  summary: string;

  @Prop({ type: Number, unique: true, required: false })
  serialNumber: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.pre('save', async function (next) {
  if (this.title.length < 2) {
    throw new Error('Title length is not acceptable.');
  }

  next();
});
