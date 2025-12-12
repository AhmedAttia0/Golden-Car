import { LocalService, RemoteService } from "./Service";
class DataFactory {
  static createService(isLocal) {
    if (isLocal) {
      return new LocalService();
    } else {
      return new RemoteService();
    }
  }
}

export default DataFactory;
