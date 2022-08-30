// #observable emits data
// #observer receive the data


// import observable
// import { Observable } from "rxjs"; 

// declare new instance of observable class

// const observable=new Observable((subscriber)=>{
//     subscriber.next('Hello') // hello is emmited to subscriber i.e observer
//     subscriber.error('Error is thrown')
//     subscriber.complete() // terminate observable
// });

// observable.subscribe({ // allow us to pass an observer i.e. an object
//     // Pass an object to the observable,
//     // which contains a function next
//     // observable can be partial
//     next:(value)=>{
//         console.log(value)
//     },

//     complete:()=>{
//         console.log('Observable is complete')
//     },

//     error:(err)=>{
//         console.error('err')
//     }

// })

// // Relationship between observer and observable is push based.

// -------------------------------------------------------------------
//                  Sending Async Data from Observable
// -------------------------------------------------------------------

// const observable=new Observable((subscriber)=>{
//     // send data at every 1 s
//     const id= setInterval(()=>{
//         subscriber.next('Test')

//         console.log('Memory Leak')

//     },1000)

//     // subscriber.complete(); // Even after calling complete function
//         // set interval persists leading to memory leakage
//         // to prevent that
//     return ()=>{
//         clearInterval(id);
//     }
//     // above function runs after completion of observables or
//     // after unsubscribing

// });

// const subs=observable.subscribe({
//     next:(val)=>{
//         console.log(val);
//     },
//     error:(err)=>{
//         console.error(err);
//     },
//     complete:()=>{
//         console.log('Observable terminated')
//     }
// })

// setTimeout(()=>{
//     subs.unsubscribe(); // unsubscribing observable
// },4000)

// -----------------------------------------------------------------------
//                          Declarative approach
// -----------------------------------------------------------------------

// import { interval, timer,from} from "rxjs";


// const observable=new interval(1000);

// const subs=observable.subscribe(
//     console.log    
// )
// const observable=timer(1000);

// timer(0,1000) == interval(1000);

// const observable=from(fetch('https://jsonplaceholder.typicode.com/todos/'));


// ----------------------------------------------------------------------------------
//                              Flatterning Operators
// ----------------------------------------------------------------------------------


/**
 * Operator for subscribing inner operator
 */

import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const button=document.querySelector('#btn');

const observable=fromEvent(
    button,'click'
).pipe(
    map(()=>{
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/')
    })
)


const subs=observable.subscribe({
    next:(val)=>{
        val.subscribe(console.log);
        // console.log(val);
    },
    error:(er)=>{
        console.log(er);
    },
    complete:()=>{
        console.log('Completed...')
    }
})


// Merge Map Operator 



// Switch Map Operator ( 1 req. at a time)


// Concat Map Operator 



// Exaush Map Observable