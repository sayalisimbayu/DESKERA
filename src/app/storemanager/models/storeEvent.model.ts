import { Store } from "./store.model";

export class StoreEvent {
  public key: string;
  public path: string[];
  public store: Store;
}

