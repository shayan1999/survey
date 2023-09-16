import { useTranslation } from "react-i18next";
// @ts-ignore
export const RtlHandler = ({ children }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa";

  return <div dir={isRtl ? "rtl" : "ltr"}>{children}</div>;
};
