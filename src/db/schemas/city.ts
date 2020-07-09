import { Schema } from 'mongoose';

interface ICustomSchema {
    collection: string,
    definition: Schema
}

const citiesSchema: ICustomSchema = {
    collection: 'cities',
    definition: new Schema({
        _id: String,
        Title: String,
        Year: Number,
        genres: [String],
        Country: String,
        Actors: String,
        Director: String
    })
};

export default citiesSchema;