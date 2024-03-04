export class Reports {
    reportID: number;
    reportDate: Date;
    reportTitle: string;
    reportDescription: string;
    reportChecked: boolean;

    constructor(
        reportID: number,
        reportDate: Date,
        reportTitle: string,
        reportDescription: string,
        reportChecked: boolean
    ) {
        this.reportID = reportID;
        this.reportDate = reportDate;
        this.reportTitle = reportTitle;
        this.reportDescription = reportDescription;
        this.reportChecked = reportChecked;
    }
}