// Note: every step should be ran seperately with other steps been commented,
// This is very similar to Array Destructuring.
const address = {
  street: '45',
  city: 'Los Angeles',
  country: 'America'
}

// Now we have an address Object.
// 1) The Object destructuring is a useful JavaScript feature to extract properties from Objects and bind them to variables.

// Normal way
//-----------
// const Street = address.street
// const city = address.city
// const country = address.country
// console.log(`Street: ${Street}, City: ${city}, Country: ${country}`);

// Same code using Destructing approach of ES6
//---------------------------------------------
// const { street, city, country } = address;
// console.log(`Street: ${street}, City: ${city}, Country: ${country}`);

// We can also assign those separate variable at left to another alias or short const variables
//-----------------------------------------------------------------------------------------------
// const { street: st, city: ct, country: cty } = address
// console.log(`Street: ${st} City: ${ct}, Country: ${cty}`)

// using spread operator
//-----------------------
const { street, ...city_Country } = address
console.log(
  `Street: ${street} City: ${city_Country.city}, Country: ${city_Country.country}`
)
