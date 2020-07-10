import { Schema } from 'mongoose';

interface ICustomSchema {
    collection: string,
    definition: Schema
}

const citiesSchema: ICustomSchema = {
    collection: 'cities',
    definition: new Schema({
        name: {  type: String, required: true },
        latlng: {
            lat: {  type: String, required: true },
            lng: {  type: String, required: true }
        }
    })
};

export default citiesSchema;