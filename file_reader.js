const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstName, lastName, age, hobbies;
fs.readFile("./firstname.txt", "utf-8").then((data) => {
  firstName = data;
  return fs.readFile("./lastname.txt", "utf-8").then((data) => {
    lastName = data;
    return fs.readFile("./age.txt", "utf-8").then((data) => {
      age = data;
      return fs.readFile("./hobbies.txt", "utf-8").then((data) => {
        hobbies = JSON.parse(data);
        console.log(
          `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
        );
      });
    });
  });
});

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function introduceJohn() {
  try {
    const firstName = await fs.readFile("./firstname.txt", "utf-8");
    const lastName = await fs.readFile("./lastname.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");
    let hobbies = JSON.parse(await fs.readFile("./hobbies.txt", "utf-8"));
    console.log(
      `${firstName} ${lastName} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  } catch (error) {
    console.log(error);
  }
}

introduceJohn();
