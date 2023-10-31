import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';
import { GetAllBooksDto } from './dto/get-all-books.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async countAllBooks() {
    return await this.bookModel.find().countDocuments();
  }

  async createOneBook(createBookDto: CreateBookDto) {
    try {
      const foundBook = await this.bookModel.findOne({
        title: createBookDto.title,
      });
      if (foundBook) {
        // console.log({ message: 'Book title already exists' });
        return { message: 'Book title already exists' };
      }
      const count = await this.bookModel.find({}).countDocuments();
      createBookDto['serialNumber'] = count + 1;
      const createBook = await this.bookModel.create(createBookDto);
      // console.log(createBook);
      return createBook;
    } catch (error) {
      throw new Error('Failed to create a book: ' + error.message);
    }
  }

  async findAllBook(searchDto?: GetAllBooksDto) {
    try {
      const limit: number = searchDto?.limit ?? 10;
      const skip: number = searchDto?.skip ?? 0;
      const query: any = {};

      if (searchDto?.title) {
        query.title = { $regex: new RegExp(searchDto.title, 'i') };
      }

      if (searchDto?.author) {
        query.author = { $regex: new RegExp(searchDto.author, 'i') };
      }

      if (searchDto?.summary) {
        query.summary = { $regex: new RegExp(searchDto.summary, 'i') };
      }

      const sortDirection = searchDto?.sortDirection;

      console.log(query);
      const books = await this.bookModel
        .find(query)
        .sort({ serialNumber: sortDirection === 'asc' ? 1 : -1 })
        .skip(skip)
        .limit(limit)
        .lean();

      // console.log('FindAll : ', books);
      if (books.length === 0) return { message: 'No books' };

      return books;
    } catch (error) {
      throw new Error('Failed to retrieve books: ' + error.message);
    }
  }

  async findOneBook(id: string) {
    try {
      const book = await this.bookModel.findById(id);
      if (!book) throw new NotFoundException('Book not found');
      // console.log('FindOne : ', book);
      
      return book;
    } catch (error) {
      throw new NotFoundException('Book not found: ' + error.message);
    }
  }

  async updateOneBook(id: string, updateBookDto: UpdateBookDto) {
    try {
      const updateBook = await this.bookModel.findByIdAndUpdate(
        id,
        updateBookDto,
      );
      if (!updateBook) {
        throw new NotFoundException('Book not updated');
      }
      // console.log({ updateBook, message: 'Book updated successfully' });
      return { updateBook, message: 'Book updated successfully' };
    } catch (error) {
      throw new Error('Failed to update the book: ' + error.message);
    }
  }

  async deleteOneBook(id: string) {
    try {
      const deleteBook = await this.bookModel.findByIdAndDelete(id);
      if (!deleteBook) {
        throw new NotFoundException('Book not deleted');
      }
      // console.log({ message: 'Book deleted successfully' });
      return { message: 'Book deleted successfully' };
    } catch (error) {
      throw new Error('Failed to delete the book: ' + error.message);
    }
  }
}
