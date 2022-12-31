type Location = {
    street: {
        number: number;
        name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: 73563;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    timezone: {
        offset: string;
        description: string;
    };
};

type Login = {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
};

type Name = {
    title: string;
    first: string;
    last: string;
};

type DOB = {
    date: string;
    age: number;
};

type Picture = {
    large: string;
    medium: string;
    thumbnail: string;
};

type Nationalities =
    | "AU"
    | "BR"
    | "CA"
    | "CH"
    | "DE"
    | "DK"
    | "ES"
    | "FI"
    | "FR"
    | "GB"
    | "IE"
    | "IN"
    | "IR"
    | "MX"
    | "NL"
    | "NO"
    | "NZ"
    | "RS"
    | "TR"
    | "UA"
    | "US";

export type UserResponseType = {
    gender: string;
    name: Name;
    location: Location;
    email: string;
    login: Login;
    dob: DOB;
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: Picture;
    nat: Nationalities;
};
