let h2 = document.querySelector('h2');
var map;

function success(pos) {
  console.log(-23.186042, -50.657001);
  h2.textContent = `Latitude:${-23.186042}, Longitude:${-50.657001}`;

  if (map === undefined) {
    map = L.map('mapid', {
      minZoom: 18,
      maxZoom: 20,
    }).setView([-23.186042, -50.657001], 18);
  } else {
    map.remove();
    map = L.map('mapid').setView([-23.186042, -50.657001], 30);
  }

  // Adiciona um layer OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    noWrap: true, // impede que o mapa se repita horizontalmente
  }).addTo(map);

  var blocoP = L.polygon(
    [
      [-23.18569, -50.65733],
      [-23.18568, -50.65715],
      [-23.18607, -50.65711],
      [-23.18608, -50.65729],
    ],
    {
      fillColor: '#90ee90', // verde claro
      fillOpacity: 1, // 50% de opacidade
    }
  ).addTo(map);

  blocoP.on('mouseover', function (e) {
    blocoP.setStyle({ fillColor: '#64e864' });
  });

  blocoP.on('mouseout', function (e) {
    blocoP.setStyle({ fillColor: '#90ee90' });
  });

  var blocoK = L.polygon(
    [
      [-23.18594, -50.65672],
      [-23.18603, -50.65659],
      [-23.18625, -50.65678],
      [-23.18615, -50.6569],
    ],
    {
      fillColor: '#90ee90', // verde claro
      fillOpacity: 1, // 50% de opacidade
    }
  ).addTo(map);

  blocoK.on('mouseover', function (e) {
    blocoK.setStyle({ fillColor: '#64e864' });
  });

  blocoK.on('mouseout', function (e) {
    blocoK.setStyle({ fillColor: '#90ee90' });
  });

  var myIcon = L.icon({
    iconUrl: 'simulator.png',
    iconSize: [15, 20],
  });

  L.marker([-23.186042, -50.657001], { icon: myIcon }).addTo(map);

  blocoP.bindPopup(
    '<div class="popup-content">' +
      'Bloco K. <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">2°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">1°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">Térreo</button>' +
      '</div>'
  );

  var polyline = L.polyline(
    [
      [-23.1861, -50.65721],
      [-23.18629, -50.65719],
      [-23.18631, -50.6576],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);
}

function mostrarImagem() {
  // crie o elemento div com a imagem
  const divImagem = document.createElement('div');
  divImagem.id = 'imagem';
  document.body.appendChild(divImagem);

  // remova o elemento div quando clicar fora da imagem
  divImagem.addEventListener('click', function () {
    document.body.removeChild(divImagem);
  });
}

function error(err) {
  console.log(err);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
  geolocationOptions: {
    wifi: true,
    cellular: true,
    ip: true,
  },
};

var watchID = navigator.geolocation.getCurrentPosition(success, error, options);

console.log(watchID);

// use navigator
