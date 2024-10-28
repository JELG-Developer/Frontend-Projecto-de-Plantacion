import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState, useEffect } from 'react'; // Importar useState y useEffect

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// eslint-disable-next-line react/prop-types
const Graficas = ({ data }) => {
  const [loading, setLoading] = useState(true); // Estado para cargar datos

  // Usar useEffect para simular carga de datos
  useEffect(() => {
    // Simular un tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false); // Cambiar a no cargando después de 2 segundos
    }, 2000);
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, []);

  // Preparar datos para los gráficos (no se modifican)

  const temperaturaData = {
    // eslint-disable-next-line react/prop-types
    labels: data.map(d => new Date(d.fecha).toLocaleDateString()),
    datasets: [
      {
        label: 'Temperatura Media (°C)',
        // eslint-disable-next-line react/prop-types
        data: data.map(d => d["Temperatura Media"]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const humedadData = {
    // eslint-disable-next-line react/prop-types
    labels: data.map(d => new Date(d.fecha).toLocaleDateString()),
    datasets: [
      {
        label: 'Humedad Relativa Media (%)',
        // eslint-disable-next-line react/prop-types
        data: data.map(d => d["Humedad Relativa Media"]),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  const presionData = {
    // eslint-disable-next-line react/prop-types
    labels: data.map(d => new Date(d.fecha).toLocaleDateString()),
    datasets: [
      {
        label: 'Presión (hPa)',
        // eslint-disable-next-line react/prop-types
        data: data.map(d => d.Presion),
        borderColor: 'rgb(255, 206, 86)',
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const vientoData = {
    // eslint-disable-next-line react/prop-types
    labels: data.map(d => new Date(d.fecha).toLocaleDateString()),
    datasets: [
      {
        label: 'Velocidad de Viento Media (m/s)',
        // eslint-disable-next-line react/prop-types
        data: data.map(d => d["Velocidad de Viento Media"]),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  const precipitacionData = {
    // eslint-disable-next-line react/prop-types    
    labels: data.map(d => new Date(d.fecha).toLocaleDateString()),
    datasets: [
      {
        label: 'Precipitación (mm)',
        // eslint-disable-next-line react/prop-types
        data: data.map(d => d.Precipitación),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const doughnutData = {
    labels: ['Precipitación', 'Presión', 'Viento'],
    datasets: [
      {
        label: 'Distribución',
        data: [
          // eslint-disable-next-line react/prop-types
          data.reduce((acc, d) => acc + d.Precipitación, 0),
          // eslint-disable-next-line react/prop-types
          data.reduce((acc, d) => acc + d.Presion, 0),
          // eslint-disable-next-line react/prop-types
          data.reduce((acc, d) => acc + d["Velocidad de Viento Media"], 0),
        ],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Análisis de Condiciones Climáticas',
      },
    },
  };

  // Mientras se carga, muestra el spinner
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Temperatura Media</h3>
        <Line data={temperaturaData} options={options} />
      </div>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Humedad Relativa Media</h3>
        <Line data={humedadData} options={options} />
      </div>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Presión</h3>
        <Line data={presionData} options={options} />
      </div>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Velocidad de Viento</h3>
        <Line data={vientoData} options={options} />
      </div>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Distribución General</h3>
        <div className="w-80 h-80 ml-auto mr-auto md:w-64 md:h-64">
          <Doughnut data={doughnutData} options={options} />
        </div>
      </div>

      <div className="w-full max-w-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Precipitación</h3>
        <Line data={precipitacionData} options={options} />
      </div>
    </div>
  );
};

export default Graficas;
