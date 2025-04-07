import React from "react";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "../components/LangSwitcher";
import { useParams } from "react-router-dom";

export default function Appreciate() {
  const { t } = useTranslation();
  const { score } = useParams();
  return (
    <div className="basic-container d-flex flex-column align-items-center p-4">
      <div className="d-flex flex-row justify-content-end w-100">
        <LangSwitcher />
      </div>
      <div className="max-phone flex-1 overflow-auto px-3 d-flex justify-content-center align-items-center">
        <span className="text-white h3 text-center">
          Your Score is: {score}<br/>
          {t("consent:appreciate")}
        </span>
      </div>
    </div>
  );
}
