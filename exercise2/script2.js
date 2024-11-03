import { fetchData } from "./fetchData";
export function doubleAndAdd() {
    return new Promise(async (resolve, reject) => {
        try {
            const firstResult = await fetchData();
            const secondResult = await fetchData();
            if (firstResult < 2 || secondResult < 2) {
                throw new RangeError("Not in valid range");
            }
            const result = (firstResult * 2) + secondResult;
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

doubleAndAdd()
.then(result => console.log(result)) 
.catch(error => console.error(error)); 