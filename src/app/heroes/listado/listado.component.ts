import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['SpiderMan','Hulk','CartMan','Batman'];
  heroeRemoved: string = '';

  Remove(): void{

    this.heroeRemoved = this.heroes.pop() || '';


  }
}
