interface SortOption {
    label: string;
    sortField: string;
    sortOrder: string;
}

export const sortOptions: SortOption[] = [
    {
        label: 'Request ID',
        sortField: 'requestID',
        sortOrder: 'asc'
    },
    {
        label: 'Request Date',
        sortField: 'requestDate',
        sortOrder: 'asc'
    },
    {
        label: 'Employee ID',
        sortField: 'requestEmployeeID',
        sortOrder: 'asc'
    },
    {
        label: 'Request Title',
        sortField: 'requestTitle',
        sortOrder: 'asc'
    },
    {
        label: 'Request Description',
        sortField: 'requestDescription',
        sortOrder: 'asc'
    },
    {
        label: 'Request Status',
        sortField: 'requestStatus',
        sortOrder: 'asc'
    }
]