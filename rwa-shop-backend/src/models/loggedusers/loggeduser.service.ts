import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggedUser } from './entities/loggeduser.entity';

@Injectable()
export class LoggedUserService {
  constructor(@InjectRepository(LoggedUser) private loggeduserRepo: Repository<LoggedUser>) {}

  getAllLoggedUsers(): Promise<LoggedUser[]> {
    return this.loggeduserRepo.find();
  }

  createNewLoggedUser(newLoggedUser: LoggedUser) {
    this.loggeduserRepo.insert(newLoggedUser);
  }

  deleteLoggedUser(id: number) {
    this.loggeduserRepo.delete(id);
  }

  checkIfLoggedUserIsValid(loggedUser:LoggedUser): Promise<LoggedUser>{
    return this.loggeduserRepo.findOne({email: loggedUser.email, password: loggedUser.password})
  }

  getLoggedUserByEmail(email:string): Promise<LoggedUser> {
      return this.loggeduserRepo.findOne({email:email});
  }

}