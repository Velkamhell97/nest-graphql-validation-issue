import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/prisma.service';
import { CreatePostInput } from './inputs/create-post.input';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany();
  }

  async create(data: CreatePostInput) {
    return this.prisma.post.create({data});
  }
}
