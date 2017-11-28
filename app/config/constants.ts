import {ChartEntry, Popularity} from '../../types/data'

export class Constants {
    public static actionNames = {};

    public static chartData = [
        {
            id: 1,
            averageViewers: 6000,
            game: 'Hearthstone',
            popularity: Popularity.high
        },
        {
            id: 2,
            averageViewers: 3000,
            game: 'Witcher 3',
            popularity: Popularity.middle
        },
        {
            id: 3,
            averageViewers: 1300,
            game: 'Crossout',
            popularity: Popularity.low
        },
        {
            id: 4,
            averageViewers: 2200,
            game: 'World of Warcraft',
            popularity: Popularity.low
        },
        {
            id: 5,
            averageViewers: 2500,
            game: 'Warcraft 3',
            popularity: Popularity.middle
        }
    ] as ChartEntry[];

    public static extraEntry = {
        id: 6,
        averageViewers: 10000,
        game: 'PUBG',
        popularity: Popularity.high
    } as ChartEntry;

    public static appContainerId = 'appContainer';
}