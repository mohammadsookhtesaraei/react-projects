import app from "./http";

export const searchCoins = (query: string,signal?: AbortSignal) => {
  return app
    .get("/search", {
      params: {
        query,
      },
      signal
    })
    .then(({ data }) => data);
};