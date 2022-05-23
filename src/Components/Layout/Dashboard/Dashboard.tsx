import React, { useState } from "react";
import { Outlet } from "react-router";
import Calendar1 from "../../../Assets/Calendar1";
import Calendar2 from "../../../Assets/Calendar2";
import Wait from "../../../Assets/Wait";
import Passing from "../../../Assets/Passing";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./dashboard.scss";
import StatsPanel from "./StatsPanel/StatsPanel";
import Arrow from "../../../Assets/Arrow";
const Counter: React.FC = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  const data = {
    labels: ["Tuần 1","Tuần 2","Tuần 3","Tuần 4"],
    drawActiveElementsOnTop: false,
    datasets: [
      {
        label: "",
        data: [
          0, 2800.0, 3200.0, 4200.0,
        ],
        fill: true,
        lineTension: 0.4,
        backgroundColor: "rgba(206, 221, 255, 0.4)",
        borderColor: "#5185F7",
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };
  return (
    <div className="app__layout-dashboard__counter">
      <div className="counter-label">Biểu đồ cấp số</div>
      <div className="counter-cards">
        <div className="counter-cards__card">
          <div className="row">
            <div className="image blue">
              <Calendar1 />
            </div>
            <div className="label">Số thứ tự đã cấp</div>
          </div>
          <div className="row">
            <div className="count">4.221</div>
            <div className="diff raise">
              <Arrow />
              32,41%
            </div>
          </div>
        </div>
        <div className="counter-cards__card">
          <div className="row">
            <div className="image green">
              <Calendar2 />
            </div>
            <div className="label">Số thứ tự đã cấp</div>
          </div>
          <div className="row">
            <div className="count">3.721</div>

            <div className="diff drop">
              <Arrow />
              32,41%
            </div>
          </div>
        </div>
        <div className="counter-cards__card">
          <div className="row">
            <div className="image orange">
              <Wait />
            </div>
            <div className="label">Số thứ tự đã cấp</div>
          </div>
          <div className="row">
            <div className="count">468</div>
            <div className="diff drop">
              <Arrow />
              32,41%
            </div>
          </div>
        </div>
        <div className="counter-cards__card">
          <div className="row">
            <div className="image red">
              <Passing />
            </div>
            <div className="label">Số thứ tự đã cấp</div>
          </div>
          <div className="row">
            <div className="count">32</div>
            <div className="diff raise">
              <Arrow />
              32,41%
            </div>
          </div>
        </div>
      </div>
      <div className="counter-chart">
        <div className="row">
          <div className="col">
            <div className="chart-label">Bảng thống kê theo ngày</div>
            <div className="chart-month-of-year">Tháng 11/2021</div>
          </div>
          <div className="col">
            <div className="view-mode">
              <span>Xem theo</span>
              <select className="view-mode__selector">
                <option value="day">Ngày</option>
                <option value="month">Tháng</option>
                <option value="year">Năm</option>
              </select>
            </div>
          </div>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="app__layout-dashboard">
      <div className="app__layout-dashboard__sitemap">Dashboard</div>
      <Counter />
      <StatsPanel />
    </div>
  );
};

export default Dashboard;
