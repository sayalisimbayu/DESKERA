import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StoreEvent } from "./models/storeEvent.model";
import { Store } from "./models/store.model";

@Injectable({ providedIn: "root" })
export class SimpleStoreManagerService {
  private stores: Store[] = [];
  // - We set the initial state in BehaviorSubject's constructor
  // - Nobody outside the Store should have access to the BehaviorSubject
  //   because it has the write rights
  // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
  // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
  //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
  private readonly _stores = new BehaviorSubject<StoreEvent>({
    key: "",
    store: null,
    path: []
  });

  // Expose the observable$ part of the _todos subject (read only stream)
  readonly $store = this._stores.asObservable();
  public add(key: string, value: any) {
    if (!this.stores.some(storeValue => storeValue.key === key)) {
      this.stores.push({ key: key, value: value });
      this._stores.next({
        key: key,
        store: this.stores[this.stores.length - 1],
        path: []
      });
    }
  }
  public remove(key) {
    if (this.stores.some(storeValue => storeValue.key === key)) {
      const keyIndex = this.stores.findIndex(el => el.key === key);
      this.stores.splice(keyIndex, 1);
    }
  }
  public getByKey(key: string) {
    if (this.stores.some(storeValue => storeValue.key === key)) {
      return this.stores.filter(el => el.key === key)[0].value;
    }
  }
  public has(key: string) {
    if (this.stores.some(storeValue => storeValue.key === key)) {
      return true;
    }
    return false;
  }
  public set(key: string, value: any) {
    if (this.stores.some(storeValue => storeValue.key === key)) {
      const keyIndex = this.stores.findIndex(el => el.key === key);
      this.stores[keyIndex].value = value;
      this._stores.next({ key: key, store: this.stores[keyIndex], path: [] });
    }
  }
  public setIn(key: string, path: [], value: any) {
    if (this.stores.some(storeValue => storeValue.key === key)) {
      const keyIndex = this.stores.findIndex(el => el.key === key);
      this.setInvalue(this.stores[keyIndex].value, path, value);
      this._stores.next({ key: key, store: this.stores[keyIndex], path: path });
    }
  }
  public setInvalue(obj: any, keys: any[], value: any) {
    const ObjKeys = Object.keys(obj);
    for (let index = 0; index < ObjKeys.length; index++) {
      if (ObjKeys[index] === keys[0]) {
        if (keys.length > 1) {
          this.setInvalue(obj[ObjKeys[index]], keys.splice(0, 1), value);
        } else {
          obj[ObjKeys[index]] = value;
        }
      }
    }
  }
}
