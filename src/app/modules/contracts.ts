export class Contracts{
    contractID: number;
    assignedDate: Date;
    title: string;
    description: string;

    constructor(contractID: number, AssignedDate: Date, title: string, description: string){
        this.contractID = contractID;
        this.assignedDate = AssignedDate;
        this.title = title;
        this.description = description;
    }
}