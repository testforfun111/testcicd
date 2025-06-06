import { Product } from "../interfaces/models/Product";
import { User } from "../interfaces/models/User";


export const setJwtToken = (token: string) => {
    // console.log(`Token set to: ${token}`);
    localStorage.setItem('token', token);
};

export const deleteJwtToken = () => {
    localStorage.removeItem('token');
}

export const getJwtToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
};

export const getUser = (): User | undefined => {
    let str = localStorage.getItem('user');
    let user: User | undefined = str? JSON.parse(str) : undefined;
    return user;
};

export const deleteUser = () => {
    localStorage.removeItem('user');
}

export const setUser = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const saveUserChanges = (user: User) => {
    localStorage.setItem('userchanges', JSON.stringify(user));
}

export const getUserChanges = (): User | undefined => {
    let str = localStorage.getItem('userchanges');
    let user: User | undefined = str? JSON.parse(str) : undefined;
    return user;
};

export const deleteUserChanges = () => {
    localStorage.removeItem('userchanges');
}

export const saveProductChanges = (product: Product) => {
    localStorage.setItem('productchanges', JSON.stringify(product));
}

export const getProductChanges = (): Product | undefined => {
    let str = localStorage.getItem('productchanges');
    let product: Product | undefined = str? JSON.parse(str) : undefined;
    return product;
};

export const deleteProductChanges = () => {
    localStorage.removeItem('productchanges');
}

// export const getSearchParams = (page: number): [number, number] => {
//     const take = 5;
//     const skip = take * (page - 1);
//     return [skip, take];
// }

// export const parseToCustomFormat = (dateString: string): string => {
//     const date = new Date(dateString.slice(0, -1));
//     const day = date.getDate().toString().padStart(2, '0');
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const year = date.getFullYear().toString();
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');

//     return `${day}.${month}.${year} ${hours}:${minutes}`;
// }

// export const parseToISOString = (customFormatString: string): string | undefined => {
//     try {
//         const [datePart, timePart] = customFormatString.split(' ');
//         const [day, month, year] = datePart.split('.');
//         const [hours, minutes] = timePart.split(':');

//         const isoString = `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
//         return new Date(isoString).toISOString();
//     } catch {
//         return undefined;
//     }
// }