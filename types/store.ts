import {ChartEntry} from './data'

export interface StoreData {
    entries: ChartEntry[];
    currentEntry: number;
}