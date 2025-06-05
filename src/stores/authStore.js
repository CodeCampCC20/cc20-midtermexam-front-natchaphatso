import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: "",
      userId: "b06ccf0a-fa23-4feb-9035-ce18705152a5",
      actionLogin: (input) => {},
      actionRegister: (input) => {},
    }),
    {
      name: "user-store",
    }
  )
);

export default useAuthStore;
