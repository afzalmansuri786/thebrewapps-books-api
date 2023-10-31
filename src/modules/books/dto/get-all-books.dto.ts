import { IsOptional, IsString } from 'class-validator';

enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
}
export class GetAllBooksDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  limit?: number;

  @IsString()
  @IsOptional()
  skip?: number;

  @IsString()
  @IsOptional()
  sortDirection: SortDirection;
}
