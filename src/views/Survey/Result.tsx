import { Dispatch, SetStateAction } from "react";
import CountUp from "react-countup";
import ResultDescription from "../../components/ResultDescription";
import GaussianPlot from "../../components/GaussianPlot";
import { StatsType } from "../../apis/services/useGetStats";
import MetricIcon from "../../assets/MetricIcon.svg";
import Loading from "react-loading";
import { t } from "i18next";

type Props = {
  score: number;
  setAnimationEnd: Dispatch<SetStateAction<boolean>>;
  animationEnd: boolean;
  isLoading: boolean;
  data?: StatsType;
  showPlots: boolean;
  setShowPlots: Dispatch<SetStateAction<boolean>>;
};

const Result = ({
  score,
  setAnimationEnd,
  animationEnd,
  isLoading,
  data,
  showPlots,
  setShowPlots,
}: Props) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="score-container d-flex flex-column align-items-center p-4 pb-5">
        {isLoading && <Loading />}
        <div
          className={`w-100 max-phone d-flex flex-row justify-content-between align-items-start animation ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="fs-3 fw-bolder text-white">
            {t("result:yourScore")}
          </span>
        </div>
        {!isLoading && (
          <>
            <CountUp
              start={-100}
              end={score}
              duration={2.75}
              delay={0}
              onEnd={() => {
                setAnimationEnd(true);
                setTimeout(() => {
                  setShowPlots(true);
                }, 500);
              }}
            >
              {({ countUpRef }) => (
                <div className="w-100 max-phone d-flex flex-row justify-content-between align-items-center">
                  <div className="flex-1" />
                  <span
                    ref={countUpRef}
                    className="fs-1 fw-bolder text-white flex-1 text-center"
                  />
                  <img
                    src={MetricIcon}
                    alt="Metric Icon"
                    className="w-25 flex-1"
                  />
                </div>
              )}
            </CountUp>
          </>
        )}
        <ResultDescription score={score} show={animationEnd} />
      </div>
      <div className="results-container flex-1 d-flex flex-column align-items-center p-4 pt-5">
        <span
          className={`fs-3 fw-bolder text-white w-100 max-phone animation ${
            showPlots ? "opacity-100 mt-0" : "opacity-0 mt-2"
          } mb-5`}
        >
          {t("result:yourPlots")}
        </span>
        {!!data && !!data.all && (
          <GaussianPlot
            mean={data.all.mean}
            std={data.all.stdDev}
            threshold={score}
            stepSize={1}
            desiredSum={data.all.size}
            plotName="plotAll"
            show={showPlots}
          />
        )}
        {!!data && !!data.ageGroup && (
          <GaussianPlot
            mean={data.ageGroup.mean}
            std={data.ageGroup.stdDev}
            threshold={score}
            stepSize={1}
            desiredSum={data.ageGroup.size}
            plotName="plotAge"
            show={showPlots}
          />
        )}
        {!!data && !!data.gender && (
          <GaussianPlot
            mean={data.all.mean}
            std={data.all.stdDev}
            threshold={score}
            stepSize={1}
            desiredSum={data.gender.size}
            plotName="plotGender"
            show={showPlots}
          />
        )}
      </div>
    </div>
  );
};

export default Result;
