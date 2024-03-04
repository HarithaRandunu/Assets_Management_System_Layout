export class Notifications {
    notificationID: number;
    notificationDate: Date;
    notificationTitle: string;
    notificationDescription: string;
    notificationChecked: string;

    constructor(
        notificationID: number,
        notificationDate: Date,
        notificationTitle: string,
        notificationDescription: string,
        notificationChecked: string
    ) {
        this.notificationID = notificationID;
        this.notificationDate = notificationDate;
        this.notificationTitle = notificationTitle;
        this.notificationDescription = notificationDescription;
        this.notificationChecked = notificationChecked;
    }
}