/* globals fetch */
var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'Darth Vader',
      'quote': 'I find your lack of faith disturbing.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  })
})

// del.addEventListener('click', function (req,res) {
//   fetch('quotes', {
//     method: 'delete',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'guid': req.params.guid
//     })
//   })
//   .then(data => {
//     console.log(data)
//   })
//   .then(function (response) {
//     res.redirect('/')
//   })
// })