
const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.setFullName = function(x) {
        firstAndLast=x;
        return firstAndLast;
    };
    this.setFirstName = function(x) {
        let fal=firstAndLast.split(' ')
        let sfn=x.split(' ');
        let retsfn=sfn[0]+" "+fal[1];
        firstAndLast=retsfn;
        return  firstAndLast
    };
    this.setLastName = function(x) {
        let fal=firstAndLast.split(' ')
        let retsfn=fal[0]+" "+x;
        firstAndLast=retsfn;
        return  firstAndLast
    };
    this.getFullName = function() {
      return firstAndLast ;
    };
    this.getFirstName = function() {
      let k=firstAndLast.split(' ')
      k=k[0]
      return k ;
    };
    this.getLastName = function() {
        let k=firstAndLast.split(' ')
        k=k[1]
        return k ;
    };
  };
  const bob = new Person('Bob Ross');
  bob.setFirstName("Haskell")
  bob.setFirstName("ramesh")
  bob.setLastName("kumar mahato")

  console.log(bob.getFullName())
