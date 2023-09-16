import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState({
    value: i18n.language.search("en") !== -1 ? "en" : i18n.language,
    label: i18n.language.search("en") !== -1 ? "en" : i18n.language,
  });
  const options = [
    { value: "en", label: "en" },
    { value: "fa", label: "fa" },
  ];

  const langChange = (data: any) => {
    setLang(data);
    console.log(data.value);
    i18n.changeLanguage(data.value);
  };

  const colourStyles: StylesConfig = {
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "white" : "#282c34",
        color: isSelected ? "black" : "white",
        cursor: "pointer",
      };
    },
  };

  return (
    <div style={{ maxWidth: 100 }}>
      <Select
        options={options}
        value={lang}
        onChange={langChange}
        components={{ DropdownIndicator: null }}
        className="selector-custom"
        // classNamePrefix="selector-custom"
        styles={colourStyles}
        classNames={{
          control: () => "selector-custom",
          singleValue: () => "selector-custom",
          menuList: () => "selector-custom",
        }}
      />
    </div>
  );
};
