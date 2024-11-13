import { useState, useRef } from "react";
import { DefaultFileElementProps } from "../../../types/JsonEditor.types";
import { Check, Pencil as PencilIcon } from "lucide-react";
import { Button } from "../../ui/button";
import { useJsonEditorContext } from "../jsonEditor";
import InlineCancelButton from "../inlineElements/inlineCancelButton";
import { INLINE_EDITING_MODE } from "../../../constants/constants";

type FileValue = {
	type: string;
	format: string | null;
	filename: string | null;
	base64: string | null;
} | null;

function DefaultFileInput({
	value,
	readModeValue,
	path,
}: DefaultFileElementProps) {
	const [fileValue, setFileValue] = useState<FileValue>(value);
	const [fileName, setFileName] = useState<string>(value?.filename || "");
	const fileInputRef = useRef<HTMLInputElement>(null);
	const {
		handleOnChange,
		handleOnSubmit,
		editingMode,
		setSelectedFieldsForEditing,
		selectedFieldsForEditing,
	} = useJsonEditorContext();

	const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) {
			const nullValue: FileValue = {
				type: "file",
				format: null,
				filename: null,
				base64: null,
			};
			setFileValue(nullValue);
			setFileName("");
			handleOnChange(nullValue as any, path);
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			const base64 = (reader.result as string).split(",")[1];
			const newValue: FileValue = {
				type: "file",
				format: file.type,
				filename: file.name,
				base64: base64,
			};
			setFileValue(newValue);
			setFileName(file.name);
			handleOnChange(newValue as any, path);
		};
		reader.readAsDataURL(file);
	};

	const handleFileInputSubmit = () => {
		handleOnSubmit(fileValue as any, path);
		if (editingMode === INLINE_EDITING_MODE) {
			setSelectedFieldsForEditing((prev) => ({
				...prev,
				[path]: false,
			}));
		}
	};

	const handleClear = () => {
		const nullValue: FileValue = {
			type: "file",
			format: null,
			filename: null,
			base64: null,
		};
		setFileValue(nullValue);
		setFileName("");
		handleOnChange(nullValue as any, path);
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const disabled =
		readModeValue?.base64 === fileValue?.base64 &&
		readModeValue?.filename === fileValue?.filename;
	const isEditing = selectedFieldsForEditing[path];

	return (
		<>
			{isEditing ? (
				<div className="flex items-center gap-2">
					<div className="inline-flex h-9 items-center justify-center rounded-md bg-white text-sm font-medium">
						<label className="relative px-2 py-1.5 h-full flex items-center bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer rounded-l-md border-r text-xs whitespace-nowrap">
							Choose File
							<input
								ref={fileInputRef}
								type="file"
								onChange={handleFileInputChange}
								className="hidden"
							/>
						</label>
						<span className="px-2 text-sm text-slate-600 border rounded-r-md border-l-0 h-full flex items-center">
							<span className="truncate max-w-[150px]">
								{fileName || "No file chosen"}
							</span>
							{fileName && (
								<button
									onClick={handleClear}
									className="ml-2 text-blue-500 hover:text-blue-700 shrink-0"
								>
									(Clear)
								</button>
							)}
						</span>
					</div>
					{!disabled && (
						<Button
							variant="outline"
							size="icon"
							className={`${disabled && "hidden"}`}
							title="Submit"
							onClick={handleFileInputSubmit}
						>
							<Check size={14} />
						</Button>
					)}
					<InlineCancelButton path={path} />
				</div>
			) : (
				<div className="flex items-center gap-2">
					<span className="text-sm text-slate-600">
						{fileName || "No file chosen"}
					</span>
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>
							setSelectedFieldsForEditing((prev) => ({
								...prev,
								[path]: true,
							}))
						}
					>
						<PencilIcon size={14} />
					</Button>
				</div>
			)}
		</>
	);
}

export default DefaultFileInput;
