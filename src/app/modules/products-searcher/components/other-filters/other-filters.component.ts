import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupObject } from '@common/types/form-group';
import { Filters } from '../../interfaces/filters.interface';

type OtherFilters = Omit<Filters, 'title'> & { categories: string[] };

type OtherFiltersFormGroup = FormGroupObject<OtherFilters>;

@Component({
  selector: 'app-other-filters',
  templateUrl: './other-filters.component.html',
  styleUrls: ['./other-filters.component.scss']
})
export class OtherFiltersComponent implements OnInit {

  @Output() otherFiltersChanges = new EventEmitter<OtherFilters>();

  form: FormGroup = new FormGroup<OtherFiltersFormGroup>({
    categories: new FormControl<string[]>([], { nonNullable: true })
  })

  constructor() {} 

  ngOnInit(): void {
    this.form.value
  }

}
