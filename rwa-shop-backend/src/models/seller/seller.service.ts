import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './entities/seller.entity';

@Injectable()
export class SellerService {
  constructor(@InjectRepository(Seller) private sellerRepo: Repository<Seller>) {}

  getAllSellers(): Promise<Seller[]> {
    return this.sellerRepo.find();
  }

  createNewSeller(newSeller: Seller) {
    this.sellerRepo.insert(newSeller);
  }

  deleteSeller(id: number) {
    this.sellerRepo.delete(id);
  }

  getSellerByEmail(email:string): Promise<Seller> {
      return this.sellerRepo.findOne({email:email});
  }

}