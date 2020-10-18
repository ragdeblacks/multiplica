
export class Colors {
    constructor(
        public page: number,
        // tslint:disable-next-line: variable-name
        public per_page: number,
        public total: number,
        // tslint:disable-next-line: variable-name
        public total_pages: number,
        public data: Data[]
    ){
    }
}

export class Data{
    constructor(
        public id: number,
        public name: string,
        public year: number,
        public color: string,
        // tslint:disable-next-line: variable-name
        public pantone_value: string,
    ){}
}
