import { FormGroup } from '@angular/forms';
import { FormsService } from './forms.service';
export abstract class FormBase {
  protected form!: FormGroup;
  protected fs!: FormsService;

  hasErrorMessage(formControlName: string): boolean {
    if (!this.fs) return false;
    if (!this.form) return false;
    return this.fs.hasErrorMessage(this.form, formControlName);
  }

  getErrorMessage(formControlName: string): string {
    if (!this.fs) return '';
    if (!this.form) return '';
    return this.fs.getErrorMessage(this.form, formControlName);
  }
}
