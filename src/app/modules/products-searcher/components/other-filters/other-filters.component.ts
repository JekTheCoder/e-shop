import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FakeStoreService } from '@common/services/fake-store.service';
import { FormGroupObject } from '@common/types/form-group';
import { debounceTime, Observable, Subject, takeUntil } from 'rxjs';
import { Filters } from '../../interfaces/filters.interface';

type OtherFilters = Omit<Filters, 'title'>;
type OtherFiltersFormGroup = FormGroupObject<OtherFilters>;

@Component({
  selector: 'app-other-filters',
  templateUrl: './other-filters.component.html',
  styleUrls: ['./other-filters.component.scss']
})
export class OtherFiltersComponent implements OnInit, OnDestroy {

  @Input() set otherFilters(filters: OtherFilters) { this.form.setValue(filters); }
  @Output() otherFiltersChange = new EventEmitter<OtherFilters>();

  form = new FormGroup<OtherFiltersFormGroup>({
    categories: new FormControl<string[]>([], { nonNullable: true }),
    priceRange: new FormArray([
      new FormControl(0),
      new FormControl<number | null>(null)
    ])
  })

  protected unsuscriber$ = new Subject<void>();
  protected categories$!: Observable<string[]>;

  constructor(protected store: FakeStoreService) {} 

  ngOnInit(): void {
    this.categories$ = this.store.getCategories();

    this.form.valueChanges
      .pipe(debounceTime(300), takeUntil(this.unsuscriber$))
      .subscribe(this.otherFiltersChange);
  }

  ngOnDestroy(): void {
    this.unsuscriber$.next();
    this.unsuscriber$.complete();
  }

}
