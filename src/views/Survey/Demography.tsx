import React from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";

type Props = {
  data: {
    age: string;
    gender: "man" | "woman" | "others";
    education: string;
    pool: string;
  };
  onChange: ({ value, name }: { value: string; name: string }) => void;
  onSubmit: (e: any) => void;
  loading: boolean;
};

const DemographyView = ({ data, onChange, onSubmit, loading }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="basic-container d-flex flex-column justify-content-center align-items-center">
      <div className="w-100 flex-1 d-flex flex-column justify-content-center align-items-center p-4 answers-box">
        <span className="text-white text-center mb-4">
          {t("demography:description")}
        </span>
        <form onSubmit={onSubmit}>
          <label className="text-white">{t("demography:age.label")}</label>
          <input
            placeholder={t("demography:age.placeholder")}
            required
            className="text-input"
            type="number"
            name="age"
            onChange={(e) => onChange(e.target)}
          />
          <label className="text-white">{t("demography:genders.label")}</label>
          <select
            className="text-input"
            name="gender"
            onChange={(e) => onChange(e.target)}
          >
            <option value="man">{t("demography:genders.man")}</option>
            <option value="woman">{t("demography:genders.woman")}</option>
            <option value="optout">{t("demography:genders.others")}</option>
          </select>
          <label className="text-white">
            {t("demography:education.label")}
          </label>
          <select
            className="text-input"
            name="education"
            onChange={(e) => onChange(e.target)}
          >
            <option value="Highschool">
              {t("demography:education.highschool")}
            </option>
            <option value="Ba/BSc">{t("demography:education.ba/bs")}</option>
            <option value="MSc">{t("demography:education.msc")}</option>
            <option value="PhD/above">{t("demography:education.phd")}</option>
          </select>
          <label className="text-white">{t("demography:country.label")}</label>
          <CountryDropdown
            value={data.pool}
            onChange={(value) => onChange({ value: value, name: "pool" })}
            classes="text-input"
          />
          <button
            className="submit-button w-100 primary-button mt-4 d-flex flex-row justify-content-center"
            type="submit"
            disabled={loading}
          >
            {t("demography:buttons.submit")}{" "}
            {loading && (
              <ReactLoading
                type={"spin"}
                color={"white"}
                height={20}
                width={20}
                className="ms-2"
              />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemographyView;
