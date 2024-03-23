interface sortOption {
    label: string;
    sortField: string;
    sortOrder: string;
}

export const sortOptions: sortOption[] = [
    {
        label: 'Asset ID', 
        sortField: 'assetID', 
        sortOrder: 'asc'
    },
    {
        label: 'Asset Name', 
        sortField: 'assetName', 
        sortOrder: 'asc'
    },
    {
        label: 'Asset Type', 
        sortField: 'assetType', 
        sortOrder: 'asc'
    },
    {
        label: 'Asset Value', 
        sortField: 'assetValue', 
        sortOrder: 'asc'
    },
    {
        label: 'Asset Status', 
        sortField: 'assetStatus', 
        sortOrder: 'asc'
    },
    {
        label: 'Assigned Date', 
        sortField: 'assignedDate', 
        sortOrder: 'asc'
    },
    {
        label: 'Due Date', 
        sortField: 'dueDate', 
        sortOrder: 'asc'
    }
]