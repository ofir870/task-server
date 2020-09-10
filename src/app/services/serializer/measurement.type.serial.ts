import { MeasurementType } from "../../models/measurement-type";
export class MeasurementSerial {
    fromJson(json: any): MeasurementType {
      const measurement = new MeasurementType();
      measurement.id = json.id;
      measurement.name = json.name;

  
      return measurement;
    }
  
    toJson(measurement: MeasurementType): any {
      return {
        id: measurement.id,
        name: measurement.name
      };
    }
  }