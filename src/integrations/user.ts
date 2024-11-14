import api from "./api";

type UserInfos = {
  name: string;
  email: string;
  password: string;
};

type ResponseType = {
  status: string;
  message: string;
};

type UserDetails = {
  name: string;
  email: string;
  user_id: string;
};

export const userApi = () => ({
  createUser: async (userInfo: UserInfos): Promise<ResponseType> => {
    const { name, email, password } = userInfo;
    const response = await api.post<ResponseType>("/users/signup", {
      name,
      email,
      password,
    });

    return response.data;
  },

  getUser: async (user_id: string): Promise<UserDetails> => {
    const response = await api.get<UserDetails>(`/users/get-user/${user_id}`);
    return response.data;
  },

  forgotPassword: async (email: string): Promise<ResponseType> => {
    const response = await api.post<ResponseType>("/users/forgot-password", {
      email,
    });

    return response.data;
  },

  resetPassword: async (
    resetPasswordToken: string,
    password: string,
  ): Promise<ResponseType> => {
    const response = await api.post<ResponseType>("/users/reset-password", {
      resetPasswordToken,
      password,
    });

    return response.data;
  },
});
