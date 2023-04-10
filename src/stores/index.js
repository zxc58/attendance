import cloneDeep from 'lodash.clonedeep'
import { useUserStore } from './user'
import { useLocationStore } from './location'
import { useAlertStore } from './alert'
const store = { useLocationStore, useUserStore, useAlertStore }
export default store

export const middlewares = {
  createReset({ store }) {
    const initialState = cloneDeep(store.$state)
    store.$reset = () => store.$patch(cloneDeep(initialState))
  },
}
