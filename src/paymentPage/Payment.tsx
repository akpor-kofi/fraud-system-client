import './Payment.css'
import {Component} from "react";
import {CardContainer} from "./components/card-container/CardContainer";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

export const Payment= () :JSX.Element => {

    return (
        <QueryClientProvider client={queryClient}>
            <CardContainer />
        </QueryClientProvider>

    )
}