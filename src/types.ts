export interface IStoreState {
    router: any,
    carers: ICarerSummary[]
}

export interface ICarerSummary {
    id: number,
    age: string,
    employmentStatus: number,
}