function f() {
  alert( this );  
}

let user = {
  g: f.bind(null)
};

user.g();

// не понятно что будет если передать в bind(null).