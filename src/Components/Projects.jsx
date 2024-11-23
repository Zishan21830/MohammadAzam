import React from "react";
import Headline from "./Headline";

import { FaGithub} from "react-icons/fa";

const Projects = () => {
    const projectsDetails = {
        project1: {
          projectName: "Sales Report",
          projectDesc:
            "A detailed report that analyzes sales data using Excel and SQL. The report highlights trends, anomalies, and forecasts based on historical data.",
          teckStack: ["Excel", "SQL", "Tableau", "Python"],
        },
        project2: {
          projectName: "Inventory Management",
          projectDesc:
            "A system to manage inventory with real-time updates using modern tools, ensuring optimized stock levels and reducing operational costs.",
          teckStack: ["JavaScript", "React", "Node.js", "MongoDB"],
        },
        project3: {
          projectName: "Marketing Dashboard",
          projectDesc:
            "An analytics dashboard built to visualize marketing campaigns and measure return on investment (ROI) using Power BI and SQL.",
          teckStack: ["Power BI", "DAX", "SQL"],
        },
        project4: {
          projectName: "Customer Segmentation",
          projectDesc:
            "Clustering customers into segments based on purchasing behavior using Python and unsupervised machine learning techniques like K-Means.",
          teckStack: ["Python", "Pandas", "Scikit-Learn"],
        },
        project5: {
          projectName: "Financial Forecasting",
          projectDesc:
            "A project to predict future financial trends using time series analysis with ARIMA or Facebook Prophet, and visualize predictions with Tableau.",
          teckStack: ["Python", "Tableau", "Prophet", "Excel"],
        },
        project6: {
          projectName: "Data Cleaning & Transformation",
          projectDesc:
            "A hands-on project focusing on data cleaning and transformation, where messy data is preprocessed using Python libraries like Pandas and cleaned for analysis.",
          teckStack: ["Python", "Pandas", "Excel"],
        },
      };
      

  console.log(Object.values(projectsDetails));
  
  
  return (
    <div className="min-h-[80vh]  md:px-20 xs:px-4">
      <Headline heading={"Projects"} />

      {/* All projects section start */}
      <section className="flex justify-center items-center gap-4 flex-wrap">
      <div className="flex flex-wrap justify-center pb-10 gap-4">
      {Object.values(projectsDetails).map((project, index) => (
        <div
          key={index}
          className=" xs:min-h-[8rem] xs:w-[20rem] p-3 border-2 border-b-4 border-orange-500 rounded-lg"
        >
          {/* Project image */}
          {/* <div className="h-[15rem] border-2 rounded-lg bg-gray-200"></div> */}
          {/* Project details */}
          <div>
            <h3 className="mt-2 font-semibold text-xl text-orange-500">
              {project.projectName}
            </h3>
            <p className="text-white text-sm mt-1">{project.projectDesc}</p>
            <div className="mt-2">
              <h4 className="font-semibold text-orange-500">Tech Stack</h4>
              <div className="list-disc text-gray-600 flex flex-wrap gap-1">
                {project.teckStack.map((tech, idx) => (
                  <span key={idx} className="border-2 border-orange-500 border-b-4 rounded-lg mr-2 p-1 text-white">{tech}</span>
                ))}
              </div>
            </div>
                <a href="#"><FaGithub className="text-orange-500 mt-4 text-2xl"/></a>
          </div>
        </div>
      ))}
    </div>
      </section>
      {/* All projects section ends */}
    </div>
  );
};

export default Projects;
