import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  
  title = 'RXJS';

  minhaPromisse(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if (nome === 'Paulo') {
        setTimeout(() => {
          resolve('Seja bem vindo ' + nome);
        }, 3000);
      } else {
        reject('Ops! Você não é o Paulo !');
      }
    })
  }

  ngOnInit(): void {
    this.minhaPromisse('Paulo').then(
      result => console.log(result)
    )

    this.minhaPromisse('Jose').then(
      result => console.log(result)
    ).catch(error => console.log('Você não é o Paulo'))
  }

}
