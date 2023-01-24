// 1) Event capturing means propagation of event is done from ancestor elements to child element (outer to inner) in the DOM, while Event bubbling means propagation is done from child element to ancestor elements (inner to outer) in the DOM.

// 2) An event listener is basically a function that waits for an event to occur. That event can be anything like a mouse click event, submitting a form, pressing keys of a keyboard, etc.

// 3) An event listener contains three parameters and it can be defined using the following syntax.

// <element>.addEventListener(<eventName>, <callbackFunction>, {capture : boolean});

// -> <element>: The element to which an event listener is attached.
// -> <eventName>: It can be ‘click’,’key up’,’key down’ etc. events.
// -> <callbackFunction>: This function fires after the event happened.
// -> {capture: boolean}: It tells whether the event will be in the capture phase or in the bubbling phase (optional)

// 4) The event capturing occurs followed by event bubbling. If {capture: true}, event capturing will occur else event bubbling will occur. Both can be prevented by using the stopPropagation() method.

document.querySelector('#grandparent').addEventListener(
  'click',
  () => {
    console.log('GrandParent clicked..!!')
  },
  false
)

document.querySelector('#parent').addEventListener(
  'click',
  (e) => {
    console.log('Parent clicked..!!')
    e.stopPropagation()
  },
  false
)

document.querySelector('#child').addEventListener(
  'click',
  () => {
    console.log('Child clicked..!!')
  },
  false
) 


