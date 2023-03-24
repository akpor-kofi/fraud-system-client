import {Params, RouteObject} from "react-router-dom";
import App from "./App";
import React, {useState} from "react";
import {Merchant} from "./pages/merchant";
import {Payment} from "./pages/payment";

export const routes: RouteObject[] = [
    {
        element: <Merchant />,
        path: "/merchant",
        ErrorBoundary: (): JSX.Element => {
            return (
                <div>OOPS... Something went wrong</div>
            )
        },
    },
    {
        element: <Payment />,
        path: "/payment/:merchantId",
        loader: async ({request, params}) => {
            const url = new URL(request.url)
            return {
                merchantId: params.merchantId,
                user: {
                    userId: url.searchParams.get("userId")
                },
                product: {
                    id: url.searchParams.get("productId"),
                    desc: url.searchParams.get("desc"),
                    price: url.searchParams.get("price")
                },
            }
        },
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