# RXJS - Observables
promise retornar uma reposta em caso de sucesso ou erro. È um **Callback** simples, trás o resultado ou falha, promessa de um resultado  
Observable: mais completo, reativo, é um promisse que pode ser convertido em promisse, retornar dados, a observable continua a entrega os dados , permanecendo viva a cada entrega.   
Observable pode ser cancelado. Retry: nova tentativa de execução da Observable após o erro. Muito mais complexo. Push e pull(enviar e receber).  

## Observares  

Existe a observable e o **OBSERVER(OBSERVADOR)**, para que um "observer" exista é necessário a existência de um "Observable" e um "subscriber"  
**Observer:** Nada mais é que uma estrutura voltada a trabalhar com a subscription de uma OBSERVABLE  

| **PROMISSES**                  |  **OBSERVABLES**         |
|--------------------------------|--------------------------|
| Nativas do ES6                 | Objeto Reativo RXJS      |
| EAGER                          | LAZY                     |
| Processa um único evento       | Processa N Eventos       |
| Não aceita cancelamento        | Aceita Cancelamento      |
| Não faz retry                  | Faz Retry                |

## Outras Anotações 
Cria um novo projeto com o mínimo de configurações do Angular: ng new RXJS --minimal=true  
