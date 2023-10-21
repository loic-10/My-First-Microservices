import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user';
import { Repository } from 'typeorm';
import { UserToken } from './userToken';

@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(UserToken)
    private readonly userTokenRepository: Repository<UserToken>
  ) {}

  async save(options: UserToken) {
    return this.userTokenRepository.save(options);
  }

  async find(options = {}) {
    return this.userTokenRepository.findBy(options);
  }

  async findOne(options) {
    return this.userTokenRepository.findOneBy(options);
  }

  async delete(options) {
    return this.userTokenRepository.delete(options);
  }
}
