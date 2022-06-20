var FVnames = []
var removeFromFavButtons = document.getElementsByClassName('remove')
for (var i = 0; i < removeFromFavButtons.length; i++) {
    var button = removeFromFavButtons[i]
    button.addEventListener('click', removeFavourite)
}
function removeFavourite(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateNames()
}
function updateNames() {
    let names = document.querySelector('.favourite-vehicles').querySelectorAll('span')
    FVnames = []
    for (var i = 0; i < names.length; i++) {
        FVnames[i] = names[i].innerText
    }
}



var addToFavButtons = document.getElementsByClassName('addToFavourite')
for (var i = 0; i < addToFavButtons.length; i++) {
    var button = addToFavButtons[i]
    button.addEventListener('click', addToFavClicked)
}
function addToFavClicked(event) {
    var button = event.target
    var vehicle = button.parentElement.parentElement

    var link = vehicle.querySelector('.linkImena')
    var name = link.querySelector('.imena').innerText

    var imageSrc = vehicle.querySelector('img').src
    addVehicleToFav(name, imageSrc)
}

function addVehicleToFav(name, imageSrc) {

    if (FVnames.includes(name)) {
        alert('You have already added this vehicle!')
        return
    }
    
    var row = document.createElement('div')
    row.classList.add('favourite-vehicle')
    var favVehicles = document.querySelector('.favourite-vehicles')
    var rowContent = `   
            <img src="${imageSrc}" alt="" class="favourite-vehicle-image">
            <span class="favourite-vehicle-title">${name}</span>
            <button class="remove">REMOVE</button>`
    row.innerHTML = rowContent
    favVehicles.append(row)

    FVnames.push(name)
    row.querySelector('button').addEventListener('click', removeFavourite)
}



function downloadFavourites() {
    var blob = new Blob([FVnames], { type: "text" })
    var href = URL.createObjectURL(blob)
    var saveButton = Object.assign(document.createElement('a'), { href, download: "FavouriteVehicles.txt" })
    saveButton.click()
}
