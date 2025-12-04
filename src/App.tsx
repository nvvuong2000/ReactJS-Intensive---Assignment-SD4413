import React from 'react';
import './App.css';
import {RouterProvider, } from "react-router";
import appRouter from "./app.router";
import {AuthenticatedProvider} from "./shared/Authenticated";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthenticatedProvider>
                <RouterProvider router={appRouter} />
            </AuthenticatedProvider>
        </QueryClientProvider>
    )
}

export default App;
