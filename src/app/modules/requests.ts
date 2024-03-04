export class Requests {
    requestID: number;
    requestEmployeeID: number;
    requestEmployeeName: string;
    requestDate: Date;
    requestTitle: string;
    requestDescription: string;
    requestChecked: string;

    constructor(
        requestID: number,
        requestEmployeeID: number,
        requestEmployeeName: string,
        requestDate: Date,
        requestTitle: string,
        requestDescription: string,
        requestChecked: string
    ) {
        this.requestID = requestID;
        this.requestEmployeeID = requestEmployeeID;
        this.requestEmployeeName = requestEmployeeName;
        this.requestDate = requestDate;
        this.requestTitle = requestTitle;
        this.requestDescription = requestDescription;
        this.requestChecked = requestChecked;
    }
}