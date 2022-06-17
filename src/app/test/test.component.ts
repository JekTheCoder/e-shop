import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {

  val: string = '';

  constructor() { }

  ngOnInit(): void {

    this.f()
  }


  async f() {
    let obs = new Observable( (suscriber) => {
          suscriber.next(1);

          setTimeout( ()=>{suscriber.next(2)}, 5000 );
          setTimeout( ()=>{suscriber.next(3)}, 7000 );
          setTimeout( ()=>{suscriber.next(4)}, 8000 );
          setTimeout( ()=>{suscriber.next(6)}, 10000 );

          setTimeout( ()=>{ suscriber.complete() }, 13000 );
    });

    await obs.subscribe({
      next: (v)=> { console.log(v) },
      complete: () => { console.log("is Completed"); this.val = 'dwadwa' }
    });

    

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes detected')
  }

}
