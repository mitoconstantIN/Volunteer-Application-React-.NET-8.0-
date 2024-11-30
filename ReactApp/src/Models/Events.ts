export type EventGet = {
    id: number,
    title: string,
    eventType: string,
    participantsCount: number,
    date: Date,
    points: number,
}

export type EventPost = {
    title: string,
    eventType: string,
    participantsCount: number,
    date: Date,
    points: number,
}
export type Event = {
    id: number,
    title: string,
    eventType: string,
    participantsCount: number,
    date: Date,
    points: number,
    description: string,
}