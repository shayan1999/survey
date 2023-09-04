// import { userBase, userState } from "./types/Use";
import { create } from "zustand";
import { testStateStore } from "./types/test";

export const useTestStore = create<testStateStore>()((set) => ({
  test: "",
  setTest: (value) => {
    set({ test: value });
  },
}));
