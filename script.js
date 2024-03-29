  // Create currency convertor

  const createConvertor = (usd, uah) => {
     const sumUahToOneDollar = 26;
     const bucks = usd * sumUahToOneDollar;
     console.log("Hryvna" + ":" + bucks);
     const hryvna = uah / sumUahToOneDollar;
     console.log("Dollar" + ":" + hryvna.toFixed(1));
     return sumUahToOneDollar;
  }

  // Create function MinMax number
  function getMinMaxNumber (){
     const numbers = [1, 23, -5, 11];
     console.log("Max" + ":" + Math.max(...numbers));
     console.log("Min" + ":" + Math.min(...numbers));
     return numbers;
  }

  // Create function average number
  function getAverageNum() {
      const array1 = [1, 4, 2];
      const average = (num, sum) => num + sum/ array1.length;
      console.log(array1.reduce(average,0));
  }

  // Create recursion function
  const recurs = (begin) => {
     if(begin > 1) {
         console.log(begin);
          recurs(begin - 1);
     } else {
         console.log(begin);
     }
  }
  recurs(10);

  // Some code
  const users = {
   1: {
     name: 'Roman',
     lastName: 'Lurov',
     otherData: {
       role: 'student'
     }
   },
   2: {
     name: 'Ivan',
     lastName: 'Bondarenko',
     otherData: {
       role: 'student'
     }
   },
   3: {
     name: 'Roman',
     lastName: 'Lurov',
     otherData: {
       role: 'student'
     }
   },

   4: {
     name: 'Oleg',
     lastName: 'Murko',
     otherData: {
       role: 'student'
     }
   },
   5: {
     name: 'Kurz',
     lastName: 'Smith',
       otherData: {
       role: 'student'
     }
   },
  };

  Object.keys(users).forEach(function(key) {
   const user = users[key];

   if(user) {
      console.log(key +":" + 'name: ', user.name);
      console.log('last name: ', user.lastName);
      console.log('role: ', user.otherData.role);
   }
  })

  // Implement recursive function
  function print(string, number) {
     var pr = " ";
     for(i = 0; i < number; i++) {
         pr += string;
         console.log(pr);
     }
  }
  print(":)", 10);

  // Implement function fibonacci numbers
  function fibon() {
      var fibo = [0,1];
      for(n = fibo.length; n < 10; n++){
          fibo[n] = fibo[n - 1] + fibo[n - 1];
      }
      console.log(fibo);
  }
  fibon()

  // Function factorial number
  function factorial(n) {
     var p = 1;
     for(i = 2; i <= n; i++)
         p *= i;
     return p;
  }
  console.log(factorial(4));

  // Operator Spred
  var arr = ["Banana", "Orange", "Watermelon"];
  var arr2  = ["Head", "Finger", "Neck", "Ass", ...arr];
  console.log(arr2);

  // Operator Rest
  var log = (a, b, ...rest) => {
   console.log(a, b, rest);
  };
  log('test','just','panic','scary','strong','big')
