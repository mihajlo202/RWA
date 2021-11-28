
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

  getAllProducts(): Promise<Product[]> {
    return this.productRepo.find();
  }

  createNewProduct(newProduct: Product) {
    this.productRepo.insert(newProduct);
  }

  deleteProduct(id: number) {
    this.productRepo.delete(id);
  }

  getProductBySellerId(id:number): Promise<Product[]> {
      return this.productRepo.find({sellerId:id});
  }

  updateProduct(productToUpdate:Product){
    this.productRepo.update(productToUpdate.id,productToUpdate);
}

}