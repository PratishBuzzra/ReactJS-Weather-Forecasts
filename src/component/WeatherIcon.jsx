
import React from 'react';
import {
  WiDaySunny,
  WiNightClear,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from 'react-icons/wi';

const iconMap = {
  '01d': <WiDaySunny size={100} color="#f39c12" />,
  '01n': <WiNightClear size={100} color="#34495e" />,
  '02d': <WiCloud size={100} color="#f1c40f" />,
  '02n': <WiCloud size={100} color="#95a5a6" />,
  '03d': <WiCloudy size={100} />,
  '03n': <WiCloudy size={100} />,
  '04d': <WiCloudy size={100} />,
  '04n': <WiCloudy size={100} />,
  '09d': <WiShowers size={100} />,
  '09n': <WiShowers size={100} />,
  '10d': <WiRain size={100} />,
  '10n': <WiRain size={100} />,
  '11d': <WiThunderstorm size={100} />,
  '11n': <WiThunderstorm size={100} />,
  '13d': <WiSnow size={100} />,
  '13n': <WiSnow size={100} />,
  '50d': <WiFog size={100} />,
  '50n': <WiFog size={100} />,
};

const WeatherIcon = ({ iconCode }) => {
  return iconMap[iconCode];
};

export default WeatherIcon;
