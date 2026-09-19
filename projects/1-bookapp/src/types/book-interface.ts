




export interface Book {
    id: string;
    image: string;
    title: string;
    author: string;
    translator?: string;
    narrator?: string;
    publisher: string;
    categories: string[];
    rating: number;
    votes: number;
    price?: string;
    originalPrice?: string;
    discount?: string;
    discountedPrice?: string;
    discountPercent?: number;
    duration?: string;
    size?: string;
    transferable?: boolean;
    year?: number;
    pages?: number;
}


export type BookList = Book[];