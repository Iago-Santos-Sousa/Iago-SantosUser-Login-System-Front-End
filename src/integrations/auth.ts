import api from "./api";

type UserInfos = {
  email: string;
  password: string;
};

type ResponseData = {
  status: string;
  message: string;
};

interface UserResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
    userId: string;
  };
}

export const loginAPi = () => ({
  login: async ({ email, password }: UserInfos): Promise<UserResponse> => {
    const response = await api.post<UserResponse>("/sign", {
      email,
      password,
    });

    return response.data;
  },

  logOut: async (): Promise<ResponseData> => {
    const response = await api.post<ResponseData>("/log-out");
    return response.data;
  },
});
