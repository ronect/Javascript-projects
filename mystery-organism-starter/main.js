// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//Factory function
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      const current = this.dna[index];
      let newBase = returnRandBase();
      while (current === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
      return this.dna;
    },
    compareDNA(otherOrganism) {
      let identical = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherOrganism.dna[i]) {
          identical++;
        }
      }
      const percentage = (identical / this.dna.length) * 100;
      console.log(
        `specimen #1 and specimen #2 have ${percentage} DNA in common.`
      );
    },
    willLikelySurvive() {
      let matches = 0;
      this.dna.forEach((letter) => {
        if (letter === "C" || letter === "G") {
          matches++;
        }
      });
      return matches / this.dna.length >= 0.6;
    },
  };
};
const organisms = [];
for (let i = 1; i <= 30; i++) {
  let organism = pAequorFactory(i, mockUpStrand());
  while (!organism.willLikelySurvive()) {
    organism.dna = mockUpStrand();
  }
  organisms.push(organism);
  console.log(organism,organism.willLikelySurvive())
}

