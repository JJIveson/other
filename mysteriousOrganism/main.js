// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

let validSpecies = [];

//Create a factory function with two parameters that returns an object with two properties. //Create a mutate method to swap a DNA base with random base
function pAequorFactory(num, dnaBases) {
  return species = {
    specimenNum: num,
    dna: dnaBases,
    //method() {method actions}
    mutate() {
      let desiredIndex = Math.floor(Math.random()*species.dna.length);
      let randBase = species.dna[desiredIndex];     
      let replacement = returnRandBase();
      while (replacement === randBase) {
        replacement = returnRandBase();  
        }
      species.dna[desiredIndex] = replacement;
      },
    compareDNA(arr) {
      let compareA = this.dna;
      let compareB = arr.dna;
      let num = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (compareA[i] === compareB[i]) {
          num+=1;
          }
        }
      let percentSame = (num*100)/15;
      console.log('Specimen #' + this.specimenNum + ' and #' + arr.specimenNum + ' have ' + percentSame.toFixed(2) + '% DNA in common.');
      },
    willLikelySurvive() {
      let sample = this.dna;
      let num = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (sample[i] === 'C' || sample[i] === 'G') {
          num++;
          }
        }
      let totalBase = (num)/15;
      if (totalBase >= 0.6) {
        console.log(true);
        return validSpecies.push(this.specimenNum)
      } else {
        console.log(false);
      } 
      
    },
  }
}

     
//console.log(pAequorFactory(1, mockUpStrand())); 

/*
      }*/

const pAequor1 = pAequorFactory(1, mockUpStrand());
const pAequor2 = pAequorFactory(2, mockUpStrand());
const pAequor3 = pAequorFactory(3, mockUpStrand());
const pAequor4 = pAequorFactory(4, mockUpStrand());
const pAequor5 = pAequorFactory(5, mockUpStrand());
const pAequor6 = pAequorFactory(6, mockUpStrand());
const pAequor7 = pAequorFactory(7, mockUpStrand());
const pAequor8 = pAequorFactory(8, mockUpStrand());
const pAequor9 = pAequorFactory(9, mockUpStrand());
const pAequor10 = pAequorFactory(10, mockUpStrand());
//console.log(pAequor1);
//console.log(pAequor2);
pAequor1.compareDNA(pAequor2);
//console.log(pAequor3);
pAequor1.willLikelySurvive();
pAequor2.willLikelySurvive();
pAequor3.willLikelySurvive();
pAequor4.willLikelySurvive();
pAequor5.willLikelySurvive();
pAequor6.willLikelySurvive();
pAequor7.willLikelySurvive();
pAequor8.willLikelySurvive();
pAequor9.willLikelySurvive();
pAequor10.willLikelySurvive();
console.log(validSpecies);


/* ARROW FUNCTION:
let pAequorFactory = (num, dnaBases) => ({
  specimenNum: num,
  dna: dnaBases,
  //add methods later on:
});

*/