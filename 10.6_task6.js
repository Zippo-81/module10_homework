const mas = ['Roman','Roman', 29];
let flag = true;

for (let i = 1; i < mas.length; i++) {
    if (mas[i] !== mas[0]) { 
        flag = false;
        break; 
    }
};
console.log(flag);
