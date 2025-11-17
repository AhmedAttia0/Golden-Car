import { LocalCarService, RemoteCarService } from "./CarsService";
class DataFactory {
  static createCarService(isLocal) {
    if (isLocal) {
      return new LocalCarService();
    } else {
      return new RemoteCarService();
    }
  }
}

export default DataFactory;
