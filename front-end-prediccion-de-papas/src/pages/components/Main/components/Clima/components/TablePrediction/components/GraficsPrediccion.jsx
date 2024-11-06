import { Line, Doughnut } from "react-chartjs-2";
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
} from "chart.js";
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

const GraficsPrediccion = ({ data }) => {
  const errorData = {
    labels: data.map((_, index) => `Muestra ${index + 1}`),
    datasets: [
      {
        label: "MSE",
        data: data.map((d) => d.MSE),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "MAE",
        data: data.map((d) => d.MAE),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "RMSE",
        data: data.map((d) => d.RMSE),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Errores (MSE, MAE, RMSE)",
      },
    },
  };

  return (
    <div>
      <div className="divider divider-neutral mb-10 mt-10">
        <h2 className="subtitle text-neutral text-sm md:text-xl lg:text-2xl">
          Gráfica de Errores
        </h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center  max-h-[500px]  mb-6">
        {/* <h3 className="text-lg font-bold mb-2">Errores (MSE, MAE, RMSE)</h3> */}
        <Line data={errorData} options={options} />
      </div>
    </div>

  );
};

export default GraficsPrediccion;
