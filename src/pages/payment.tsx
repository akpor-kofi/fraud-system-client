import './Payment.css'
import {Component} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {CardContainer} from "../components/card-container/card-container";

const queryClient = new QueryClient()

export const Payment= () :JSX.Element => {

    return (
        <QueryClientProvider client={queryClient}>
            <CardContainer />
        </QueryClientProvider>

    )
}