export class Requests {
    requestID: number;
    requestDate: Date;
    requestEmployeeID: number;
    requestTitle: string;
    requestDescription: string;
    requestStatus: string;

    constructor(
        requestID: number,
        requestDate: Date,
        requestEmployeeID: number,
        requestTitle: string,
        requestDescription: string,
        requestStatus: string
    ) {
        this.requestID = requestID;
        this.requestDate = requestDate;
        this.requestEmployeeID = requestEmployeeID;
        this.requestTitle = requestTitle;
        this.requestDescription = requestDescription;
        this.requestStatus = requestStatus;
    }
}