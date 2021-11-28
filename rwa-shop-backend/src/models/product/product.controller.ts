import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
 
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}
 
    @Get('getall')
    async getAll():Promise<Product[]>{
        return await this.productService.getAllProducts();
    }

    @Post('create')
    createProduct(@Body() newProduct:Product){
        this.productService.createNewProduct(newProduct);
    }

    @Post('update')
    updateProduct(@Body() productToUpdate:Product){
        this.productService.updateProduct(productToUpdate);
    }

    @Delete('delete/:id')
    deleteProduct(@Param('id') id:number){
        this.productService.deleteProduct(id);
    }

    @Get('getbysellerid/:id')
    async getProductsBySellerId(@Param('id')id:number):Promise<Product[]>{
        return await this.productService.getProductBySellerId(id);
    }
}
