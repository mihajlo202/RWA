import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Seller } from './entities/seller.entity';
import { SellerService } from './seller.service';
 
@Controller('seller')
export class SelerController {
    constructor(private readonly sellerService: SellerService){}
 
    @Get('getall')
    async getAll():Promise<Seller[]>{
        return await this.sellerService.getAllSellers();
    }

    @Post('create')
    createSeller(@Body() newSeller:Seller){
        this.sellerService.createNewSeller(newSeller);
    }

    @Delete('delete/:id')
    deleteSeller(@Param('id') id:number){
        this.sellerService.deleteSeller(id);
    }

    @Get('getbyemail/:email')
    async getSellerByEmail(@Param('email')email:string):Promise<Seller>{
        return await this.sellerService.getSellerByEmail(email);
    }
}