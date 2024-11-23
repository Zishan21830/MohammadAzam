import React from "react";
import excel from "../assets/excel.png";
import sheets from "../assets/sheets.png";
import powerBI from "../assets/powerBI.png";
import Tableau from "../assets/Tableau.png";
import Headline from "./Headline";

const Skills = () => {
  const skills = {
    "Advanced Excel": excel,
    "Google Sheets": sheets,
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "Tableau": Tableau,
    "Power BI": powerBI,
    "R": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
    "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    "Numpy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  };

  return (
    // Skills section start
    <div className="min-h-[40vh]  md:px-20 xs:px-4">
      <Headline heading={"Skills"}/>

      <div className="h-full flex justify-center items-center flex-wrap mb-3">
      {Object.keys(skills).map((key,idx) => {
          return (
            <div key={idx+11} className=" md:w-36 md:h-36 xs:w-24 xs:h-24 rounded-lg border-2 border-b-4 border-orange-500 flex flex-col justify-center items-center m-2">
            <img src={skills[key]} alt={key} className="md:w-24 md:h-20 xs:w-14 xs:h-12"/>
              <p className="text-orange-500 font-mono font-semibold pt-1 xs:text-[.7rem] md:text-sm ">{key}</p>
            </div>
          );
        })}
      </div>
    </div>
    // skills section ends
  );
};

export default Skills;
