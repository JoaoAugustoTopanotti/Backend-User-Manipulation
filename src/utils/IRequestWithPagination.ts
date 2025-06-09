export interface IRequestWithPagination {
  page?: number;
  take?: number;
  search?: string;
  orderBy?: OrderBy;
}

export interface OrderBy {
  field: string;
  direction: "asc" | "desc";
}