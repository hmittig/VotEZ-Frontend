import { pollchoice } from "./pollchoice";
export interface poll {
    id: number,
    question: string,
    code: string,
    dateToClose: Date,
    email: string,
    pollchoice: pollchoice
}