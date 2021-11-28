
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WishList } from './entities/wishlist.entity';

@Injectable()
export class WishListService {
  constructor(@InjectRepository(WishList) private wishlistRepo: Repository<WishList>) {}

  getAllWishes(): Promise<WishList[]> {
    return this.wishlistRepo.find();
  }

  createWish(newWish: WishList) {
    this.wishlistRepo.insert(newWish);
  }

  deleteWish(id: number) {
    this.wishlistRepo.delete(id);
  }

  getWishesByCustomerId(id:number): Promise<WishList[]> {
      return this.wishlistRepo.find({customerId:id});
  }

  getWishesBySellerId(id:number): Promise<WishList[]> {
    return this.wishlistRepo.find({sellerId:id});
  }

}