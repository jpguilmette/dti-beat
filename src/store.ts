import { createStore } from 'vuex';

export class AppState {}

export const store = createStore({
    state: new AppState(),
    getters: {},
    actions: {},
});
