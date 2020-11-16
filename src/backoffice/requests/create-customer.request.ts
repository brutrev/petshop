export class CreateCustomerRequest {
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public password: string,
    public confirmPassword: string,
  ) {}
}
