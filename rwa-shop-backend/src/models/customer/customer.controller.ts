import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './entities/customer.entity';
 
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}
 
    @Get('getall')
    async getAll():Promise<Customer[]>{
        return await this.customerService.getAllCustomers();
    }

    @Post('create')
    createCustomer(@Body() newCustomer:Customer){
        this.customerService.createNewCustomer(newCustomer);
    }

    @Delete('delete/:id')
    deleteCustomer(@Param('id') id:number){
        this.customerService.deleteCustomer(id);
    }

    @Get('getbyemail/:email')
    async getCustomerByEmail(@Param('email')email:string):Promise<Customer>{
        return await this.customerService.getCustomerByEmail(email);
    }
}
