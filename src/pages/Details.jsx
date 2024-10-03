import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details({ data, darkMode }) {
  const alpha2Code = useParams().name;
  const [country, setcountry] = useState("none");
  const [Borders, setBorders] = useState("none");
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].alpha2Code === alpha2Code) {
        setcountry(data[i]);
        if (data[i].borders) {
          const br = data.filter((ele2) =>
            data[i].borders.includes(ele2.alpha3Code)
          );
          setBorders(br);
        }
        break;
      }
    }
  }, [data]);
  return (
    <div className={"px-10 h-[90vh] pt-14"}>
      <Link
        to={"/"}
        className={`flex items-center justify-between *
        rounded-md p-5 ${
          darkMode ? "bg-dark-element" : "bg-light-element"
        } shadow-md w-max h-10`}
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className={"mr-2"} />
        <p className="font-[300]">Back</p>
      </Link>
      <section className="mt-14 h-80 w-full flex justify-between l:flex-col l:items-center">
        <img
          src={country !== "none" ? country.flags.png : ""}
          alt={`${country.name} flag`}
          className="h-full mr-32 l:m-0"
        />
        <div
          className="flex-grow flex flex-col justify-between
         content-between "
        >
          <h1 className="l:my-3 text-3xl font-[800]">{country.name}</h1>
          <div className="flex l:flex-col">
            <section className="mr-5">
              <div className="flex items-center">
                <p className="mr-1 font-[600]">
                  Native name:
                  <span className="font-[300] ml-1">{country.nativeName}</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-1 font-[600]">
                  Population:
                  <span className="font-[300] ml-1">{country.population}</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-1 font-[600]">
                  Region:
                  <span className="font-[300] ml-1">{country.region}</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-1 font-[600]">
                  Sub Region:
                  <span className="font-[300] ml-1">{country.subregion}</span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-1 font-[600]">
                  Capital:
                  <span className="font-[300] ml-1">{country.capital}</span>
                </p>
              </div>
            </section>
            <section>
              <div className="flex items-center">
                <p className="font-[600]">
                  Top Level Domain:
                  <span className="font-[300] opacity-50">
                    {country.topLevelDomain}
                  </span>
                </p>
              </div>
              <div className="flex items-center">
                <p className="mr-1 font-[600]">Languages:</p>
                {country !== "none" &&
                  country.languages.map((ele, ind, arr) => (
                    <p className="font-[300]" key={ind}>
                      {ele.name}
                      {ind + 1 < arr.length && ","}
                    </p>
                  ))}
              </div>
            </section>
          </div>
          {Borders !== "none" && (
            <div className="flex flex-wrap items-center gap-y-3 l:my-4">
              <p className="font-[600] w-full">Border Countries: </p>
              {Borders.map((ele, ind) => (
                <div
                  key={ind}
                  className={`min-w-32 px-3 w-max rounded-sm h-8 ml-3 font-[300] ${
                    darkMode ? "bg-dark-element" : "bg-light-element"
                  } shadow-md grid place-items-center`}
                >
                  {ele.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
