import { interval, map, Observable, startWith, Subject, switchMap, takeUntil } from "rxjs";

export class Timer {
    private reset$ = new Subject<void>();
    private stop$ = new Subject<void>();

    public timer$: Observable<void>;

    constructor(delay: number) {
        this.timer$ = this.reset$
        .pipe(
            startWith(0), 
            switchMap(() => interval(delay).pipe(takeUntil(this.stop$))),
            map(() => undefined)
        )
    }

    reset() {
        this.reset$.next();
    }

    stop() {
        this.stop$.next();
    }

}