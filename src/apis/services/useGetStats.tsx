import { useQuery } from "@tanstack/react-query";
import { client } from "../client";

type StatType = {
  maxData: number;
  mean: number;
  minData: number;
  stdDev: number;
  size: number;
  _id: string;
};

export type StatsType = {
  all: StatType;
  gender?: StatType;
  ageGroup?: StatType;
};

const getStats = async (gender: string, ageGroup: string) => {
  const { data } = await client(`/stats?gender=${gender}&ageGroup=${ageGroup}`);

  return data?.data;
};

export default function useGetStats(gender: string, ageGroup: string) {
  return useQuery<StatsType>(["Stats"], () => getStats(gender, ageGroup));
}
