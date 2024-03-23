export class Reports {
    reportID: number;
    reportDate: Date;
    reportTitle: string;
    reportDescription: string;
    reportStatus: boolean;

    constructor(
        reportID: number,
        reportDate: Date,
        reportTitle: string,
        reportDescription: string,
        reportStatus: boolean
    ) {
        this.reportID = reportID;
        this.reportDate = reportDate;
        this.reportTitle = reportTitle;
        this.reportDescription = reportDescription;
        this.reportStatus = reportStatus;
    }
}