import { create } from "zustand";


export const store_zu2 = create((set) => ({
    color: "",
    red: () => set((state) => ({

        color: state.color = "red"
    })),
    blue: () => set((state) => ({
        color: state.color = "blue"
    })),
    remove: () => set({ color: "" }),
}))