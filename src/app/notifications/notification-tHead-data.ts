interface SortOption {
    label: string;
    sortField: string;
    sortOrder: string;
}

export const sortOptions: SortOption[] = [
    {
        label: 'Notification ID',
        sortField: 'notificationID',
        sortOrder: 'asc'
    },
    {
        label: 'Notification Date',
        sortField: 'notificationDate',
        sortOrder: 'asc'
    },
    {
        label: 'Notification Title',
        sortField: 'notificationTitle',
        sortOrder: 'asc'
    },
    {
        label: 'Notification Description',
        sortField: 'notificationDescription',
        sortOrder: 'asc'
    },
    {
        label: 'Notification Status',
        sortField: 'notificationStatus',
        sortOrder: 'asc'
    }
]