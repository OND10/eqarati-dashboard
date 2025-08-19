import {
  ApiErrorBody,
  handleResponse,
} from "../../../common/handler/response-handler";
import { LoginModel } from "../../../features/common_services/types/auth";
// import { updateGlobalLoader } from "../../Redux/slices/global-loader";
// import { store } from "../../Redux/store";
import apiClient from "./api-client";
import APP_URL from "./api-url";
import axios, { AxiosError, AxiosResponse } from "axios";

export const GetWithAuth = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await apiClient.get<T>(checkTrailing(endpoint));
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const GetAllWithAuth = async <T>(
  endpoint: string,
  offset?: number,
  limit?: number | "",
  params?: string | ""
): Promise<T> => {
  try {
    let url: string;
    if (params) {
      url = limit
        ? `${endpoint}${params}&offset=${offset ?? 0}&limit=${limit}`
        : endpoint;
    } else {
      url = limit
        ? `${endpoint}?offset=${offset ?? 0}&limit=${limit}`
        : endpoint;
    }
    const response = await apiClient.get<T>(checkTrailing(url, true));
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err || undefined);
    throw err;
  }
};

export const GetPaginationWithAuth = async <T>(
  endpoint: string
): Promise<T> => {
  try {
    const response = await apiClient.get<T>(checkTrailing(endpoint));
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Logout = async (endpoint: string, data: string): Promise<void> => {
  try {
    await apiClient.post(checkTrailing(endpoint), data);
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Login = async <T>(
  endpoint: string,
  data: LoginModel
): Promise<T> => {
  try {
    const response = await axios.post(APP_URL + checkTrailing(endpoint), data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Register = async <T>(
  endpoint: string,
  data: Partial<T>
): Promise<T> => {
  try {
    const response = await apiClient.post(checkTrailing(endpoint), data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Post = async <T, dataT>(
  endpoint: string,
  data: Partial<dataT>,
  headers?: string | ""
): Promise<T> => {
  try {
    const response = await apiClient.post(checkTrailing(endpoint), data, {
      headers: {
        "Content-Type": headers ?? "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Put = async <T, dataT>(
  endpoint: string,
  id: string | number | "",
  data: Partial<dataT>,
  headers?: string | ""
): Promise<T> => {
  try {
    if (id) {
      const response = await apiClient.put(
        checkTrailing(`${endpoint}${id}`),
        data,
        {
          headers: {
            "Content-Type": headers ?? "application/json",
          },
        }
      );
      return response.data;
    }
    const response = await apiClient.put(checkTrailing(endpoint), data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const PutWithFormData = async <T>(
  endpoint: string,
  id: string | number | "",
  data: FormData
  // trailing: string | ""
): Promise<T> => {
  try {
    if (id) {
      const response = await apiClient.put(
        checkTrailing(`${endpoint}${id}`),
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    }
    const response = await apiClient.put(checkTrailing(endpoint), data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Patch = async <T, dataT>(
  endpoint: string,
  data: Partial<dataT>
): Promise<T> => {
  try {
    const response = await apiClient.patch(checkTrailing(endpoint), data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

export const Delete = async (endpoint: string): Promise<boolean> => {
  try {
    await apiClient.delete(checkTrailing(endpoint));
    return true;
  } catch (error) {
    const err = error as AxiosError;
    await handleResponse(err);
    throw err;
  }
};

function checkTrailing(endpoint: string, checkNumber?: boolean): string {
  const lastIndex = endpoint.at(-1) ?? "";
  if (
    checkNumber &&
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(lastIndex)
  ) {
    return endpoint;
  }

  if (lastIndex != "/") {
    return endpoint + "/";
  }
  return endpoint;
}
