import React from "react";
import BasicCard from "../components/company/CompanyCard";

export const Dashboard = (props) => {
  return (
    <div>
      <h1>Welcome to Dashboard!!</h1>
      <div className="rowValues">
        <BasicCard title={"Features"} body={"Features"} linkText={"features"} />
        <BasicCard
          title={"Number of Projects"}
          body={0}
          linkText={"projects"}
        />
        <BasicCard title={"Total Employee"} body={0} linkText={"date"} />
        <BasicCard title={"Features"} body={"0"} linkText={"features"} />
        <BasicCard
          title={"Number of Projects"}
          body={0}
          linkText={"projects"}
        />
        <BasicCard title={"Total Employee"} body={0} linkText={"date"} />
      </div>
    </div>
  );
};
