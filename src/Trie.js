import { useContext, useEffect, useState } from "react";
import { Api } from "./App";

export const Trie = (props) => {
    const shared = useContext(Api);
    const searchTerm = shared.searchTerm;
     
    const root=shared.root;
    const setRoot=shared.setRoot;

    const insert = (words) => {
        let word=words.toLowerCase().replace(/\s/g, '');
        let cur = root;
        for (let char of word) {
            if (char!=" " && !cur.arr[char]) {
                cur.arr[char] = { arr: {}, end: false };
            }
            if(char!=" ")
            cur = cur.arr[char];
        }
        cur.end = true;
        
        setRoot({...root});
       
    };

   

    useEffect(() => {
        insert(props.name);
    }, [props.name]);

    return null;
};
