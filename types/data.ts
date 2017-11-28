export enum Popularity {'low', 'middle', 'high'}

export interface ChartEntry {
    id: number;
    averageViewers: number;
    game: string;
    popularity: Popularity;
}