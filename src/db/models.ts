import { Model } from 'mongoose';
import schemas from './schemas';
import { database } from './index';

const initializedModels = {};

const getModel = (modelName: string): Model => {
    if (initializedModels[modelName]) {
        return initializedModels[modelName];
    }

    const schema = schemas[modelName];
    if (!schema) {
        throw new Error(`Aucun schéma n'exite pour ${modelName}`);
    }
    console.log(`Creation du model pour ${modelName}...`);
    const model = database.model(schema.collection, schema.definition, schema.collection);

    initializedModels[modelName] = model;

    return model;
};

export default getModel;