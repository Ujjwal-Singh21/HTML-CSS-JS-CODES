// My schedule of waking up
// =========================

let day = 'Thursday'

switch (day) {
  case 'Monday':
    console.log('Wake up at 7 a.m')
    break
  case 'Tuesday':
    console.log('Wake up at 8 a.m')
    break
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Wake up at 9 a.m')
    break
  case 'Saturday':
  case 'Sunday':
    console.log('Wake up at 11 a.m')
    break
  default:
    console.log('Wake up at ur wish buddy')
}
