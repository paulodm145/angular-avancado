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
          subscriber.complete(); /** termina a comunicação com o Observable */
        } else {
          subscriber.error('Ops! Deu erro!');
        }
    })
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario> {
    
    return new Observable(subscriber => {
      if (nome === 'Admin') {

        /** Tipo do Objeto Trabalhado */
        let usuario = new Usuario(nome, email); 

        setTimeout(() => {
          subscriber.next(usuario);
        }, 1000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 2000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 3000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 4000);

        setTimeout(() => {
          subscriber.next(usuario);
        }, 5000);

        setTimeout(() => {
          subscriber.complete();
        }, 5000);

        

      } else {
        subscriber.error('Ops! Deu erro!');
      }
    });
  }


  /** **************************** */

  ngOnInit(): void {

    this.minhaPromisse('Paulo').then(
      result => console.log(result)
    )

    this.minhaPromisse('Jose').then(
      result => console.log(result)
    ).catch(error => console.log('Promisse 2: Você não é o Paulo'))

    /** Primeira Instrução Lógica trás o sucesso e a segunda trás o erro */
    this.minhaObservable('Paulo').
      subscribe(result => console.log(result), 
      erro => console.log(erro),
      () => console.log('FIM !') );

    const observer = {
      next: (valor: any) => console.log('Next: ', valor),
      erro: (erro: any) => console.log('Erro: ', erro),
      complete: () => console.log('FIM !')
    }

    /* const obs = this.minhaObservable('Paulo'); */

    const obs = this.usuarioObservable('Admin', 'admin@admin.com');
    const subs = obs.subscribe(observer);

    setTimeout(() => {
      /** è possivel adicionar uma subscription filha */
      subs.unsubscribe(); /** Não é o mesmo que o complete. Ele encerra antes do complete */
      console.log('Conexão fechada: ' + subs.closed) /** sub.closed é um flag que retorna um valor boleano */
    }, 3500);
  
  }

  // escrever(texto: string) {
  //   console.log(texto);
  // }

}

export class Usuario {

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }

  nome: string;
  email: string;

}


