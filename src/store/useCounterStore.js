import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    devtools(
      (set) => ({
        count: 1,
        increment: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 1 }),
        setNumber: (number) => set({ count: number }),
      }),
      { name: "counter" }
    )
  )
);
