import { padding } from "@mui/system";
import React, { useState } from "react";
import BasicCard from "./CompanyCard";
import { useSelector } from "react-redux";

const CompanyProfile = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [linkText, setLinkText] = useState("");
  const roleName = useSelector((state) => state.user.userLogin.roleName);
  return (
    <div>
      <h1>Welcome To Company Portal</h1>
      <div className="rowValues">
        {roleName === "SUPER_ADMIN" ? (
          <>
            <BasicCard
              title={"Onboarding"}
              body={"Pending Status"}
              linkText={"register"}
            />

            <BasicCard title={"Company List"} body={"view"} linkText={"list"} />
          </>
        ) : (
          ""
        )}

        {roleName === "ADMIN"}
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
