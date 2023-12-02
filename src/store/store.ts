import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import createPersistedState from "vuex-persistedstate";

// define your typings for the store state
export interface State {
  products: [];
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: []
  }
})