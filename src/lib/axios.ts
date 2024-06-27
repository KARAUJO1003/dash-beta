import axios, { AxiosError } from "axios";
import "dotenv/config";
import https from "https";
import { destroyCookie, parseCookies, setCookie } from "nookies";
let cookies = parseCookies();
let isRfreshing = false;
let failedRequestsQueue: any[] = [];

export const httpsAgent = new https.Agent({
  key: process.env.key,
  cert: process.env.CERT,
  ca: process.env.CA,
});

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_API_BASE_URL
    : process.env.NEXT_PUBLIC_PROD_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  httpsAgent: httpsAgent,
});

// Você pode adicionar interceptors aqui se necessário
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = cookies["nextauth.token"];
    if (accessToken) {
      config.headers["x-access-token"] = accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.Accept = "application/json";
      config.headers.timeout = 20000;
    } else {
      destroyCookie(undefined, "nextauth.token");
      destroyCookie(undefined, "nextauth.refreshToken");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (
    error: AxiosError<{
      message: any;
      code?: string;
    }>
  ) => {
    console.log("error", error);

    if (error.request) {
      axiosInstance.defaults.baseURL = process.env.ENDPOINT_AVBSERVER;
    }

    if (error.response?.status === 401) {
      if (error.response.data?.code === "token.expired") {
        cookies = parseCookies();
        console.log("Error", error);

        const { "nextauth.refreshToken": refreshToken } = cookies;

        const originalConfig = error.config;

        if (!isRfreshing) {
          isRfreshing = true;
          axiosInstance
            .post("/refresn", {
              refreshToken,
            })
            .then((response) => {
              const { token } = response.data;

              setCookie(undefined, "nextauth.token", token, {
                maxAge: 60 * 60 * 24, // 1 dia
                path: "/",
              });

              setCookie(
                undefined,
                "nextauth.refreshToken",
                response.data.refreshToken,
                {
                  maxAge: 60 * 60 * 24, // 1 dia
                  path: "/",
                }
              );

              axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
              failedRequestsQueue.forEach((request) =>
                request.onSuccess(token)
              );
              failedRequestsQueue = [];
            })
            .catch((err) => {
              failedRequestsQueue.forEach((request) => request.onFailure(err));
              failedRequestsQueue = [];
            })
            .finally(() => {
              isRfreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              error.request.headers.Authorization = `Bearer ${token}`;
              resolve(axiosInstance(error.request));
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      } else if (error.response?.data?.code === "Unauthorized!") {
        console.log("Token inválido ou vencido!");
      } else {
        console.log(error.response?.data?.message);
      }
    } else if (error.response?.status === 404) {
      console.log("Email não cadastrado!");
      return;
    } else if (
      error.response?.status !== 404 &&
      error.response?.status !== 401 &&
      error.request
    ) {
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      axiosInstance.defaults.baseURL = process.env.ENDPOINT_AVBSERVER;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log(
        "problema de conexão com o servidor, favor informar o suporte!"
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
