import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/authSlice';
import langReducer from './src/langSlice';
import themeReducer from './src/themeSlice';
import pageSlice from './src/pageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lang: langReducer,
    theme: themeReducer,
    page: pageSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
