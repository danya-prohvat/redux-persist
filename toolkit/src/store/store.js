import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user'
import ui from './ui'

const persistConfig = {
    key: 'app',
    storage: storage,
    whitelist: ['ui']
};

const reducers = combineReducers({
    user: user,
    ui: ui,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});
persistStore(store)