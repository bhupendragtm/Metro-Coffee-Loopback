import {Entity, model, property, hasMany} from '@loopback/repository';
import {Order} from './order.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    default: 123456,
  })
  Password?: string;

  @hasMany(() => Order)
  orders: Order[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
