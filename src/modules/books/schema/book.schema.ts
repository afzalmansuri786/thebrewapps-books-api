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
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.pre('save', function (next) {
  if (this.title.length < 2) {
    throw new Error('Title length is not acceptable.');
  }
  next();
});
