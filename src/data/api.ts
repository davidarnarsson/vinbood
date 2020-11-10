import axios, { AxiosError, Method } from "axios";

async function request(path: string, params: object, method: Method = "GET") {
  try {
    const x = await axios
      .request({
        url: `https://www.vinbudin.is/addons/origo/module/ajaxwebservices/search.asmx/${path}`,
        method,
        params,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
    return JSON.parse(x.data.d);
  } catch (e) {
    console.log(e.request, e.toJSON());
  }
}

export const search = async (query: object) => request("DoSearch", query);
