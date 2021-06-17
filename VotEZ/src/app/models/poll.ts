import { pollChoice } from "./pollchoice";
export interface poll {
    id: number,
    question: string,
    code: string,
    dateToClose: any,
    email: string,
    pollChoice: pollChoice
}