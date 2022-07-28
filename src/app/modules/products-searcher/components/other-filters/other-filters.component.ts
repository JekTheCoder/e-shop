import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FakeStoreService } from '@common/services/fake-store.service';
import { FormGroupObject } from '@common/types/form-group';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { Filters } from '../../interfaces/filters.interface';

type OtherFilters = Omit<Filters, 'title'> & { categories: string[] };

type OtherFiltersFormGroup = FormGroupObject<OtherFilters>;

@Component({
  selector: 'app-other-filters',
  templateUrl: './other-filters.component.html',
  styleUrls: ['./other-filters.component.scss']
})
export class OtherFiltersComponent implements OnInit, OnDestroy {

  @Output() otherFiltersChanges = new EventEmitter<OtherFilters>();

  form: FormGroup = new FormGroup<OtherFiltersFormGroup>({
    categories: new FormControl<string[]>([], { nonNullable: true })
  })

  protected unsuscriber$ = new Subject<void>();

  protected categories$!: Observable<string[]>;

  constructor(protected store: FakeStoreService) {} 

  ngOnInit(): void {
    this.categories$ = this.store.getCategories();

    this.form.valueChanges.pipe(debounceTime(300), takeUntil(this.unsuscriber$)).subscribe(this.otherFiltersChanges);
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

}
