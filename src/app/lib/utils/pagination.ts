import { Transaction } from "../api/transactions";

const TOTAL_PAGES = 15
export const getTotalPages = (totalItems: number) => Math.ceil(totalItems / TOTAL_PAGES);
export const getTransactionsByPage = (transactions: Transaction[], page: number) => transactions.slice(TOTAL_PAGES * (page - 1), TOTAL_PAGES * page)