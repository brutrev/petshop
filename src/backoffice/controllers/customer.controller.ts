import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ValidationInterceptor } from 'src/interceptors/validation.interceptor';
import { CustomerContract } from '../contracts/customer.contract';
import { Result } from '../models/result.model';
import { CreateCustomerRequest } from '../requests/create-customer.request';

@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, [], null);
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return new Result(null, {}, null);
  }

  @Post()
  @UseInterceptors(new ValidationInterceptor(new CustomerContract))
  post(@Body() customer: CreateCustomerRequest) {
    
    return new Result('Cliente criado com sucesso', customer, null);
  }

  @Put(':document')
  put(@Param('document') document, @Body() body) {
    return new Result('Cliente alterado com sucesso', body, null);
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return new Result('Cliente removido com sucesso', null, null);
  }
}
