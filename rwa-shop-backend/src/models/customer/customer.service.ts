
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(@InjectRepository(Customer) private customerRepo: Repository<Customer>) {}

  getAllCustomers(): Promise<Customer[]> {
    return this.customerRepo.find();
  }

  createNewCustomer(newCustomer: Customer) {
    this.customerRepo.insert(newCustomer);
  }

  deleteCustomer(id: number) {
    this.customerRepo.delete(id);
  }

  getCustomerByEmail(email:string): Promise<Customer> {
      return this.customerRepo.findOne({email:email});
  }

}