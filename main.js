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

//Part 4 Flickr Photos

document.getElementById('flickrpics').addEventListener('click', (event) => {
  event.preventDefault()
  let url = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=punctuation,atsign&format=json&jsoncallback=?'
  //added JSONP to callback
  $.getJSON(url)
  .then(data => {
    console.log(data.items)
    const items = data.items
    let feed = ``
    items.forEach(() => {
      console.log('link', items.link)
    })
  })
})