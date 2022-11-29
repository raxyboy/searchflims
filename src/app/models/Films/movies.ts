export class MovieResponse{
    constructor(
        public title: string,
        public year: string,
        public rated: string,
        public released: string,
        public runtime:	string,
        public genre: string,
        public director: string,
        public writer: string,
        public actors: string,
        public plot: string,
        public language: string,
        public country: string,
        public awards: string,
        public poster: string,
        public metascore: string,
        public imdbrating: string,
        public imdbvotes: string,
        public imdbid: string,
        public type: string,
        public dvd: string,
        public boxoffice: string,
        public production: string,
        public website:	string,
        public response: string,
        public ratings:[{
             source:string,
             value:String

        }]
        
    ){}
}