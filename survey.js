const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {

  rl.question('What is an activity you enjoy doing? ', (activity) => {
  

    rl.question('What do you listen to while doing that? ', (listen) => {
  

      rl.question('Which meal is your fav? ', (meal) => {
    

        rl.question('What is your fav thing to eat for the meal? ', (food) => {


          rl.question('What is your superpower?', (power) => {

            console.log(`Your name is ${name}, nice meeting you! Your fav activity is ${activity} and you listen to ${listen} while doing that. Your fav meal is ${meal} and food is ${food}.\n Your super power is ${power}`);

            rl.close();
          });
        });
      });
    });
  });
});


