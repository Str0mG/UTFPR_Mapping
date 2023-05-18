const h2 = document.querySelector('h2');
let map;

const success = pos => {
  const { latitude, longitude } = pos.coords;
  console.log(watchID);
  console.log(latitude, longitude);

  h2.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;

  if (map === undefined) {
    map = L.map('mapid', {
      minZoom: 19,
      maxZoom: 20,
    }).setView([latitude, longitude], 18);
  } else {
    map.remove();
    map = L.map('mapid').setView([latitude, longitude], 30);
  }

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution:
  //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);

  // Build bloco P
  const blocoP = L.polygon(
    [
      [-23.18569, -50.65733],
      [-23.18568, -50.65715],
      [-23.18607, -50.65711],
      [-23.18608, -50.65729],
    ],
    {
      fillColor: '#90ee90',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoP.on('mouseover', e => {
    blocoP.setStyle({ fillColor: '#64e864' });
  });

  blocoP.on('mouseout', e => {
    blocoP.setStyle({ fillColor: '#90ee90' });
  });
  // Build bloco D
  const blocoDa = L.polygon(
    [
      [-23.18561, -50.65668],
      [-23.18569, -50.65656],
      [-23.18577, -50.65663],
      [-23.18568, -50.65674],
    ],
    {
      fillColor: '#faae10',
      fillOpacity: 1,
    }
  ).addTo(map);

  // Build bloco D
  const blocoD = L.polygon(
    [
      [-23.18582, -50.65695],
      [-23.18565, -50.6568],
      [-23.18574, -50.65668],
      [-23.18591, -50.65682],
    ],
    {
      fillColor: '#90ee90',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoD.on('mouseover', e => {
    blocoD.setStyle({ fillColor: '#64e864' });
  });

  blocoD.on('mouseout', e => {
    blocoD.setStyle({ fillColor: '#90ee90' });
  });

  // Build bloco K
  const blocoK = L.polygon(
    [
      [-23.18594, -50.65672],
      [-23.18603, -50.65659],
      [-23.18625, -50.65678],
      [-23.18615, -50.6569],
    ],
    {
      fillColor: '#90ee90',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoK.on('mouseover', e => {
    blocoK.setStyle({ fillColor: '#64e864' });
  });

  blocoK.on('mouseout', e => {
    blocoK.setStyle({ fillColor: '#90ee90' });
  });

  // Put icon in map
  const myIcon = L.icon({
    iconUrl: 'simulator.png',
    iconSize: [15, 20],
  });

  L.marker([latitude, longitude], { icon: myIcon }).addTo(map);

  blocoP.bindPopup(
    '<div class="popup-content">' +
      'Bloco K. <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">2°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">1°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">Térreo</button>' +
      '</div>'
  );

  const polyline = L.polyline(
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
};

const mostrarImagem = () => {
  const divImagem = document.createElement('div');
  divImagem.id = 'imagem';
  document.body.appendChild(divImagem);

  divImagem.addEventListener('click', () => {
    document.body.removeChild(divImagem);
  }); 
};

const error = err => {
  console.log(err);
};

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
  geolocationOptions: {
    wifi: true,
    cellular: true,
    ip: true,
  },
};

const watchID = navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);
