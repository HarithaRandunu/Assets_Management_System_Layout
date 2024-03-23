
interface SortOption {
    label: string;
    sortField: string;
    sortOrder: string;
}
export const sortOptions: SortOption[] = [
    {
        label: 'Vendor ID',
        sortField: 'vendorID',
        sortOrder: 'asc'
    },
    {
        label: 'Vendor Name',
        sortField: 'vendorName',
        sortOrder: 'asc'
    },
    {
        label: 'Vendor Address',
        sortField: 'vendorAddress',
        sortOrder: 'asc'
    },
    {
        label: 'Contact No',
        sortField: 'contactNo',
        sortOrder: 'asc'
    },
    {
        label: 'Vendor Email',
        sortField: 'vendorEmail',
        sortOrder: 'asc'
    },
    {
        label: 'Supply Assets',
        sortField: 'supplyAssets',
        sortOrder: 'asc'
    }
] 