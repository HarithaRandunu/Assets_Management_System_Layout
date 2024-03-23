export class Assets {

  pictureUrl: string;
  assetID:number;
  assetName: string;
  assetType:string;
  assetValue: number;
  assetStatus:string;
  assignedDate:Date;
  dueDate: Date;

  constructor(
    pictureUrl: string,
    assetName: string,
    assetID: number,
    assetType: string,
    assetValue: number,
    assetStatus: string,
    assignedDate: Date,
    dueDate: Date
  ) {
    
    this.pictureUrl = pictureUrl;
    this.assetID = assetID;
    this.assetName = assetName;
    this.assetType = assetType;
    this.assetValue = assetValue;
    this.assetStatus = assetStatus;
    this.assignedDate = assignedDate;
    this.dueDate = dueDate;
  }
}

