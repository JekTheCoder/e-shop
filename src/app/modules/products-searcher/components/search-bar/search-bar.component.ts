import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Input() color = '';

  @Input('value') set valueSetter(value: string) { this.form.setValue(value); };
  @Output() valueChange = new EventEmitter<string>();

  protected form: FormControl<string>;
  protected unsuscriber$ = new Subject<void>();

  constructor(fb: FormBuilder) {
    this.form = fb.nonNullable.control({
      value: '',
      disabled: false
    })

    this.form.valueChanges.pipe(debounceTime(300), takeUntil(this.unsuscriber$)).subscribe(this.valueChange);
  }

  ngOnInit(): void {
    console.log('CREATING')
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

  submit() {
    this.valueChange.emit(this.form.value);
  }

}
