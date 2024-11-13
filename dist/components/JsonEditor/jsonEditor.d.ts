import { JsonEditorContextType, JsonEditorProps } from '../../types/JsonEditor.types';
export declare const useJsonEditorContext: () => JsonEditorContextType;
declare function JsonEditor({ json, className, isExpanded, onSubmit, onChange, editingConfig, globalSubmitButtonConfigs, styles, }: JsonEditorProps): import("react/jsx-runtime").JSX.Element;
export default JsonEditor;
