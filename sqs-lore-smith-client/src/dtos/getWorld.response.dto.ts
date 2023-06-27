export interface GetWorldResponseDTO {
    time: number;
    entities: {
        id: number,
        name: string,
        size: number
    }[];
}