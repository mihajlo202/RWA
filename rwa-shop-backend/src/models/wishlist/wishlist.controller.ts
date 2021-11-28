import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WishList } from './entities/wishlist.entity';
import { WishListService } from './wishlist.service';
 
@Controller('wishlist')
export class WishListController {
    constructor(private readonly wishlistService: WishListService){}
 
    @Get('getall')
    async getAll():Promise<WishList[]>{
        return await this.wishlistService.getAllWishes();
    }

    @Post('create')
    createWish(@Body() newWish:WishList){
        this.wishlistService.createWish(newWish);
    }

    @Delete('delete/:id')
    deleteWish(@Param('id') id:number){
        this.wishlistService.deleteWish(id);
    }

    @Get('getbysellerid/:id')
    async getWishesBySellerId(@Param('id')id:number):Promise<WishList[]>{
        return await this.wishlistService.getWishesBySellerId(id);
    }

    @Get('getbycustomerid/:id')
    async getWishesByCustomerId(@Param('id')id:number):Promise<WishList[]>{
        return await this.wishlistService.getWishesByCustomerId(id);
    }
}
