//Part 1: Form Validation
const upperCase = /[A-Z]/g
const lowerCase = /[a-z]/g
const number = /[\d]/g
const specialChar = /[_+-.,!@#$%^&*();\/|<>"']/g
const moreNum = /[\d{2,}]/g
const nonDigit = /[\D]/g

function ckUsername(username) {
  if(username.value === '') {
    alert('This field cannot be empty')
    return false
  }if (upperCase.test(username.value) === false || lowerCase.test(username.value) === false) {
    alert('Username must include an Uppercase and Lowercase letter(A-Z)')
    return false
  }if(number.test(username.value) === false) {
    alert('Username must include at least 1 number (0-9)')
    return false
  }if(specialChar.test(username.value) === true) {
    alert('Username MUST NOT include any special characters(_+-.,!@#$%^&*();\/|<>\"\') or spaces')
    return false
  }
  return true
}
function ckPassword(password) {

  if(password.value === '') {
    alert('This field cannot be empty')
    return false
  }if(moreNum.test(password.value) === false) {
    alert('Password must include 2 or more numbers')
    return false
  } if(password.value > 8 || password.value < 15) {
    alert('Password must be between 8-15 characters in length')
    return false
  }
  return true
}
function ckNumber(usernumber) {

  if(usernumber.value === '') {
    alert('This field cannot be empty')
    return false
  }if(nonDigit.test(usernumber.value) === true) {
    alert('Usernumber MUST ONLY include numbers')
    return false
  } if(usernumber.value > 35 && usernumber.value < 37) {
    alert('Password must be between 8-15 characters in length')
    return false
  }
  return true
}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  if(ckUsername(loginform.username)) {
    console.log('username yay')
  }if(ckPassword(loginform.password)) {
    console.log('yay password')
  }if(ckNumber(loginform.usernumber)) {
    console.log('yay usernumber')
  }

})


// Part 2: cPanel.net
document.getElementById('findoutmore').addEventListener('click', () => {
  const site = `<iframe class="container" src="http://localhost:3000"></iframe>`
  document.getElementById('popup').innerHTML = site
  YUI().use('panel', function (Y) {
    let panel = new Y.Panel({
      srcNode : '#popup',
      width: 400,
      height: 400,
      centered: true,
      render: true,
      modal: true,
      hideOn: [{eventName: 'clickoutside'}, {node: Y.one('#findoutmore')}]
    })
  })
})

//Part 3 The Array

var thisArray = [ 'T','h','a','i','s','b',' ','i','c','s',' ','a','t','h','e','e',' ','t','s','o','r','n','g','t',' ','t','n','h','a','s','t',' ','o','n','e','o','v','e','a','r',' ','f','e','n','a','d','s','p',',',' ','p','y','e','i','s',' ','p','i','t','o',' ','g',' ','o','e','i','s',' ','t','o','n','e',' ','a',' ','n','d',' ',' ','o','i','n',' ','a','m','y',' ',' ','f','a','r','i',' ','e','n','o','d','s','i',' ','S',' ','o','m','a','e',' ','a','p','e',' ','o','p','a','l','e','r',' ','s',' ','t','a','a','r','t',' ','e','d','u',' ','s',' ','i','n','g','g','i',' ','n','g','o',' ','i','t','t',',',' ',' ','n','i','o','t','h',' ','k','a','n','o',' ','w','i',' ','n','g','o',' ','w','r','h','a','i','t',' ','s','i','t','h',' ','w','r','a','s','h',' ','A',' ','n','d','a',' ','t','o','h','e',' ','y',' ','a','w','i','p','l','l','o',' ','c','r','o','n',' ','t','i','p','n','u','i','e',' ','t','s','i',' ','n','g',' ','i','n',' ','g',' ','s','i','t','h',' ','f','r','o','r',' ','e','v','t','e','r','t',' ','j','u','u','s','t','t',' ','a','b','e','l','c','a',' ','u','s','l','e']

  let i = 2
  while(i < thisArray.length) {
    thisArray.splice(i, 1)
    i += 2
  }
  document.getElementById('thisArray').innerHTML = thisArray.join('')


//Part 4 Flickr Photos

document.getElementById('flickrpics').addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('#flickrfeed').innerHTML = ''
  let url = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json&jsoncallback=?'
  //added jsoncallback=?
  $.getJSON(url)
  .then(data => {
    let feed = ''
    data.items.forEach((item) => {
      feed += `
        <div class="card">
          <div class="card-block">${item.description}</div>
        </div>
        `
      return feed
    })
    document.getElementById('flickrfeed').insertAdjacentHTML('beforeend', feed)
  })
  .catch((error) => {
    console.error(error);
  })
})
