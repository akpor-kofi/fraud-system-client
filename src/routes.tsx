import {RouteObject} from "react-router-dom";
import {Payment} from "./paymentPage/Payment";
import App from "./App";
import React, {useState} from "react";


class Merchant {}

export const routes: RouteObject[] = [
    {
        element: <Payment />,
        path: "/payment/:merchantId",
        loader: async ({params}): Promise<Response> => {
            return fetch(
                `${import.meta.env.REST_API}/hello`)
        },
        // action: async ({ request }) => {
        //     return updateFakeTeam(await request.formData());
        // },
        ErrorBoundary: (): JSX.Element => {
            return (
                <div>OOPS... Something went wrong</div>
            )
        },
        caseSensitive: true,
    },
    {
        element: <App />,
        path: "/",

        children: [

        ],
    }
]