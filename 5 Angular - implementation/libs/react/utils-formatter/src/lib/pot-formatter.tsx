export const potFormatter = (pot: number) => `$ ${(pot === undefined ? 'N/A' : pot.toFixed(0))}`;