import { AxiosInstance } from "axios";

declare const baseURL: string;

declare class ApiClient {
    constructor(token: string);

    client: AxiosInstance;
    image: ImageEndpoints;
    token: TokenEndpoints;

    Advice(): Promise<object>;
    DadJoke(): Promise<object>;
    DarkJoke(): Promise<object>;
    Fml(): Promise<object>;
    Insult(): Promise<object>;
    Joke(): Promise<object>;
    Health(): Promise<object>;
    Productive(): Promise<object>;
    Rfact(): Promise<object>;

    private handleError(error: any): void;
}

declare class ImageEndpoints {
    constructor(client: AxiosInstance);

    client: AxiosInstance;

    EightBall(): Promise<object>;
    Meme(): Promise<object>;
    Roll(): Promise<object>;

    private handleError(error: any): void;
}

declare class TokenEndpoints {
    constructor(client: AxiosInstance);

    client: AxiosInstance;

    list(): Promise<object>;
    Check(key: string, token: string, project: string): Promise<object>;
    Reroll(uuid: string): Promise<object>;

    private handleError(error: any): void;
}

export = ApiClient;
