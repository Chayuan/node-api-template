import AbstractController, { IController } from "./abstractController";

class CitiesController extends AbstractController implements IController {
    constructor () {
        super({ modelName: 'city' });
    }
}

export default CitiesController;