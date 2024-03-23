interface SortOption {
    label: string;
    sortField: string;
    sortOrder: string;
}

export const sortOptions: SortOption[] = [
    {
        label: 'Report ID',
        sortField: 'reportID',
        sortOrder: 'asc'
    },
    {
        label: 'Report Date',
        sortField: 'reportDate',
        sortOrder: 'asc'
    },
    {
        label: 'Report Title',
        sortField: 'reportTitle',
        sortOrder: 'asc'
    },
    {
        label: 'Report Description',
        sortField: 'reportDescription',
        sortOrder: 'asc'
    },
    {
        label: 'Report Status',
        sortField: 'reportStatus',
        sortOrder: 'asc'
    }
]