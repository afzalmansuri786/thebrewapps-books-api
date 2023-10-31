import { IsString } from 'class-validator';

export class GetAllBooksDto {
  @IsString()
  title?: string;

  @IsString()
  summary?: string;

  @IsString()
  author?: string;

  @IsString()
  limit?: number;

  @IsString()
  skip?: number;
}
