import { RegexTrie } from '../utils/regexTrie';
import { DiffKeyValues, NumberFieldValidations, TextFieldValidations } from '../types/JsonEditor.types';
export declare const deepEqual: (obj1: any, obj2: any) => boolean;
export declare const deepCopy: (obj: any) => any;
export declare const removeArrayIndexFromPropertyPath: (path: string) => string;
export declare const convertPatternIntoDate: (dateString: string, format: string) => Date | null;
export declare const convertDateIntoPattern: (date: Date, format: string) => string | null;
export declare const updateValueByPath: (obj: any, path: string, value: any) => void;
export declare const getValueByPath: (obj: any, path: string) => any;
export declare const findJsonDiff: (obj1: Record<string, any>, obj2: Record<string, any>, path?: string, diffKeyValues?: DiffKeyValues) => DiffKeyValues;
export declare const debounce: (func: (...args: any[]) => void, delay: number) => (...args: any[]) => void;
export declare const validateValue: (value: string, validations: TextFieldValidations | NumberFieldValidations) => string | null;
export declare const pathToRegex: (path: string) => RegExp;
export declare const testPathAgainstRegex: (trie: RegexTrie, newPath: string) => string | null;
export declare const containsArrayIndex: (path: string) => boolean;
