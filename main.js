//Part 2: cPanel.net
// document.getElementById('findoutmore').addEventListener('click', () => {
//   const site = `<iframe src="https://cpanel.net/"></iframe>`
//   document.getElementById('popup').innerHTML = site
// })
// YUI.use('panel', function (Y) {
//   let panel = new Y.Panel({
//         srcNode : '#popup',
//         width   : 400,
//         centered: true,
//         render  : true,
//         modal  : true,
//         hideOn: [{eventName: 'clickoutside'}, {node: Y.one('#findoutmore')}]
//     })
// })

//Part3 The array

var thisArray = [ 'T', 'h', 'a', 'i', 's', 'b', ' ', 'i', 'c', 's', ' ', 'a', 't', 'h', 'e', 'e',
  ' ', 't', 's', 'o', 'r', 'n', 'g', 't', ' ', 't', 'n', 'h', 'a', 's', 't', ' ', 'o', 'n', 'e', 'o',
  'v', 'e', 'a', 'r', ' ', 'f', 'e', 'n', 'a', 'd', 's', 'p', ',', ' ', 'p', 'y', 'e', 'i', 's',
  ' ', 'p', 'i', 't', 'o', ' ', 'g', ' ', 'o', 'e', 'i', 's', ' ', 't', 'o', 'n', 'e', ' ', 'a',
  ' ', 'n', 'd', ' ', ' ', 'o', 'i', 'n', ' ', 'a', 'm', 'y', ' ', ' ', 'f', 'a', 'r', 'i', ' ', 'e',
  'n', 'o', 'd', 's', 'i', ' ', 'S', ' ', 'o', 'm', 'a', 'e', ' ', 'a', 'p', 'e', ' ', 'o', 'p', 'a', 'l',
  'e','r',' ','s',' ','t','a','a','r', 't',' ','e','d','u',' ','s',' ','i','n','g','g','i',' ','n','g','o',' ','i','t','t',',',' ',' ','n','i','o','t','h',' ','k','a','n','o',' ','w','i',' ','n','g','o',' ','w','r','h','a','i','t',' ','s','i','t','h',' ','w','r','a','s','h',' ','A',' ','n','d','a',' ','t','o','h','e',' ','y',' ','a','w','i','p','l','l','o',' ','c','r','o','n',' ','t','i','p','n','u','i','e',' ','t','s','i',' ','n','g',' ','i','n',' ','g',' ','s','i','t','h',' ','f','r','o','r',' ','e','v','t','e','r','t',' ','j','u', 'u','s','t','t',' ','a','b','e','l','c','a',' ','u','s','l','e' ]

  let len = thisArray.length
  let count = 0
  for (var i = 0; i < len; i--) {
    count += 1
    if(count === 3) {
      delete thisArray[i]
      count = 0
    } else {
      document.getElementById('thisArray').innerHTML = thisArray[i]
    }
  }

  // let i = thisArray.length
  // while (i--) {
  // (i + 1) % 3 === 0 && thisArray.splice(i, 1)
  // }
  // console.log(thisArray)

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
        <div class="pic-card">
          <div class="pic-info">${item.description}</div>
        </div>
        `
      return feed
    })
    document.getElementById('flickrfeed').insertAdjacentHTML('beforeend', feed)
  })
})
