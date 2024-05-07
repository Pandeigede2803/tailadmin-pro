"use client";
import React, { useEffect, useState } from "react";

const CountDownTimer: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const targetDate = new Date("12/31/2024 23:59:59");

  const calculateRemainingPercentage = (): string => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    const elapsedPercentage = (difference / targetDate.getTime()) * 100;
    const remainingPercentage = (100 - elapsedPercentage).toFixed(2);

    return `${remainingPercentage}%`;
  };

  const formatNumber = (num: number): number[] => {
    const formattedNumber = num.toString().padStart(2, "0");
    return formattedNumber.split("").map(Number);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-wrap gap-6">
      <div>
        <div className="mb-3 flex items-center gap-2">
          {formatNumber(days).map((digit, index) => (
            <div
              key={index}
              className="timer-box relative z-1 overflow-hidden rounded-lg"
            >
              <span className="flex h-17.5 min-w-[56px] items-center justify-center rounded-lg bg-black px-3 text-xl font-black leading-[1.35] text-white dark:bg-boxdark lg:text-3xl xl:text-[40px]">
                {digit}
              </span>

              <span
                className="absolute bottom-0 left-0 -z-1 block w-full bg-[#000]/20"
                style={{ height: calculateRemainingPercentage() }}
              ></span>
            </div>
          ))}
        </div>

        <span className="block text-center font-medium">Days</span>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2">
          {formatNumber(hours).map((digit, index) => (
            <div
              key={index}
              className="timer-box relative z-1 overflow-hidden rounded-lg"
            >
              <span className="flex h-17.5 min-w-[56px] items-center justify-center rounded-lg bg-black px-3 text-xl font-black leading-[1.35] text-white dark:bg-boxdark lg:text-3xl xl:text-[40px]">
                {digit}
              </span>

              <span
                className="absolute bottom-0 left-0 -z-1 block w-full bg-[#000]/20"
                style={{ height: calculateRemainingPercentage() }}
              ></span>
            </div>
          ))}
        </div>

        <span className="block text-center font-medium">Hours</span>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2">
          {formatNumber(minutes).map((digit, index) => (
            <div
              key={index}
              className="timer-box relative z-1 overflow-hidden rounded-lg"
            >
              <span className="flex h-17.5 min-w-[56px] items-center justify-center rounded-lg bg-black px-3 text-xl font-black leading-[1.35] text-white dark:bg-boxdark lg:text-3xl xl:text-[40px]">
                {digit}
              </span>

              <span
                className="absolute bottom-0 left-0 -z-1 block w-full bg-[#000]/20"
                style={{ height: calculateRemainingPercentage() }}
              ></span>
            </div>
          ))}
        </div>

        <span className="block text-center font-medium">Minutes</span>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-2">
          {formatNumber(seconds).map((digit, index) => (
            <div
              key={index}
              className="timer-box relative z-1 overflow-hidden rounded-lg"
            >
              <span className="flex h-17.5 min-w-[56px] items-center justify-center rounded-lg bg-black px-3 text-xl font-black leading-[1.35] text-white dark:bg-boxdark lg:text-3xl xl:text-[40px]">
                {digit}
              </span>

              <span
                className="absolute bottom-0 left-0 -z-1 block w-full bg-[#000]/20"
                style={{ height: calculateRemainingPercentage() }}
              ></span>
            </div>
          ))}
        </div>

        <span className="block text-center font-medium">Seconds</span>
      </div>
    </div>
  );
};

export default CountDownTimer;
