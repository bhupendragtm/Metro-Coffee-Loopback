import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresDatasourceDataSource} from '../datasources';
import {Order, OrderRelations} from '../models';

export class OrderRepository extends DefaultCrudRepository<
  Order,
  typeof Order.prototype.ID,
  OrderRelations
> {
  constructor(
    @inject('datasources.postgres_datasource') dataSource: PostgresDatasourceDataSource,
  ) {
    super(Order, dataSource);
  }
}
