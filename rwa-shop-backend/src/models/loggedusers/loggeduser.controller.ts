import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LoggedUser } from './entities/loggeduser.entity';
import { LoggedUserService } from './loggeduser.service';
 
@Controller('loggeduser')
export class LoggedUserController {
    constructor(private readonly loggeduserService: LoggedUserService){}
 
    @Get('getall')
    async getAll():Promise<LoggedUser[]>{
        return await this.loggeduserService.getAllLoggedUsers();
    }

    @Post('create')
    createLoggedUser(@Body() newLoggedUser:LoggedUser){
        this.loggeduserService.createNewLoggedUser(newLoggedUser);
    }

    @Delete('delete/:id')
    deleteLoggedUser(@Param('id') id:number){
        this.loggeduserService.deleteLoggedUser(id);
    }

    @Post('checkisvalid')
    async getLoggedUser(@Body() loggedUser:LoggedUser){
        return await this.loggeduserService.checkIfLoggedUserIsValid(loggedUser);
    }

    @Get('getbyemail/:email')
    async getLoggedUserByEmail(@Param('email')email:string):Promise<LoggedUser>{
        return await this.loggeduserService.getLoggedUserByEmail(email);
    }
}