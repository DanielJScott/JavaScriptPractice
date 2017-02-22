
//config is an object that contains parameters with the values for
//initializing a new object

function Character(config) {
    this.gender = config.gender;
    this.name = config.name;
    this.age = config.age;
    this.weight = config.weight;
    this.height = config.height;
    this.race = config.race;
    this.job = config.job;
}


Character.prototype.credentials = function () {
    console.log("Hi, my name is " + this.name + ". I'm " + this.age +
                " years old.  I weigh " + this.weight + " and I'm " +
                this.height + " tall.  Once upon a time, I was a " + this.job);
}



function randomSelector () {

  //the selector is the tool by which ever characteristic will be chosen
    function selector (min,max) {
        return min + (Math.floor(Math.random() * max));
    };

  // names are not race specific yet
    const maleName = ["Hernando", "Scotty", "John", "Helmut", "Maurice", "Lucas",
    "Vic", "Howard", "Chris", "Corey", "Adolf", "Billie", "Gustavo", "Malcolm", "Earl",
    "Ezra", "Jean-Baptiste", "Carl", "Shane", "Castor"];

    const femaleName = ["Krystal", "Jill", "Wednesday", "Alice", "Shannon",
    "Darlene", "Pat", "Lois", "Andrea", "Ruth", "Ruby", "Nicole", "Kimber",
    "Shelbey", "Anise", "Lucy", "Eliza", "Minnie"];

    const lastName = [" Lucas"," Caldwell"," Logan"," Garza"," Sanders",
    " Wood"," Hart"," Schwartz"," Fisher"," Boone"," Lawrence",
    " Valdez"," Dixon"," Ortiz"," Patterson"," Chambers"," Renshaw"," Day",
    " Johnson"," Starling"," Hamblin", " Hartmann", " MacGuire", " Bong",
    " Troy"];

  //someone has a tendency to make all their characters white.  This is necessary
    const genome = ["White" , "Black" , "Asian" , "Hispanic" , "Indian" , "Arabic",
    "Aboriginal" , "Mediteranian" , "Mixed"];

    const profession = ["soldier", "engineer", "paramedic", "police fficer", "gambler",
    "assassin", "construction worker" , "firefigher" , "bum" , "programmer" ,
    "artist" , "prostitute" , "pimp" , "boxer" , "smuggler" , "teacher" ,
    "actor" , "taxi driver" , "locksmith" , "politician" , "smuggler" , "pilot",
    "celebrity" , "daredevil" , "fencer" , "architect" , "machinist" , "mechanic"];
  //defining variables for the function


    //This translates a base value in inches to feet and inches
    //The number parameter determines the minimum and maximum height
    //minimum height base at 4'10"  max at 6'0"
    function imperial(num) {
        let total = num + selector(58,14);
        let feet = Math.floor(total / 12);
        let inches = total % 12;
        return config.height = feet + "'" + inches + '"';
      };

    const config = {
        age: selector(14, 46),
        race: genome[selector(0, genome.length)],
        job: profession[selector(0, profession.length)],
    };

    if (selector(0,2) < 1) {
      config.gender = "male";
      config.name = maleName[selector(0, maleName.length)] + lastName[selector(0, lastName.length)];
      config.weight = selector(120, 140) + "lbs.";
      config.height = imperial(6);
      if (config.age < 20) {
        config.job = "child";
      }
    }else{
      config.gender = "female";
      config.name = femaleName[selector(0, femaleName.length)] + lastName[selector(0, lastName.length)];
      config.weight = selector(90, 110) + "lbs.";
      config.height = imperial(0);
      if (config.age < 20) {
        config.job = "child";
      }
    }
    return new Character(config);

}



const person = randomSelector();

person.credentials();
