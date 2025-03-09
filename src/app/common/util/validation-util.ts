import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}


export function numValidate(event) {
  const pattern = /[0-9\+\-\ ]/;
  if (!pattern.test(event.key)) {
    event.preventDefault();
  } 
}

export function lettersNumbersOnly(event) {
  const pattern = /[A-Za-z0-9]/;
  if (!pattern.test(event.key)) {
    event.preventDefault();
  } 
}

export function stringValidator(event){
  const pattern = /^[A-Za-z]+$/;
  if (!pattern.test(event.key)) {
    event.preventDefault();
  } 
}
