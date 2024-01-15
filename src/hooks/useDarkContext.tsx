import { useContext } from "react";
import { DarkContext } from "../App"

export const useDarkContext = () => {
    const darkContext = useContext(DarkContext);
    return {...darkContext}
}