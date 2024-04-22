import { Component, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration:number = 0;
  @Input({required:true}) message: string = '';

  constructor(){
    console.log('constructor');
    console.log('_'.repeat(10));
  }

  ngOnChanges(changes:SimpleChanges){
    // se ejecuta durante y depués del renderizado
    console.log('NgOnChanges');
    console.log('_'.repeat(10));
    console.log(changes);
    
  }

  ngOnInit(){
    // Después del renderizado  y solo se ejecuta una vez
    // async, then, subscripciones, fetch 
    console.log('ngOnInit');
    console.log("_".repeat(20));
    console.log(`duration => ${this.duration}`);
    console.log(`duration => ${this.message}`);
  }

  ngAfterViewInit(){
    // Desúes del renderizado y ayuda evalular si el ya fueron visualizados
    console.log('ngAfterViewInit');
    console.log("_".repeat(20));
    console.log(`duration => ${this.duration}`);
    console.log(`duration => ${this.message}`);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log("_".repeat(20));
  }
}
