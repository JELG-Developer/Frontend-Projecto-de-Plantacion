import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Mapa = () => {
  // Coordenadas de la Ciudad del Alto, Bolivia
  const position = [-16.5000, -68.1193];

  // Icono personalizado para el marcador
  const customIcon = L.icon({
    iconUrl: 'https://leafletjs.com/examples/quick-start/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // Ejemplo de datos de meses y probabilidades (alta, media, baja)
  const data = [
    { mes: 'Enero', probabilidad: 'Alta' },
    { mes: 'Febrero', probabilidad: 'Media' },
    { mes: 'Marzo', probabilidad: 'Alta' },
    { mes: 'Abril', probabilidad: 'Alta' },
    { mes: 'Mayo', probabilidad: 'Baja' },
    { mes: 'Junio', probabilidad: 'Baja' },
    { mes: 'Julio', probabilidad: 'Media' },
    { mes: 'Agosto', probabilidad: 'Media' },
    { mes: 'Septiembre', probabilidad: 'Alta' },
    { mes: 'Octubre', probabilidad: 'Alta' },
    { mes: 'Noviembre', probabilidad: 'Alta' },
    { mes: 'Diciembre', probabilidad: 'Alta' },
  ];

  return (
    <div className="flex">
      {/* Mapa */}
      <div className="flex-1">
        <MapContainer center={position} zoom={12} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Ciudad del Alto, Bolivia.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Datos de meses y probabilidad */}
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-2">Meses y Probabilidad</h2>
        <div className="grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex justify-between p-2 border-b">
              <span>{item.mes}</span>
              <span className="font-bold">{item.probabilidad}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mapa;
