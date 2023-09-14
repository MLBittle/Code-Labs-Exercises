// Observer Pattern - Build an Observable with a class. Building an observable with a function.

function createObservable () {
 
    subscribers: [],

    subscribe(fn) {
      this.subscriber.push(fn)
    },
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter((item) => item !== fn)
    },
    
    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++ ) {
        this.subscribers[i](data);
      }   
  },
};


const observer = createObservable();

const fn = (data) => {
  console.log('Callback was executed with data', data);
};

observer.subscribe(fn);

observer.broadcast("Hello from the observable.");


