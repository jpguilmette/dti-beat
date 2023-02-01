import { createStore } from 'vuex';

export class AppState {}

export const store = createStore({
    strict: false,
    state: new AppState(),
    getters: {},
    actions: {},
});
