import { GoalsModel } from "../../models/goals-model";

export class GoalsSerial {
    fromJson(json: any): GoalsModel {
      const goalsModel = new GoalsModel();
      goalsModel.id = json.id;
      goalsModel.name = json.name;

  
      return goalsModel;
    }
  
    toJson(goalsModel: GoalsModel): any {
      return {
        id: goalsModel.id,
        name: goalsModel.name
      };
    }
  }