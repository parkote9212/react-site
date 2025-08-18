import {create} from "zustand";

export const store_zu = create((set) => ({
    count : 0,
    increament: () => set((state) => ({
        count : state.count + 1
     })),
     decreament:() => set((state) => ({
        count : state.count - 1
     })),
         clear:() => set({ count: 0 }),
}))