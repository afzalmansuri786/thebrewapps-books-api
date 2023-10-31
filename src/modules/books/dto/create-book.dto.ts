import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Title should not be empty' })
  @IsString({ message: 'Title should be string' })
  title: string;

  @IsNotEmpty({ message: 'Author should not be empty' })
  @IsString({ message: 'Author should be string' })
  author: string;

  @IsNotEmpty({ message: 'Summary should not be empty' })
  @IsString({ message: 'Summary should be string' })
  summary: string;
}
