import { Injectable } from '@nestjs/common';
import { Validations } from 'src/utils/validations';
import { CreateCustomerRequest } from '../requests/create-customer.request';
import { Contract } from './contract';

@Injectable()
export class CustomerContract implements Contract {
  errors: any[];

  validate(request: CreateCustomerRequest): boolean {
    const validations = new Validations();

    validations.hasMinLength(request.name, 5, 'Nome inválido');
    validations.isEmail(request.email, 'Email inválido');
    validations.isFixedLength(request.document, 11, 'CPF inválido');
    validations.areEquals(request.password, request.confirmPassword, 'As senhas não conferem');

    this.errors = validations.errors;
    return validations.isValid();
  }
}
