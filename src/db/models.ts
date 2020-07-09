import { Model } from 'mongoose';
import schemas from './schemas';
import { database } from './index';

const initializedModels = {};

const getModel = (modelName: string): Model => {
    if (initializedModels[modelName]) {
        // le model est déjà créé
        return initializedModels[modelName];
    }

    const schema = schemas[modelName];
    if (!schema) {
        throw new Error(`Aucun schéma n'exite pour ${modelName}`);
    }
    console.log(`Creation du model pour ${modelName}...`);
    const model = database.model(schema.collection, schema.definition, schema.collection);

    // on stocke le model qu'on vient de créer
    initializedModels[modelName] = model;

    return model;
};

export default getModel;