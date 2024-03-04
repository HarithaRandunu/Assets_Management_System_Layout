export class Vendors {
    vendorID: number;
    pictureUrl: string;
    vendorName: string;
    vendorAddress: string;
    contactNo: string;
    vendorEmail: string;
    supplyAssetsType: string;

    constructor(
        vendorID: number, 
        pictureUrl: string, 
        vendorName: string, 
        vendorAddress: string, 
        contactNo: string, 
        vendorEmail: string, 
        supplyAssetsType: string
    ) {
        this.vendorID = vendorID;
        this.pictureUrl = pictureUrl;
        this.vendorName = vendorName;
        this.vendorAddress = vendorAddress;
        this.contactNo = contactNo;
        this.vendorEmail = vendorEmail;
        this.supplyAssetsType = supplyAssetsType;
    }
}