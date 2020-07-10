import { Document } from 'mongoose';
import getModel from '../db/models';

interface IProps {
    modelName: string
}

export interface IController {
    getModel(): any
    getById(id: number): Promise<any>
    getAll(): Promise<any>
    create(data: object): Promise<any>
}

class AbstractController implements IController {
    protected modelName: string;
    protected model: Document;

    constructor (props: IProps) {
        // Parler de la déconstruction
        const { modelName } = props;
        this.modelName = modelName;
        this.model = getModel(this.modelName);
    }

     getModel(): any {
        return this.model;
    }

    async getById (id: number): Promise<any> {
        const document = await this.model.findById(id);
        return document;
    }

    async getAll (): Promise<Document[]> {
        const documents = await this.model.find({});
        return documents;
    }

    async create(data): Promise<any> {
        const object = new this.model(data);
        const insertedObject = await object.save();
        return insertedObject;
    }
}

export default AbstractController;