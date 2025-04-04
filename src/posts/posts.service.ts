import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
        private userService: UsersService
    ){}

    async createPost(post: CreatePostDto){
        const userFound = await this.userService.getUser(post.authorId);
        if(!userFound){
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const newPost = this.postRepository.create(post);
        return this.postRepository.save(newPost);
    }

    getPosts(){
        return this.postRepository.find({
            relations: ['author']
        });
    }

}
