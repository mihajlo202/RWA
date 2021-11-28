import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Customer } from './models/customer/entities/customer.entity';
import { LoggedUser } from './models/loggedusers/entities/loggeduser.entity';
import { LoggedUserController } from './models/loggedusers/loggeduser.controller';
import { LoggedUserService } from './models/loggedusers/loggeduser.service';
import { Product } from './models/product/entities/product.entity';
import { Seller } from './models/seller/entities/seller.entity';
import { WishList } from './models/wishlist/entities/wishlist.entity';
import { configService } from './config/config.service';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'lallah.db.elephantsql.com',
    //   port: 5432,
    //   username: '-----------',
    //   password: '-----------',
    //   database: '-----------',
    //   entities: [
    //     LoggedUser,
    //     Customer,
    //     Seller,
    //     Product,
    //     WishList
    //   ],
    // })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
