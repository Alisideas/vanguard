import { ReactNode } from "react";

// app/types/card.ts
export type Card = {
  seatNumber: ReactNode;
  id: number;
  name: string;
  description: string;
  color: string;
  image: string;
  package: 10 | 12 | 13;
};
