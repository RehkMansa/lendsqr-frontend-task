export const toCamelCase = (str: string) => {
    const words = str.split(" ");

    if (words.length === 1) return words[0];

    let camelCase = words[0];
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        camelCase += word.charAt(0).toUpperCase() + word.slice(1);
    }
    return camelCase;
};

export const splitStringByHyphen = (str: string) => str.split("-")[0];

export const convertCamelCaseToString = (camelCase: string) => {
    const regex = /([A-Z])/g; // uses regexp to convert camel case to string
    return camelCase.replace(regex, " $1"); // $1 is the original string
};
