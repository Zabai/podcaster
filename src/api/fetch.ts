import { getDateDiffInDays } from "@/utils/date";

export function fetcher(...args: [RequestInfo, RequestInit]) {
  const [requestInfo] = args;
  const url = typeof requestInfo === "string" ? requestInfo : requestInfo.url;

  try {
    const cachedData = JSON.parse(localStorage.getItem(url) ?? "");

    const cachedDate = new Date(cachedData.date);
    const currentDate = new Date();

    const dateDiff = getDateDiffInDays(cachedDate, currentDate);
    if (dateDiff >= 1) throw Error("Cached data expired");

    return Promise.resolve(cachedData.data);
  } catch {
    return fetch(...args)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(url, JSON.stringify({ data, date: new Date() }));
        return data;
      });
  }
}
