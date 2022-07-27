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

  @Output() valueChange = new EventEmitter<string>();

  protected form: FormControl;
  protected unsuscriber$ = new Subject<void>();

  constructor(fb: FormBuilder) {
    this.form = fb.nonNullable.control({
      value: '',
      disabled: false
    })

    this.form.valueChanges.pipe(debounceTime(300), takeUntil(this.unsuscriber$)).subscribe(this.valueChange);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

  submit() {

  }

}
