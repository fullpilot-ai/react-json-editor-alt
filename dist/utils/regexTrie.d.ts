declare class TrieNode {
    children: Record<string, TrieNode>;
    regexPatterns: RegExp[];
    paths: string[];
    constructor();
}
export declare class RegexTrie {
    root: TrieNode;
    constructor();
    insert(path: string, regex: RegExp): void;
    findMatchingRegex(newPath: string): {
        regexPatterns: RegExp[];
        paths: string[];
    };
}
export {};
