import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

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
        reject('Promisse: Ops! Você não é o Paulo !');
      }
    })
  }

    /** MINHA PRIMEIRA OBSERVABLE */
  /** Enquanto houver informações */
  minhaObservable(nome: string) : Observable<string> {
    return new Observable(subscriber => {
        if(nome === 'Paulo') {
          subscriber.next('Olá Mundo!'); /** Callback para o subscriber receber a informação */
          subscriber.next('Olá Mundo! Mais uma vez ');
          setTimeout(() => {
            subscriber.next('Respostas com Delay - observable');
          }, 5000);
        } else {
          subscriber.error('Ops! Deu erro!');
        }
    })
  }

  ngOnInit(): void {
    this.minhaPromisse('Paulo').then(
      result => console.log(result)
    )

    this.minhaPromisse('Jose').then(
      result => console.log(result)
    ).catch(error => console.log('Promisse 2: Você não é o Paulo'))

    /** Primeira Instrução Lógica trás o sucesso e a segunda trás o erro */
    this.minhaObservable('Paulo').subscribe(result => console.log(result), erro => console.log(erro));

    const observer = {
      next: (valor: any) => {
        return console.log('Next: ', valor);
      },
      erro: (erro: any) => {
        return console.log('Erro: ', erro);
      },
      complete: () => console.log('FIM !')
    }
  }



 

}
