export type ClassItemType = {
  name: string;
  displayName: string;
  fees: number;
  stats: {
    enrolled: number;
    available: number;
    total: number;
  };
};
