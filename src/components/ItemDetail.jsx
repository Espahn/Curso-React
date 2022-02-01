import React from "react";
import Detail from "./Detail";


export default function ItemDetail ({misProductos}){ 

            return (
                <>
                    {
                        misProductos.map(item => <Detail item={item} />)
                    }
                </>
            )};

                                            