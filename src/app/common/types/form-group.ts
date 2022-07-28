import { AbstractControl } from "@angular/forms";

export type FormGroupObject<T extends object> = {
    [k in keyof T]: AbstractControl<T[k]>;
  };