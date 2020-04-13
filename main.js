/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = function (firstName='Anonymous', lastName='Person', age, married=false){

  return {

    firstName,
    lastName,
    age,
    married,
    goingOn(){

      return this.age +1 

    },
    ageUp(){

      return this.age++
    },

    getFullName(){

      return this.firstName + ' ' + this.lastName
    },

    marry(spouse){
this.married =true
spouse.married = true
this.spouseName = spouse.getFullName()
spouse.spouseName = this.getFullName()
    },

    divorce(exSpouse){

      this.married = false
      delete this.spouseName
      exSpouse.married = false

    delete exSpouse.spouseName
    }
  }

  
} 

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = {
  newPerson,
}
