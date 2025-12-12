'use client';

import * as React from 'react';
import { useDropzone, type Accept } from 'react-dropzone';
import { Upload, X, FileIcon } from 'lucide-react';

import { cn } from '../lib/utils';
import { Button } from './button';

export interface FileWithPreview extends File {
  preview?: string;
}

export interface FileUploadProps {
  value?: FileWithPreview[];
  onChange?: (files: FileWithPreview[]) => void;
  accept?: Accept;
  maxSize?: number;
  maxFiles?: number;
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
  helperText?: string;
}

export function FileUpload({
  value = [],
  onChange,
  accept,
  maxSize = 5 * 1024 * 1024, // 5MB default
  maxFiles = 1,
  disabled = false,
  multiple = false,
  className,
  helperText,
}: FileUploadProps) {
  const [files, setFiles] = React.useState<FileWithPreview[]>(value);

  const onDrop = React.useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      );

      const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);
      onChange?.(updatedFiles);
    },
    [files, multiple, onChange],
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept,
      maxSize,
      maxFiles,
      disabled,
      multiple,
    });

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  React.useEffect(() => {
    // Revoke the data uris to avoid memory leaks
    return () => {
      files.forEach((file) => {
        if (file.preview) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        {...getRootProps()}
        className={cn(
          'relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-10 transition-colors',
          isDragActive
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50',
          disabled && 'cursor-not-allowed opacity-60',
          !disabled && 'cursor-pointer',
        )}
      >
        <input {...getInputProps()} />
        <Upload
          className={cn(
            'mb-4 h-10 w-10 text-muted-foreground',
            isDragActive && 'text-primary',
          )}
        />
        <div className="text-center">
          <p className="text-sm font-medium">
            {isDragActive ? 'أفلت الملفات هنا' : 'اسحب الملفات وأفلتها هنا'}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            أو انقر لتحديد الملفات
          </p>
          {helperText && (
            <p className="mt-2 text-xs text-muted-foreground">{helperText}</p>
          )}
          <p className="mt-2 text-xs text-muted-foreground">
            الحد الأقصى لحجم الملف: {formatFileSize(maxSize)}
          </p>
        </div>
      </div>

      {fileRejections.length > 0 && (
        <div className="mt-2 text-sm text-destructive">
          {fileRejections.map(({ file, errors }) => (
            <div key={file.name}>
              {errors.map((e) => (
                <p key={e.code}>
                  {e.code === 'file-too-large'
                    ? 'الملف كبير جداً'
                    : e.code === 'file-invalid-type'
                      ? 'نوع الملف غير مدعوم'
                      : e.message}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border bg-card p-3"
            >
              <div className="flex items-center gap-3">
                <div className="rounded bg-muted p-2">
                  <FileIcon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="truncate text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeFile(index)}
                disabled={disabled}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">حذف</span>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
