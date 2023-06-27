import { PropsWithChildren, useState, useEffect, createContext, useCallback } from "react";
import AppData from "./AppData";
import AppDataAPI from "./AppDataAPI";

interface Props {

}

//TODO: non-null assertion is dangerous. Replace this with a new Context Class, that checks for undefined and throws an error
export const AppDataContext = createContext<[AppData, AppDataAPI]>(undefined!);

export function AppDataProvider(props: PropsWithChildren<Props>) {
    const [appData, setAppData] = useState<AppData>(AppData.build());
    
    const update = useCallback((data: AppData)=>{
        setAppData(data);
    },[]);

    const [appDataAPI, setAppDataAPI] = useState<AppDataAPI>(new AppDataAPI(update));

    useEffect(()=>{
        appDataAPI.connect("http://localhost:3001");
        return ()=>{
            appDataAPI.disconnect();
        }
    },[appDataAPI]);

    if (!appData.isValid()) return <></>;
    return (
        <AppDataContext.Provider value={[appData,appDataAPI]}>
            {props.children}
        </AppDataContext.Provider>
    )
}