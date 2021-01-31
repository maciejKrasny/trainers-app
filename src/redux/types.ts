export interface WithPagination<TData> {
    data: TData;
    currentPage: number;
    totalPages: number;
}