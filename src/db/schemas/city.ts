import { Schema } from 'mongoose';

const citiesSchema = new Schema({
    _id: String,
    Title: String,
    Year: Number,
    genres: [String],
    Country: String,
    Actors: String,
    Director: String
});


export default citiesSchema;