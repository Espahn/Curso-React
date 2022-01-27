import React from "react";
import Detail from "./Detail";


export default function ItemDetail ({misDetalles}){

            return (
                <>
                    {
                        misDetalles.map(item => <Detail item={item} />)
                    }
                </>
            )};

                                            