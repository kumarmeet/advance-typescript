//discriminating unions
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(network: NetworkState) {
  switch (network.state) {
    case "failed":
      console.table(network.code);
      break;
    case "loading":
      console.table("Loading........");
      break;
    case "success":
      console.table(network.response);
  }
}

const netLoading: NetworkLoadingState = {
  state: "loading",
};

logger(netLoading);

const netSuccess: NetworkSuccessState = {
  response: {
    title: "Working",
    summary: "This requesting is working fine",
    duration: 0.4,
  },
  state: "success",
};

logger(netSuccess);

const netFailed: NetworkFailedState = {
  code: 912,
  state: "failed",
};

logger(netFailed);
