export type testStateType = {
  test: string;
};

export type testStateStore = testStateType & {
  setTest: (value: string) => void;
};
