import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetAllBooksDto } from './dto/get-all-books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('/add')
  async create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createOneBook(createBookDto);
  }

  @Get('/')
  async findAll(@Query() findAllBooksDto: GetAllBooksDto) {
    return this.booksService.findAllBook(findAllBooksDto);
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.booksService.findOneBook(id);
  }

  @Post('/update/:id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.updateOneBook(id, updateBookDto);
  }

  @Post('/delete/:id')
  async delete(@Param('id') id: string) {
    return this.booksService.deleteOneBook(id);
  }
}
