import { Component, Input, OnDestroy } from '@angular/core';
import { FakeStoreService, Question } from '@common/services/fake-store.service';
import { map, Subject, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnDestroy {

  @Input('question') set questionSetter(question: Question) { this.question = question; this.votes$.next(question.votes); }
  protected question?: Question;

  protected votes$ = new ReplaySubject<number>(1);
  protected unsuscriber$ = new Subject<void>();

  protected vote: boolean | null = null;

  constructor(protected store: FakeStoreService) { }

  ngOnDestroy(): void {
      this.unsuscriber$.next();
      this.unsuscriber$.complete();
  }

  rate(vote: boolean) {
    if (vote === this.vote) { this.vote = null; return }

    this.vote = vote;

    this.store.rateQuestion(this.question!.id, vote)
      .pipe(
        takeUntil(this.unsuscriber$),
        map(value => value.votes)
      )
      .subscribe({
        next: v => this.votes$.next(v),
        error: e => this.votes$.error(e),
      });
  }

  
} 
