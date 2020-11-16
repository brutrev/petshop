export class Validations {
  constructor(public errors: any[] = []) {}

  isRequired(value, message) {
    if (!value || value.length <= 0) {
      this.errors.push(message);
    }
  }

  hasMinLength(value, min, message) {
    if (!value || value.length < min) {
      this.errors.push(message);
    }
  }

  hasMaxLength(value, max, message) {
    if (!value || value.length > max) {
      this.errors.push(message);
    }
  }

  isFixedLength(value, len, message) {
    if (!value || value.length !== len) {
      this.errors.push(message);
    }
  }

  areEquals(value1, value2, message) {
    if (value1 !== value2) {
      this.errors.push(message);
    }
  }

  isEmail(value, message) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(value)) {
      this.errors.push(message);
    }
  }

  clear() {
    this.errors = [];
  }

  isValid() {
    return this.errors.length === 0;
  }
}
