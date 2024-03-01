import { Config, Informations } from "./consts";

import { CountryLookup } from "../country-lookup";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          {Informations.map((data) => {
            return (
              <li
                key={`key-${data.description}`}
                className="hover:underline cursor-pointer"
              >
                {data.description}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center space-x-6">
          {Config.map((data) => {
            return (
              <li
                key={`key-${data.description}`}
                className="hover:underline cursor-pointer"
              >
                {data.description}
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
