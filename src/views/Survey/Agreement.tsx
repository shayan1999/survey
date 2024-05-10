import { useState } from "react";
import { LangSwitcher } from "../../components/LangSwitcher";
import { useTranslation } from "react-i18next";

const Agreement = ({ submit }: { submit: () => void }) => {
  const [agree, setAgree] = useState(false);
  const { t } = useTranslation();
  const data: { title: string; description: string }[] = t("consent:data", {
    returnObjects: true,
  });

  return (
    <div className="basic-container d-flex flex-column align-items-center p-4">
      <div className="max-phone flex-1 overflow-auto px-3">
        <div className="d-flex flex-row justify-content-end w-100">
          <LangSwitcher />
        </div>
        <h2 className="text-white mb-5">{t("consent:title")}</h2>
        <div className="flex-1 d-flex flex-column w-100">
          {data?.map((item, idx) => {
            return detailsComponent(item.title, item.description, idx);
          })}

          <div className="d-flex flex-row align-items-start my-4">
            <div className="mt-2 mx-4">
              <label className="check-container">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                />
                <span className="custom-checkmark" />
              </label>
            </div>
            <h5 className="text-white" onClick={() => setAgree(!agree)}>
              {t("consent:agreement")}
            </h5>
          </div>
          <button
            disabled={!agree}
            className="submit-button flex-1 primary-button my-3"
            onClick={submit}
          >
            {t("consent:button:start")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Agreement;

const detailsComponent = (title: string, description: string, idx: number) => {
  return (
    <span className="consents-decription mb-4" key={idx}>
      <b className="text-white">
        {title}
        {description ? ":" : ""}
      </b>{" "}
      <br />
      {description}
    </span>
  );
};
