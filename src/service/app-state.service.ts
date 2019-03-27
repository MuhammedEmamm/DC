import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import AppStateInterface, { AppStateKey } from '../interface/app-state.interface';

export class StorageMiddleware {
  init(): AppStateInterface {
    const initState = <AppStateInterface>{};
    initState[AppStateKey.Token] = this.get(AppStateKey.Token);
    initState[AppStateKey.CreditorDetails] = this.get(AppStateKey.CreditorDetails);
    initState[AppStateKey.DebtorDetails] = this.get(AppStateKey.DebtorDetails);
    initState[AppStateKey.EmployeeDetails] = this.get(AppStateKey.EmployeeDetails);
    return initState;
  }

  set(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }
}

@Injectable()
export class AppStateService {
  private subscribers = {};
  private state: AppStateInterface;
  public storage = new StorageMiddleware();

  constructor() {
    this.state = this.storage.init();
  }

  getState(key?: AppStateKey) {
    return key ? this.state[key] : this.state;
  }

  setState(key: AppStateKey, value: any) {
    this.state[key] = value;
    this._publishStateChange(key);
    this.storage.set(key, value);
  }

  removeState(key: AppStateKey) {
    this.state[key] = null;
    this._publishStateChange(key);
    this.storage.remove(key);
  }

  subscribe(key: AppStateKey | Function, callback?: Function) {
    const id: string = uuidv4();

    if (key instanceof Function) {
      callback = key;
      key = null;
    }

    this.subscribers[id] = { key, callback };
    return id;
  }

  getSubscribers(id?: string) {
    return id ? this.subscribers[id] : this.subscribers;
  }

  private _publishStateChange(key: AppStateKey) {
    Object.keys(this.subscribers)
      .filter(id => !this.subscribers[id].key || this.subscribers[id].key === key)
      .forEach(id => this.subscribers[id].callback(this.state));
  }
}
