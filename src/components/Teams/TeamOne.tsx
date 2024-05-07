import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Team {
  image: string;
  name: string;
  position: string;
}

const teamItems: Team[] = [
  {
    image: "/images/team/team-01.png",
    name: "Adveen Desuza",
    position: "Ui Designer",
  },
  {
    image: "/images/team/team-02.png",
    name: "Jezmin uniya",
    position: "Product Designer",
  },
  {
    image: "/images/team/team-03.png",
    name: "Andrieo Gloree",
    position: "App Developer",
  },
  {
    image: "/images/team/team-04.png",
    name: "Jackie Sanders",
    position: "Content Writer",
  },
];

const TeamOne: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-15 py-4 sm:grid-cols-2 sm:py-6 xl:grid-cols-4 xl:py-7.5 2xl:py-15">
      {teamItems.map((item, index) => (
        <div key={index}>
          <div className="relative z-1 mx-auto h-[170px] w-full max-w-[170px] rounded-full">
            <Image
              width={170}
              height={170}
              className="rounded-full"
              src={item.image}
              alt="team"
            />

            <span className="absolute left-0 top-0 -z-1">
              <svg
                width="71"
                height="82"
                viewBox="0 0 71 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="1.29337"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 1.29337 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 12.6762 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 24.059 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 35.4379 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 46.8207 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 68.809 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9457"
                  cy="80.7066"
                  r="1.29337"
                  transform="rotate(-90 57.9457 80.7066)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 1.29337 69.3249)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 12.6762 69.3249)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 24.059 69.3249)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="69.3249"
                  r="1.29337"
                  transform="rotate(-90 35.4379 69.3249)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 46.8207 69.325)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 68.809 69.325)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9418"
                  cy="69.325"
                  r="1.29337"
                  transform="rotate(-90 57.9418 69.325)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 1.29337 57.9433)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 1.29337 24.0568)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 12.6762 57.9433)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 12.6762 24.0568)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 24.059 57.9433)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 24.059 24.0568)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="57.9433"
                  r="1.29337"
                  transform="rotate(-90 35.4379 57.9433)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="24.0568"
                  r="1.29337"
                  transform="rotate(-90 35.4379 24.0568)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 46.8207 57.9431)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 46.8207 24.0567)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 68.809 57.9431)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 68.809 24.0567)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9418"
                  cy="57.9431"
                  r="1.29337"
                  transform="rotate(-90 57.9418 57.9431)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9457"
                  cy="24.0567"
                  r="1.29337"
                  transform="rotate(-90 57.9457 24.0567)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 1.29337 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="12.675"
                  r="1.29337"
                  transform="rotate(-90 1.29337 12.675)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 12.6762 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="12.675"
                  r="1.29337"
                  transform="rotate(-90 12.6762 12.675)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 24.059 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="12.675"
                  r="1.29337"
                  transform="rotate(-90 24.059 12.675)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 35.4379 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 35.4379 12.6751)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 46.8207 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 46.8207 12.6751)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 68.809 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 68.809 12.6751)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9418"
                  cy="46.5615"
                  r="1.29337"
                  transform="rotate(-90 57.9418 46.5615)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9457"
                  cy="12.6751"
                  r="1.29337"
                  transform="rotate(-90 57.9457 12.6751)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 1.29337 35.1798)"
                  fill="#3C50E0"
                />
                <circle
                  cx="1.29337"
                  cy="1.2933"
                  r="1.29337"
                  transform="rotate(-90 1.29337 1.2933)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 12.6762 35.1798)"
                  fill="#3C50E0"
                />
                <circle
                  cx="12.6762"
                  cy="1.2933"
                  r="1.29337"
                  transform="rotate(-90 12.6762 1.2933)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 24.059 35.1798)"
                  fill="#3C50E0"
                />
                <circle
                  cx="24.059"
                  cy="1.29342"
                  r="1.29337"
                  transform="rotate(-90 24.059 1.29342)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="35.1798"
                  r="1.29337"
                  transform="rotate(-90 35.4379 35.1798)"
                  fill="#3C50E0"
                />
                <circle
                  cx="35.4379"
                  cy="1.29342"
                  r="1.29337"
                  transform="rotate(-90 35.4379 1.29342)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 46.8207 35.18)"
                  fill="#3C50E0"
                />
                <circle
                  cx="46.8207"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 46.8207 1.29354)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 68.809 35.18)"
                  fill="#3C50E0"
                />
                <circle
                  cx="68.809"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 68.809 1.29354)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9457"
                  cy="35.18"
                  r="1.29337"
                  transform="rotate(-90 57.9457 35.18)"
                  fill="#3C50E0"
                />
                <circle
                  cx="57.9457"
                  cy="1.29354"
                  r="1.29337"
                  transform="rotate(-90 57.9457 1.29354)"
                  fill="#3C50E0"
                />
              </svg>
            </span>

            <span className="absolute bottom-0 right-0 -z-1">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 21.5L0.505701 21.5C0.767606 10.023 10.023 0.767604 21.5 0.505697L21.5 21.5Z"
                  stroke="#10B981"
                />
              </svg>
            </span>
          </div>

          <div className="my-5.5 text-center">
            <h4 className="mb-0.5 text-lg font-bold text-black dark:text-white">
              {item.name}
            </h4>
            <p className="text-xs font-medium">{item.position}</p>
          </div>

          <div className="flex items-center justify-center gap-5.5">
            <Link href="#" className="text-bodydark2 hover:text-primary">
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8125 8.0625H13.0625H12.4375V7.4375V5.5V4.875H13.0625H14.375C14.7188 4.875 15 4.625 15 4.25V0.9375C15 0.59375 14.75 0.3125 14.375 0.3125H12.0938C9.625 0.3125 7.90625 2.0625 7.90625 4.65625V7.375V8H7.28125H5.15625C4.71875 8 4.3125 8.34375 4.3125 8.84375V11.0938C4.3125 11.5312 4.65625 11.9375 5.15625 11.9375H7.21875H7.84375V12.5625V18.8438C7.84375 19.2812 8.1875 19.6875 8.6875 19.6875H11.625C11.8125 19.6875 11.9688 19.5938 12.0938 19.4688C12.2188 19.3438 12.3125 19.125 12.3125 18.9375V12.5938V11.9688H12.9688H14.375C14.7812 11.9688 15.0938 11.7188 15.1562 11.3438V11.3125V11.2812L15.5938 9.125C15.625 8.90625 15.5938 8.65625 15.4062 8.40625C15.3438 8.25 15.0625 8.09375 14.8125 8.0625Z"
                  fill=""
                />
              </svg>
            </Link>

            <Link href="#" className="text-bodydark2 hover:text-primary">
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2955 5.37507C18.4069 5.24521 18.2616 5.07552 18.0968 5.1363C17.729 5.27197 17.3928 5.36147 16.8956 5.41671C17.5071 5.07621 17.7915 4.58953 18.0229 3.99345C18.0786 3.84967 17.9104 3.71921 17.7655 3.78789C17.1769 4.06697 16.5418 4.27402 15.874 4.39635C15.2139 3.74216 14.273 3.33337 13.2321 3.33337C11.2335 3.33337 9.61272 4.84068 9.61272 6.69935C9.61272 6.96322 9.64505 7.22024 9.70605 7.46633C6.83301 7.33247 4.27114 6.10345 2.49128 4.21888C2.36929 4.08972 2.14793 4.10687 2.07198 4.2644C1.86934 4.6847 1.75638 5.15095 1.75638 5.64184C1.75638 6.80941 2.39514 7.83957 3.36616 8.44321C2.93078 8.43012 2.51442 8.34529 2.13072 8.20132C1.9439 8.13124 1.72975 8.25441 1.75485 8.44279C1.94754 9.88937 3.11873 11.0828 4.63046 11.3648C4.32688 11.442 4.00713 11.483 3.67635 11.483C3.59615 11.483 3.51664 11.4805 3.43786 11.4757C3.23738 11.4633 3.07445 11.6426 3.1604 11.8142C3.72749 12.946 4.952 13.7362 6.37696 13.7608C5.13838 14.6638 3.57785 15.2018 1.88207 15.2018C1.67298 15.2018 1.58328 15.4706 1.76878 15.5618C3.20147 16.266 4.83302 16.6667 6.56661 16.6667C13.2241 16.6667 16.864 11.5378 16.864 7.08967C16.864 6.94407 16.8604 6.79847 16.8538 6.65423C17.3941 6.29121 17.8799 5.85953 18.2955 5.37507Z"
                  fill=""
                />
              </svg>
            </Link>

            <Link href="#" className="text-bodydark2 hover:text-primary">
              <svg
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0284 13.1184C11.7506 13.1184 13.1467 11.7223 13.1467 10.0001C13.1467 8.27794 11.7506 6.88184 10.0284 6.88184C8.30626 6.88184 6.91016 8.27794 6.91016 10.0001C6.91016 11.7223 8.30626 13.1184 10.0284 13.1184Z"
                  fill=""
                />
                <path
                  d="M13.4153 1.66663H6.58732C3.87227 1.66663 1.66797 3.87093 1.66797 6.58598V13.3602C1.66797 16.129 3.87227 18.3333 6.58732 18.3333H13.3615C16.1303 18.3333 18.3346 16.129 18.3346 13.4139V6.58598C18.3346 3.87093 16.1303 1.66663 13.4153 1.66663ZM10.0282 14.086C7.74324 14.086 5.94216 12.2311 5.94216 9.99996C5.94216 7.76878 7.77012 5.91394 10.0282 5.91394C12.2594 5.91394 14.0873 7.76878 14.0873 9.99996C14.0873 12.2311 12.2862 14.086 10.0282 14.086ZM15.6733 6.29028C15.4045 6.58598 15.0013 6.74727 14.5443 6.74727C14.1411 6.74727 13.7379 6.58598 13.4153 6.29028C13.1196 5.99458 12.9583 5.61824 12.9583 5.16125C12.9583 4.70426 13.1196 4.3548 13.4153 4.03222C13.711 3.70964 14.0873 3.54835 14.5443 3.54835C14.9475 3.54835 15.3776 3.70964 15.6733 4.00534C15.9422 4.3548 16.1303 4.75802 16.1303 5.18813C16.1035 5.61824 15.9422 5.99458 15.6733 6.29028Z"
                  fill=""
                />
                <path
                  d="M14.5709 4.51587C14.2215 4.51587 13.9258 4.81157 13.9258 5.16103C13.9258 5.51049 14.2215 5.80619 14.5709 5.80619C14.9204 5.80619 15.2161 5.51049 15.2161 5.16103C15.2161 4.81157 14.9473 4.51587 14.5709 4.51587Z"
                  fill=""
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamOne;
