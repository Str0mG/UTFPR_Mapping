var map;
var L;
var blocoA,
  blocoB,
  blocoDb,
  blocoCampo,
  Anfiteatro,
  blocoRU,
  blocoDd,
  blocoDe,
  blocoC,
  blocoD,
  blocoE,
  blocoF,
  blocoG,
  blocoH,
  blocoI,
  blocoJ,
  blocoK,
  blocoL,
  blocoM,
  blocoN,
  blocoO,
  blocoP,
  blocoQ,
  blocoR,
  blocoS,
  blocoT,
  blocoU,
  blocoV,
  blocoW,
  blocoX,
  blocoY,
  blocoZ;

const InicializarMapa = pos => {
  var { latitude, longitude } = pos.coords;
  // latitude = -23.18591;
  // longitude = -50.65721;

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

  // https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png tmb é bom, yellow
  // https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png tmb é bom, white
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution:
      '&copy; <a href="https://str0mg.github.io/Mapeamento-UTFPR/">Alan Araújo Oliveira, Gabriel Sporck Trombini, Igor de Oliveira Raphael, Jonathan Marques Christofoleti, Matheus Augusto da Cruz Grossi, Pedro Lemes Costa, Theo Yuji Takanohashi</a>, &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
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
      fillColor: '#feff00',
    }
  ).addTo(map);

  // Build bloco P
  blocoP = L.polygon(
    [
      [-23.18569, -50.65733],
      [-23.18568, -50.65715],
      [-23.18607, -50.65711],
      [-23.18608, -50.65729],
    ],
    {
      fillColor: 'yellow ',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoP.bindPopup(
    '<div class="popup-content">' +
      'Bloco P  <br>' +
      '<button onclick="(() => { buscarChaveNoJSON(\'P201\', blocoP,\'2° Andar\'); })()" class="utfpr-button">2° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'P101\',blocoP,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'P001\',blocoP,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco D
  const blocoD = L.polygon(
    [
      [-23.18582, -50.65695],
      [-23.18565, -50.65679],
      [-23.18568, -50.65675],
      [-23.1856, -50.65668],
      [-23.18569, -50.65656],
      [-23.18577, -50.65663],
      [-23.18574, -50.65668],
      [-23.18591, -50.65682],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoD.bindPopup(
    '<div class="popup-content">' +
      'Bloco A<br>' +
      '<button onclick="buscarChaveNoJSON(\'A143\',blocoD,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'A038\',blocoD,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '<button onclick="(() => { buscarChaveNoJSON(\'departamentos acadêmicos\', blocoD,\'Subsolo\'); })()" class="utfpr-button">Subsolo</button> <br>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco C
  const blocoDb = L.polygon(
    [
      [-23.1857, -50.65656],
      [-23.18592, -50.65626],
      [-23.18604, -50.65637],
      [-23.18581, -50.65667],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoDb.bindPopup(
    '<div class="popup-content">' +
      'Bloco A  <br>' +
      '<button onclick="buscarChaveNoJSON(\'DEAPO\',blocoDb,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'A039C\',blocoDb,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco B
  const blocoDc = L.polygon(
    [
      [-23.185934, -50.656256],
      [-23.186151, -50.655982],
      [-23.186259, -50.656095],
      [-23.186047, -50.656368],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoDc.bindPopup(
    '<div class="popup-content">' +
      'Bloco A  <br>' +
      '<button onclick="buscarChaveNoJSON(\'A127\',blocoDb,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'A023\',blocoDb,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco A1
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
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoDd.bindPopup(
    '<div class="popup-content">' +
      'Bloco A  <br>' +
      '<button onclick="buscarChaveNoJSON(\'\',blocoP,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '<button onclick="buscarChaveNoJSON(\'DISAU\',blocoDd,\'Subsolo\')" class="utfpr-button">Subsolo</button> <br>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco A2
  const blocoDe = L.polygon(
    [
      [-23.186259, -50.655687],
      [-23.186239, -50.655408],
      [-23.186368, -50.655397],
      [-23.186392, -50.655676],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);
  blocoDe.bindPopup(
    '<div class="popup-content">' +
      'Bloco A  <br>' +
      '<button onclick="buscarChaveNoJSON(\'NUAPE\',blocoDe,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'GADIR\',blocoDe,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '<button onclick="(() => { buscarChaveNoJSON(\'DEOF\', blocoDe,\'Subsolo\'); })()" class="utfpr-button">Subsolo</button> <br>' +
      '</div>',
    { closeOnClick: true }
  );

  // Build bloco GHI
  const blocoG = L.polygon(
    [
      [-23.186121, -50.65654],
      [-23.186363, -50.656213],
      [-23.186585, -50.65639],
      [-23.186343, -50.656722],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoG.bindPopup(
    '<div class="popup-content">' +
      'Bloco GHI  <br>' +
      '<button onclick="(() => { buscarChaveNoJSON(\'I205\', blocoG,\'2° Andar\'); })()" class="utfpr-button">2° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'I106\',blocoG,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'H002\',blocoG,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Quadra de esportes
  const blocoN = L.polygon(
    [
      [-23.1865, -50.65729],
      [-23.18647, -50.65688],
      [-23.18675, -50.65686],
      [-23.18678, -50.65726],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoN.bindPopup(
    '<div class="popup-content">' +
      'Quadra de esportes<br>' +
      '<button onclick="buscarChaveNoJSON(\'quadra\',blocoN,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // academia
  const blocoJ = L.polygon(
    [
      [-23.18653, -50.65681],
      [-23.18651, -50.65664],
      [-23.18672, -50.65661],
      [-23.18674, -50.65678],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoJ.bindPopup(
    '<div class="popup-content">' +
      'Academia<br>' +
      '<button onclick="buscarChaveNoJSON(\'academia\',blocoJ,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Incubadora
  const blocoL = L.polygon(
    [
      [-23.18684, -50.6566],
      [-23.186823, -50.65636],
      [-23.18727, -50.65631],
      [-23.18729, -50.65654],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);
  blocoL.bindPopup(
    '<div class="popup-content">' +
      'Incubadora<br>' +
      '<button onclick="buscarChaveNoJSON(\'incubadora\',blocoL,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // blocoS
  const blocoS = L.polygon(
    [
      [-23.18683, -50.65633],
      [-23.18681, -50.65616],
      [-23.18725, -50.65612],
      [-23.18726, -50.65629],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoS.bindPopup(
    '<div class="popup-content">' +
      'Bloco S<br>' +
      '<button onclick="(() => { buscarChaveNoJSON(\'s201\', blocoS,\'2° Andar\'); })()" class="utfpr-button">2° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'s101\',blocoS,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'s001\',blocoS,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Anfiteatro
  const Anfiteatro = L.circle([-23.1865, -50.65587], {
    fillColor: 'yellow',
    fillOpacity: 1,
    radius: 12,
  }).addTo(map);

  Anfiteatro.bindPopup(
    '<div class="popup-content">' +
      'Anfiteatro<br>' +
      '<button onclick="buscarChaveNoJSON(\'anfiteatro\',Anfiteatro,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // blocoR
  const blocoR = L.polygon(
    [
      [-23.18643, -50.65575],
      [-23.18639, -50.65526],
      [-23.18662, -50.65523],
      [-23.18667, -50.65571],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoR.bindPopup(
    '<div class="popup-content">' +
      'Bloco R <br> <p>Bloco em Manutenção</p>' +
      '</div>'
  );

  // Pardais
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
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoM.bindPopup(
    '<div class="popup-content">' +
      'Ninho dos Pardais<br>' +
      '<button onclick="buscarChaveNoJSON(\'ninho de pardais 1\',blocoM,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Calem
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
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoQ.bindPopup(
    '<div class="popup-content">' +
      'Calem  <br>' +
      '<button onclick="buscarChaveNoJSON(\'CALEM 1\',blocoQ,\'1° Andar\')" class="utfpr-button">1° Andar</button> <br>' +
      '<button onclick="buscarChaveNoJSON(\'professores de linguas\',blocoQ,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // Vestiario
  const blocoO = L.polygon(
    [
      [-23.18637, -50.65863],
      [-23.18635, -50.65852],
      [-23.18658, -50.65849],
      [-23.18659, -50.6586],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  // blocoRU
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
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);
  blocoRU.bindPopup(
    '<div class="popup-content">' +
      'Restaurante Universitário<br>' +
      '<button onclick="buscarChaveNoJSON(\'RU\',blocoRU,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  // blocoCampo
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
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);
  blocoCampo.bindPopup(
    '<div class="popup-content">' +
      'Campo de Futebol  <br>' +
      '<button onclick="buscarChaveNoJSON(\'campo\',blocoCampo,\'\')" class="utfpr-button">Ver foto</button>' +
      '</div>',
    { closeOnClick: true }
  );

  //bloco K
  const blocoK = L.polygon(
    [
      [-23.18594, -50.65672],
      [-23.18603, -50.65659],
      [-23.18625, -50.65678],
      [-23.18615, -50.6569],
    ],
    {
      fillColor: 'yellow',
      fillOpacity: 1,
    }
  ).addTo(map);

  blocoK.bindPopup(
    '<div class="popup-content">' +
      'Bloco K  <br>' +
      '<button onclick="buscarChaveNoJSON(\'K001\',blocoK,\' Térreo\')" class="utfpr-button">Térreo</button>' +
      '</div>',
    { closeOnClick: true }
  );

  //Caminho
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
  //Caminho portão fundo - incubadora
  const polyline2 = L.polyline(
    [
      [-23.186886184549714, -50.65714641006739],
      [-23.186831499373923, -50.65661220470025],
      [-23.187303530029936, -50.65654919357556],
      [-23.187287503972634, -50.65629304263519],
      [-23.186816583578693, -50.65634199293095],
      [-23.186760970704587, -50.65638239513208],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho bloco S
  const polyline3 = L.polyline(
    [
      [-23.186816583578693, -50.65634199293095],
      [-23.186798708294404, -50.65612741621149],
      [-23.18727901277228, -50.65610889206918],
      [-23.187287503972634, -50.65629304263519],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho campo - quadra
  const polyline4 = L.polyline(
    [
      [-23.186836167705156, -50.656812886797326],
      [-23.18641578978419, -50.65685580214014],
      [-23.186166767630958, -50.65710658869188],
      [-23.18623148878013, -50.65760883231477],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho academia - bloco GHI
  const polyline6 = L.polyline(
    [
      [-23.18679253258324, -50.65678855044178],
      [-23.186739755539815, -50.6562144040719],
      [-23.186629317477127, -50.656371117832315],
      [-23.18630484872846, -50.656161360057],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho sala 24h - bloco P
  const polyline7 = L.polyline(
    [
      [-23.186301842366472, -50.65609826660921],
      [-23.18630484872846, -50.656161360057],
      [-23.185886954080555, -50.656720258509814],
      [-23.186092199326595, -50.65691642518386],
      [-23.186166767630958, -50.65710658869188],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho GHI - Ninho dos pardais
  const polyline8 = L.polyline(
    [
      [-23.186214113308317, -50.656408404559755],
      [-23.18610501475443, -50.656402850157136],
      [-23.18593938968396, -50.65621129273005],
      [-23.185928929146293, -50.65598559635558],
      [-23.185697053685004, -50.656029218343924],
      [-23.185677875997275, -50.65612973857793],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  // Entrada principal - Bloco A
  const polyline9 = L.polyline(
    [
      [-23.186016100268407, -50.65575231354834],
      [-23.186000409470623, -50.65589455916251],
      [-23.18622356731052, -50.655803521969446],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  // Entrada principal - aux
  const polyline10 = L.polyline(
    [
      [-23.186000409470623, -50.65589455916251],
      [-23.185928929146293, -50.65598559635558],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  // Entrada principal - Calem
  const polyline11 = L.polyline(
    [
      [-23.185993474852875, -50.65582580738012],
      [-23.185852735183442, -50.655841755890386],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho academia - fundo
  const polyline14 = L.polyline(
    [
      [-23.186760970704587, -50.65638239513208],
      [-23.186499256825954, -50.65665512991332],
      [-23.18652564539769, -50.6568536888662],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho Bloco P
  const polyline15 = L.polyline(
    [
      [-23.186074839903814, -50.65720104551846],
      [-23.186166767630958, -50.65710658869188],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  //Caminho Bloco A - K
  const polyline16 = L.polyline(
    [
      [-23.18576990394973, -50.656673149828904],
      [-23.185886954080555, -50.656720258509814],
    ],
    {
      color: 'black',
      dashArray: '0.1, 5',
    }
  ).addTo(map);

  return map;
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
  var accordionItems = document.getElementsByClassName('accordion-item');

  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].style.display = 'block';
  }
};

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
  var accordionItems = document.getElementsByClassName('accordion-item');

  for (var i = 0; i < accordionItems.length; i++) {
    accordionItems[i].style.display = 'none';
  }

  document.getElementsByClassName('search-container')[0].style.display =
    'block';
};

// Função para buscar a chave no JSON
const buscarChaveNoJSON = (chave, botao, info = '') => {
  document.getElementById('search-input').value = '';

  if (document.getElementById('search-response').innerHTML !== '') {
    document.getElementById('search-response').innerHTML = '';
  }

  if (document.getElementById('modal').style.display !== 'none') {
    document.getElementById('modal').style.display = 'none';
  }

  if (botao) {
    botao.closePopup();
  }

  console.log(chave);
  // Faça uma requisição HTTP para carregar o arquivo JSON
  fetch('./bd.json')
    .then(response => response.json())
    .then(data => {
      // Verifique se a chave existe no JSON
      if (data[chave]) {
        exibirResultado(data[chave], info);
      } else if (data[chave.toUpperCase()]) {
        exibirResultado(data[chave.toUpperCase()], info);
      } else {
        exibirResultado('Bloco não encontrado.');
      }
    })
    .catch(error => {
      console.error('Erro ao carregar o arquivo JSON:', error);
    });
};

var marker2;

// Função para exibir o resultado da busca
const exibirResultado = (resultado, info = '') => {
  console.log(resultado);
  var nome;
  if (marker2) {
    map.removeLayer(marker2);
  }

  if (info !== '') {
    nome = info;
  } else {
    nome = resultado.nome;
  }

  if (resultado === 'Bloco não encontrado.') {
    document.getElementById('search-response').style.color = 'red';
    document.getElementById('search-response').innerHTML = resultado;
  } else {
    // se ja existir marker n precisa criar outro

    openModal(nome, resultado.descricao, resultado.URLBLOCO, resultado.URLPISO);
    console.log(resultado.lat);
    // TODO: adicionar o marker no mapa
    marker2 = L.marker(resultado.lat);
    marker2.bindPopup(resultado.nome);
    marker2.addTo(map);
  }
};

// Capturar o evento de clique no botão de pesquisa
document
  .getElementById('search-button')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    // Capturar o valor digitado na barra de pesquisa
    const chave = document.getElementById('search-input').value;
    // transformar um lowercase para facilitar a busca

    // Realizar a busca no JSON
    buscarChaveNoJSON(chave.toLowerCase());
  });

// Abrir o modal
function openModal(Nome, descricao, piso, bloco) {
  if (piso) {
    document.getElementById('modal-image-floor').src = bloco;
  } else {
    const modalImageFloor = document.getElementById('modal-image-floor');
    modalImageFloor.parentNode.removeChild(modalImageFloor);
  }

  document.getElementById('modal-title').innerText = descricao;
  document.getElementById('modal').style.display = 'block';
  document.getElementById('modal-image').src = piso;
  document.getElementById('modal-description').innerText = Nome;
}

// Fechar o modal
document.getElementsByClassName('close')[0].onclick = function () {
  document.getElementById('modal').style.display = 'none';
  map.removeLayer(marker2);
};

// Fechar o modal
document.getElementsByClassName('openbtn')[0].onclick = function () {
  if (document.getElementById('search-response').innerHTML !== '') {
    document.getElementById('search-response').innerHTML = '';
  }
  if (document.getElementById('modal').style.display !== 'none') {
    document.getElementById('modal').style.display = 'none';
  }
  openNav();
};
