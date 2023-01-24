// importing Teacher class and making its Object here.
// note: all this won't run since its not a React app 
import {Teacher} from './Teacher';

const teacher = new Teacher('Ananya', 21, 'Malaysia', 'BSc')
console.log(teacher)
teacher.talk()
teacher.teach()
teacher.walk()
