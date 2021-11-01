import { padding } from "@mui/system";
import React, { useState } from "react";
import BasicCard from "./CompanyCard";

const CompanyProfile = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [linkText, setLinkText] = useState("");
  return (
    <div>
      <h1>Welcome To Company Portal</h1>
      <div className="rowValues">
        <BasicCard
          title={"Onboarding"}
          body={"Pending Status"}
          linkText={"register"}
        />
        <BasicCard
          title={"Company Details"}
          body={"Not Approved yet"}
          linkText={"info"}
        />
        <BasicCard title={"Date Status"} body={"1 Nov"} linkText={"date"} />
      </div>
    </div>
  );
};

export default CompanyProfile;
