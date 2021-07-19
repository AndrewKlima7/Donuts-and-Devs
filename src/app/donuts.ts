export interface Donuts{
    count: number;
    data: ResultsData[];
}
export interface ResultsData{
    id: number;
    ref:string;
    name:string;
    calories: number;
    extras: any[];
}