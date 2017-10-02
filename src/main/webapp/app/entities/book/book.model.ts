import { BaseEntity } from './../../shared';

export class Book implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public publicationDate?: any,
        public price?: number,
        public authorId?: number,
    ) {
    }
}
