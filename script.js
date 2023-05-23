const InicializarMapa = pos => {
  var map;
  var { latitude, longitude } = pos.coords;
  latitude = -23.18591;
  longitude = -50.65721;

  if (map === undefined) {
    map = L.map('mapid', {
      minZoom: 17,
      maxZoom: 20,
    }).setView([latitude, longitude], 18);
  } else {
    map.remove();
    map = L.map('mapid').setView([latitude, longitude], 30);
  }

  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //   attribution:
  //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);

  // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png tmb é bom, black
  // https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png tmb é bom, white
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // you can set .my-div-icon styles in CSS
  //put html inside the icon
  // var myIcon2 = L.divIcon({
  //   className: 'my-div-icon',
  //   html: '<p>K</p>',
  //   offset: [10, 10],
  // });

  // L.marker([-23.18602, -50.65721], { icon: myIcon2 }).addTo(map);
  // Put icon in map
  const myIcon = L.icon({
    iconUrl: 'simulator.png',
    iconSize: [15, 20],
  });

  L.marker([latitude, longitude], { icon: myIcon }).addTo(map);

  const blocoCc = L.polygon(
    [
      [-23.18513, -50.6588],
      [-23.18502, -50.65752],
      [-23.18563, -50.65744],
      [-23.18547, -50.65578],
      [-23.18613, -50.6557],
      [-23.18609, -50.65514],
      [-23.1872, -50.65503],
      [-23.18733, -50.65651],
      [-23.18707, -50.65681],
      [-23.18692, -50.65713],

      [-23.18692, -50.65713],
      [-23.18682, -50.65748],
      [-23.18687, -50.65859],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 0.2,
    }
  ).addTo(map);

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

  blocoP.bindPopup(
    '<div class="popup-content">' +
      'Bloco K. <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">2°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">1°Andar</button> <br>' +
      '<button onclick="mostrarImagem()" class="utfpr-button">Térreo</button>' +
      '</div>'
  );

  // Build bloco D
  // cima,baixo -23.18560, esquerda,direita -50.65668
  const blocoDa = L.polygon(
    [
      [-23.1856, -50.65668],
      [-23.18569, -50.65656],
      [-23.18577, -50.65663],
      [-23.18568, -50.65675],
    ],
    {
      fillColor: '#faae10',
      fillOpacity: 1,
    }
  ).addTo(map);
  // Build bloco D
  const blocoDb = L.polygon(
    [
      [-23.1857, -50.65656],
      [-23.18592, -50.65626],
      [-23.18604, -50.65637],
      [-23.18581, -50.65667],
    ],
    {
      fillColor: '#baae10',
      fillOpacity: 1,
    }
  ).addTo(map);
  // Build bloco D
  const blocoDc = L.polygon(
    [
      [-23.185934, -50.656256],
      [-23.186151, -50.655982],
      [-23.186259, -50.656095],
      [-23.186047, -50.656368],
    ],
    {
      fillColor: '#4aae10',
      fillOpacity: 1,
    }
  ).addTo(map);

  // Build bloco D
  const blocoDd = L.polygon(
    [
      [-23.186259, -50.656095],
      [-23.186151, -50.655982],
      [-23.18622, -50.655896],
      [-23.186259, -50.655687],
      [-23.186392, -50.655676],
      [-23.186402, -50.655794],
      [-23.186382, -50.655918],
      [-23.186412, -50.655934],
      [-23.186432, -50.656079],
      [-23.186308, -50.6561],
      [-23.186274, -50.656089],
    ],
    {
      fillColor: '#aa123a',
      fillOpacity: 1,
    }
  ).addTo(map);

  // Build bloco D
  const blocoDe = L.polygon(
    [
      [-23.186259, -50.655687],
      [-23.186239, -50.655408],
      [-23.186368, -50.655397],
      [-23.186392, -50.655676],
    ],
    {
      fillColor: '#5a123a',
      fillOpacity: 1,
    }
  ).addTo(map);
  // Build bloco D

  const blocoI = L.polygon(
    [
      [-23.186121, -50.65654],
      [-23.186195, -50.656433],
      [-23.186422, -50.65661],
      [-23.186343, -50.656722],
    ],
    {
      fillColor: '#2a123a',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoh = L.polygon(
    [
      [-23.186195, -50.656433],
      [-23.186284, -50.656315],
      [-23.186501, -50.656508],
      [-23.186422, -50.65661],
    ],
    {
      fillColor: '#fa123a',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoG = L.polygon(
    [
      [-23.186284, -50.656315],
      [-23.186363, -50.656213],
      [-23.186585, -50.65639],
      [-23.186501, -50.656508],
    ],
    {
      fillColor: '#993366',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoN = L.polygon(
    [
      [-23.1865, -50.65729],
      [-23.18647, -50.65688],
      [-23.18675, -50.65686],
      [-23.18678, -50.65726],
    ],
    {
      fillColor: '#ff66ff',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoJ = L.polygon(
    [
      [-23.18653, -50.65681],
      [-23.18651, -50.65664],
      [-23.18672, -50.65661],
      [-23.18674, -50.65678],
    ],
    {
      fillColor: '#ff9966',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoL = L.polygon(
    [
      [-23.18684, -50.6566],
      [-23.186823, -50.65636],
      [-23.18727, -50.65631],
      [-23.18729, -50.65654],
    ],
    {
      fillColor: '#6699ff',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoS = L.polygon(
    [
      [-23.18683, -50.65633],
      [-23.18681, -50.65616],
      [-23.18725, -50.65612],
      [-23.18726, -50.65629],
    ],
    {
      fillColor: '#b30059',
      fillOpacity: 1,
    }
  ).addTo(map);

  const Anfiteatro = L.circle([-23.1865, -50.65587], {
    color: 'blue',
    fillColor: 'yellow',
    fillOpacity: 1,
    radius: 12,
  }).addTo(map);

  const blocoR = L.polygon(
    [
      [-23.18643, -50.65575],
      [-23.18639, -50.65526],
      [-23.18662, -50.65523],
      [-23.18667, -50.65571],
    ],
    {
      fillColor: '#0a999a',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoR.bindPopup(
    '<div class="popup-content">' +
      'Bloco R <br> <p>Bloco em Manutenção</p>' +
      '</div>'
  );

  const blocoM = L.polygon(
    [
      [-23.18554, -50.65632],
      [-23.18561, -50.65623],
      [-23.1856, -50.65615],
      [-23.18571, -50.65614],
      [-23.18572, -50.65626],
      [-23.18563, -50.6564],
    ],
    {
      fillColor: '#0a999a',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoQ = L.polygon(
    [
      [-23.18556, -50.656],
      [-23.18556, -50.65593],
      [-23.1856, -50.65592],
      [-23.18559, -50.65582],
      [-23.18584, -50.65579],
      [-23.18584, -50.65586],
      [-23.18576, -50.65587],
      [-23.18577, -50.65599],
    ],
    {
      fillColor: '#00ccff',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoO = L.polygon(
    [
      [-23.18637, -50.65863],
      [-23.18635, -50.65852],
      [-23.18658, -50.65849],
      [-23.18659, -50.6586],
    ],
    {
      fillColor: '#ffff00',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoRU = L.polygon(
    [
      [-23.18643, -50.65609],
      [-23.18642, -50.65603],
      [-23.18669, -50.65601],
      [-23.18671, -50.6562],
      [-23.18668, -50.65623],
      [-23.18668, -50.65629],
      [-23.18664, -50.65635],
      [-23.18648, -50.65621],
      [-23.18651, -50.65616],
      [-23.1865, -50.65609],
    ],
    {
      fillColor: '#ff3399',
      fillOpacity: 1,
    }
  ).addTo(map);

  const blocoCampo = L.polygon(
    [
      [-23.18547, -50.6586],
      [-23.18538, -50.65857],
      [-23.1853, -50.6585],
      [-23.18524, -50.65841],
      [-23.1852, -50.6583],
      [-23.1852, -50.6582],
      [-23.18522, -50.65801],
      [-23.18527, -50.65791],
      [-23.18533, -50.65784],
      [-23.1854, -50.65779],
      [-23.18635, -50.65767],
      [-23.18645, -50.6577],
      [-23.18651, -50.65775],
      [-23.18657, -50.65787],
      [-23.18662, -50.65802],
      [-23.1866, -50.65819],
      [-23.18656, -50.65831],
      [-23.18652, -50.65842],
      [-23.18643, -50.65848],
    ],
    {
      color: 'blue',
      fillColor: '#669999',
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

const watchPOS = navigator.geolocation.getCurrentPosition(
  InicializarMapa,
  error,
  options
);

const openNav = () => {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementsByClassName('search-container')[0].style.display = 'none';
};

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';

  document.getElementsByClassName('search-container')[0].style.display =
    'block';
};

const mostrarInfo = (identificador, andar) => {
  var informacoesDiv = document.getElementById('informacoes');

  if (identificador == 'blocoA') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco A</h1><p>Este é o bloco A</p>';
    } else if (andar == 2) {
      informacoesDiv.innerHTML = '<h1>Bloco A</h1><p>Este é o bloco A</p>';
    } else if (andar == 3) {
      informacoesDiv.innerHTML = '<h1>Bloco A</h1><p>Este é o bloco A</p>';
    }
  } else if (identificador == 'blocoB') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco B</h1><p>Este é o bloco B</p>';
    }
  } else if (identificador == 'blocoC') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco C</h1><p>Este é o bloco C</p>';
    }
  } else if (identificador == 'blocoD') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco D</h1><p>Este é o bloco D</p>';
    }
  } else if (identificador == 'blocoE') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco E</h1><p>Este é o bloco E</p>';
    }
  } else if (identificador == 'blocoF') {
    if (andar == 1) {
      informacoesDiv.innerHTML = '<h1>Bloco F</h1><p>Este é o bloco F</p>';
    }
  }
};
