import { Agent as HttpAgent } from "http";
import { Agent as HttpsAgent } from "https";
import { Readable } from "stream";
export { debug } from "debug";
export declare const itrToStream: (itr: AsyncIterable<Uint8Array>) => Readable;
export declare function baseFetchConfig(apiRoot: string): {
    compress: boolean;
    agent: HttpsAgent;
    duplex: string;
} | {
    agent: HttpAgent;
    duplex: string;
    compress?: undefined;
} | {
    duplex: string;
    compress?: undefined;
    agent?: undefined;
};
export declare const defaultAdapter = "express";
