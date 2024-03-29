export interface Game {
    slug: string,
    name: string,
    playtime: number,
    description: string,
    description_raw: string,
    reddit_description: string,
    platforms: Platform[],
    stores: Store[],
    released: string,
    tba: boolean,
    background_image: string,
    background_image_additional: string,
    rating: number,
    rating_top: number,
    ratings: Rating[],
    ratings_count: number,
    reviews_text_count: number,
    added: number,
    added_by_status: Added_by_status | null,
    metacritic: number | null,
    suggestions_count: number,
    updated: string,
    id: number,
    score: string,
    clip: string | null,
    tags: Tag[],
    esrb_rating: {
        id: number,
        name: string,
        slug: string,
        name_en: string,
        name_ru: string,
    },
    user_game: string | null,
    reviews_count: number,
    community_rating: number,
    saturated_color: string,
    dominant_color: string,
    short_screenshots: Short_screenshots[],
    parent_platforms: Platform[],
    genres: [
        {
            id: number,
            name: string,
            slug: string,
            image_background: string,
            games_count: number
        }
    ],
    developers: Developer[],
    metacritic_url: string,
}

export interface Platform {
    platform: {
        id: number,
        name: string,
        slug: string,
    }
}

export interface Store {
    store: {
        id: number,
        name: string,
        slug: string,
    }
}

export interface Rating {
    id: number,
    title: string,
    count: number,
    percent: number,
}

export interface Added_by_status {
    yet: number,
    owned: number,
    beaten: number,
    toplay: number,
    dropped: number,
    playing: number,
}

export interface Tag {
    id: number,
    name: string,
    slug: string,
    language: 'eng' | 'rus',
    games_count: number,
    image_background: string,
}

export interface Short_screenshots {
    id: number,
    image: string,
}

export interface Genre {
    id: number,
    name: string,
    slug: string,
    image_background: string,
    games_count: number
}

export interface Developer {
    id: number,
    name: string,
    slug: string,
    games_count: number,
}
