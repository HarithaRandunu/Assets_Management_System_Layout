export class Assets {

  pictureUrl: string;
  assetName: string;
  id:number;
  model:string;
  status:string;
  createdOn:string;

  constructor(
    pictureUrl: string,
    assetName: string,
    id: number,
    model: string,
    status: string,
    createdOn: string
  ) {
    this.pictureUrl = pictureUrl;
    this.assetName = assetName;
    this.id = id;
    this.model = model;
    this.status = status;
    this.createdOn = createdOn;
  }
}

