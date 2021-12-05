import { useState, useEffect } from "react";

export const useFirebase = (dataBase) => {
    const [response, setRespone] = useState(null)

    useEffect(() => {
        const dbRef = dataBase.ref('menu');
        dbRef.on('value', snapshot => {
            setRespone(snapshot.val())
        });
    }, [dataBase])
    return response;
}