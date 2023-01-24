// What is event delegation in JavaScript?
//----------------------------------------

// Event Delegation is basically a pattern to handle events efficiently. Instead of adding an event listener to each and every similar element, we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.

// Benefits of event delegation:
//----------------------------- 
// 1) Improves memory space.
// 2) Mitigates risk of performance bottle neck.
// 3) DOM manipulation.
// 4) When elements gets added dynamically, the process of adding events is slow.

// Limitations: 
//-------------
// 1) All the events are not bubbled up, some events like blur, focus are not bubbled up.
// 2) if e.stopPropogation is used in child, then events are not bubbled up.

// 1) Basic example using a list: 
//-------------------------------
document.querySelector('#categories').addEventListener('click', 
  (e) => {
      if(e.target.tagName === 'LI') {
        window.location.href = '/' + e.target.id
      }
}, 
false
); // -> Event Bubbling


//-------------------------------------------------------------------------------------------------


// 2) Another example with input fields:
//--------------------------------------
document.querySelector('#inputFields').addEventListener('keyup', (e) => {

  console.log(e)

  if(e.target.dataset.uppercase != undefined) {

    e.target.value = e.target.value.toUpperCase()
  }
}, false); // -> Event Bubbling