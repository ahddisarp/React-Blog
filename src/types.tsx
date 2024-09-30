// src/types.ts

export interface Post {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
}

export interface PostsResponse {
    data: Post[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}
