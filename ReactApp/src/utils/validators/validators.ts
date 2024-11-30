export const NotEmpty = (value: string): string | undefined => {
    return value ? undefined : "Field is required";
  };
  
  export const isEmail = (value: string): string | undefined => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value) ? undefined : "Invalid email address";
  };
  
  export const MinLength = (value: string, length: number): string | undefined => {
    return value.length >= length ? undefined : `Minimum length is ${length}`;
  };
  
  export const IsEqual = (value: string, comparison: string): string | undefined => {
    return value === comparison ? undefined : "Values do not match";
  };
  
  export const MultipleValidators = (
    value: string,
    validators: Array<(value: string) => string | undefined>
  ): string | undefined => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return undefined;
  };
  