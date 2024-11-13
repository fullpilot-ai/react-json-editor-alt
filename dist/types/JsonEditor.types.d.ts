import { CSSProperties } from 'react';
import { GLOBAL_EDITING_MODE, GLOBAL_INDIVIDUAL_EDITING_MODE, INDIVIDUAL_EDITING_MODE, INLINE_EDITING_MODE } from '../constants/constants';
import { RegexTrie } from '../utils/regexTrie';
type LengthValidations = {
    minLength?: number;
    maxLength?: number;
    validationMessage?: string;
    regex?: never;
    regexValidationMessage?: never;
};
type RegexValidations = {
    regex: RegExp;
    regexValidationMessage?: string;
    minLength?: never;
    maxLength?: never;
    validationMessage?: never;
};
export type Validations = LengthValidations | RegexValidations;
export type TextFieldValidations = Validations;
export type NumberFieldValidations = Validations & {
    minValue?: number;
    maxValue?: number;
};
export declare function isNumberFieldValidations(validations: any): validations is NumberFieldValidations;
type NumberField = {
    type: "number";
    validations?: NumberFieldValidations;
};
type StringField = {
    type: "string";
    validations?: TextFieldValidations;
};
type TextAreaField = {
    type: "textArea";
    validations?: TextFieldValidations;
};
type SelectField = {
    type: "select";
    options: Array<{
        key: string;
        value: string;
    }>;
};
type RadioField = {
    type: "radio";
    options: Array<{
        key: string;
        value: string;
    }>;
};
type BooleanTypeField = {
    type: "boolean";
};
type DateFormat = "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" | "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY";
type DateField<F extends DateFormat = "DD/MM/YYYY"> = {
    type: "date";
    format: F;
    minDate?: F extends "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" ? `${number}/${number}/${number}` : F extends "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY" ? `${number}-${number}-${number}` : never;
    maxDate?: F extends "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" ? `${number}/${number}/${number}` : F extends "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY" ? `${number}-${number}-${number}` : never;
};
export type FieldsType = StringField | NumberField | SelectField | RadioField | TextAreaField | DateField<DateFormat> | BooleanTypeField;
export type EditableFielsdObjectType = {
    [path: string]: true | FieldsType;
};
export type NonEditableFieldsObjectType = {
    [path: string]: true;
};
export type DiffKeyValues = {
    [key: string]: {
        initial: string;
        updated: string;
    };
};
type EditorMode = 'global' | 'individual' | 'global-individual' | 'inline';
export type onChangePropsType = {
    initialJson: Record<string, any>;
    updatedJson: Record<string, any>;
    updatedKeys: DiffKeyValues;
    editorMode: EditorMode;
    validations: Record<string, any>;
};
export type OnSubmitPropsType = {
    submitType: Exclude<EditorMode, 'global-individual'>;
} & Omit<onChangePropsType, 'validations'>;
export type JsonEditorContextType = {
    jsonState: Record<string, any> | null;
    editJsonState: Record<string, any> | null;
    isEditing: boolean;
    editingMode?: EditorMode;
    allFieldsEditable: boolean;
    editableFields: EditableFielsdObjectType;
    nonEditableFields: NonEditableFieldsObjectType;
    isExpanded: boolean;
    handleOnChange: HandleOnChange;
    handleOnSubmit: HandleOnSubmit;
    selectedFieldsForEditing: Record<string, any>;
    setSelectedFieldsForEditing: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    validations: Record<string, any>;
    setValidations: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    debouncing: boolean;
    regexPatternsTrie: React.MutableRefObject<RegexTrie>;
    handleFieldReset: (path: string) => void;
    enableTypeBasedRendering: boolean;
};
type InlineEditingConfig = {
    editingMode?: typeof INLINE_EDITING_MODE;
    allFieldsEditable?: boolean;
    editableFields?: EditableFielsdObjectType;
    nonEditableFields?: NonEditableFieldsObjectType;
    debouncing?: boolean;
    enableTypeBasedRendering?: boolean;
};
type StandardEditingConfig = {
    isEditing?: boolean;
    editingMode?: typeof GLOBAL_EDITING_MODE | typeof INDIVIDUAL_EDITING_MODE | typeof GLOBAL_INDIVIDUAL_EDITING_MODE;
    allFieldsEditable?: boolean;
    editableFields?: EditableFielsdObjectType;
    nonEditableFields?: NonEditableFieldsObjectType;
    debouncing?: boolean;
    enableTypeBasedRendering?: boolean;
};
export type EditingConfig = StandardEditingConfig | InlineEditingConfig;
export type GlobalSubmitButtonConfigs = {
    variant?: "secondary" | "outline" | 'ghost' | "link" | 'destructive';
    className?: string;
    buttonText?: string;
    children?: React.ReactNode;
};
export type JsonEditorProps = {
    json: Record<string, any>;
    className?: string;
    isExpanded?: boolean;
    onSubmit?: (props: OnSubmitPropsType) => void;
    onChange?: (props: onChangePropsType) => void;
    editingConfig?: EditingConfig;
    globalSubmitButtonConfigs?: GlobalSubmitButtonConfigs;
    styles?: CSSProperties;
};
export type RenderJsonFunctionType = (val: any, path: string, isRootLevelKey: boolean) => React.ReactNode;
export type RenderArrayProps = {
    arr: [] | any;
    path: string;
    isRootLevelKey: boolean;
    renderJson: RenderJsonFunctionType;
};
export type RenderArrayItemsProp = {
    val: any;
    children: React.ReactNode;
};
export type RenderObjectProps = {
    obj: any;
    path: string;
    renderJson: RenderJsonFunctionType;
    isRootLevelKey: boolean;
    searchText?: string;
};
export type RenderObjectKeysProps = {
    keyName: string;
    val: any;
    children: React.ReactNode;
    searchText?: string;
};
export type HandleOnChange = (value: string | number | boolean, path: string, validations?: Record<string, any>) => void;
export type HandleOnSubmit = (value: string | number | boolean, path: string) => void;
export type RenderValueProps = {
    value: string | number | boolean | undefined | null;
    path: string;
};
export type DefaultValueElementProps = {
    path: string;
    value: string | number | boolean | null | undefined;
    canEditInline?: boolean;
};
export type DefaultInputField = {
    path: string;
    value: string;
    readModeValue?: string;
    fieldValidations?: TextFieldValidations | NumberFieldValidations;
};
export type DefaultSelectElementProps = {
    options: Array<{
        key: string;
        value: string;
    }>;
} & DefaultInputField;
export type DefaultTextElementProps = {} & DefaultInputField;
export type DefaultNumberElementProps = Omit<DefaultInputField, 'value' | 'readModeValue'> & {
    value: number;
    readModeValue?: number;
};
export type DefaultTextAreaElementProps = {} & DefaultInputField;
export type DefaultBooleanElementProps = Omit<DefaultInputField, 'value' | 'readModeValue'> & {
    value: boolean;
    readModeValue?: boolean;
};
export type DefaultRadioElementProps = {
    options: Array<{
        key: string;
        value: string;
    }>;
} & DefaultInputField;
export type DefaultDateElementProps<F extends DateFormat = "DD/MM/YYYY"> = {
    format: DateFormat;
    minDate?: F extends "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" ? `${number}/${number}/${number}` : F extends "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY" ? `${number}-${number}-${number}` : never;
    maxDate?: F extends "DD/MM/YYYY" | "YYYY/MM/DD" | "MM/DD/YYYY" ? `${number}/${number}/${number}` : F extends "DD-MM-YYYY" | "YYYY-MM-DD" | "MM-DD-YYYY" ? `${number}-${number}-${number}` : never;
} & DefaultInputField;
export {};
