export class Notifications {
    notificationID: number;
    notificationDate: Date;
    notificationTitle: string;
    notificationDescription: string;
    notificationStatus: string;

    constructor(
        notificationID: number,
        notificationDate: Date,
        notificationTitle: string,
        notificationDescription: string,
        notificationStatus: string
    ) {
        this.notificationID = notificationID;
        this.notificationDate = notificationDate;
        this.notificationTitle = notificationTitle;
        this.notificationDescription = notificationDescription;
        this.notificationStatus = notificationStatus;
    }
}