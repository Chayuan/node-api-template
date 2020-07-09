import { Document } from 'mongoose';
import getModel from '../db/models';

interface IProps {
    modelName: string
}

export interface IController {
    getById(id: number): any
    getById(id: number): any
    getAll(): any
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

    async getById (id: number): Promise<any> {
        const document = await this.model.findById(id);
        return document;
    }

    async getAll (): Promise<Document[]> {
        const documents = await this.model.find({});
        return documents;
    }
}

export default AbstractController;