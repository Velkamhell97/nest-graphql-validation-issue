import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PrismaModule } from 'src/core/database/prisma.module';
import { PostsResolver } from './posts.resolver';
import { PostsController } from './posts.controller';

@Module({
  imports: [PrismaModule],
  providers: [PostsResolver, PostsService],
  // controllers: [PostsController]
})
export class PostsModule {}
