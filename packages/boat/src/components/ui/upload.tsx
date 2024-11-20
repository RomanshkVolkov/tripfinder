'use client';

import {
  useDropzone,
  FileWithPath,
  DropzoneProps,
  FileRejection,
} from 'react-dropzone';
import React, { useState, useCallback, forwardRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/outline';
import { UploadIcon } from '@/components/icons/upload';

const inputClasses = {
  base: 'p-16 border rounded-xl cursor-pointer duration-75 ease-in-out focus:ring',
  flex: 'flex flex-col items-center gap-4',
  disabled:
    '!text-gray-400 !bg-gray-100 !border-gray-200 hover:border-gray-200 cursor-not-allowed',
  darkTextColor: {
    DEFAULT: 'text-gray-1000',
    primary: 'text-primary-dark',
    secondary: 'text-secondary-dark',
    danger: 'text-red-dark',
    info: 'text-blue-dark',
    success: 'text-green-dark',
    warning: 'text-orange-dark',
  },
  lightTextColor: {
    DEFAULT: 'text-gray-300',
    primary: 'text-primary-light',
    secondary: 'text-secondary-light',
    danger: 'text-red-light',
    info: 'text-blue-light',
    success: 'text-green-light',
    warning: 'text-orange-light',
  },
  variant: {
    active: {
      base: 'border bg-gray-0',
      color: {
        DEFAULT:
          'border-gray-900 text-gray-600 focus:border-gray-1000 focus:ring-gray-900/20',
        primary: 'border-primary text-primary focus:ring-primary/30',
        secondary: 'border-secondary text-secondary focus:ring-secondary/30',
        danger: 'border-red text-red focus:ring-red/30',
        info: 'border-blue text-blue focus:ring-blue/30',
        success: 'border-green text-green focus:ring-green/30',
        warning: 'border-orange text-orange focus:ring-orange/30',
      },
    },
    flat: {
      base: 'border-0',
      color: {
        DEFAULT:
          'bg-gray-100/70 hover:bg-gray-200/50 text-gray-600 focus:border-gray-1000 focus:ring-gray-900/20',
        primary:
          'bg-primary-lighter/70 hover:bg-primary-lighter/90 text-primary focus:ring-primary/30',
        secondary:
          'bg-secondary-lighter/70 hover:bg-secondary-lighter/90 text-secondary focus:ring-secondary/30',
        danger:
          'bg-red-lighter/70 hover:bg-red-lighter/90 text-red focus:ring-red/30',
        info: 'bg-blue-lighter/70 hover:bg-blue-lighter/90 text-blue focus:ring-blue/30',
        success:
          'bg-green-lighter/70 hover:bg-green-lighter/90 text-green focus:ring-green/30',
        warning:
          'bg-orange-lighter/80 hover:bg-orange-lighter/90 text-orange focus:ring-orange/30',
      },
    },
    outline: {
      base: 'bg-transparent border-gray-300 text-gray-600',
      color: {
        DEFAULT:
          'hover:border-gray-1000 focus:border-gray-1000 focus:ring-gray-900/20',
        primary: 'hover:border-primary focus:ring-primary/30',
        secondary: 'hover:border-secondary focus:ring-secondary/30',
        danger: 'hover:border-red focus:ring-red/30',
        info: 'hover:border-blue focus:ring-blue/30',
        success: 'hover:border-green focus:ring-green/30',
        warning: 'hover:border-orange focus:ring-orange/30',
      },
    },
  },
};

const listClasses = {
  container: 'flex flex-row flex-wrap gap-4',
  img: {
    base: 'w-28 h-24 relative group overflow-hidden rounded-md',
    icon: 'text-gray-0 bottom-2 right-1 cursor-pointer invisible transition duration-75 translate-y-full group-hover:visible group-hover:translate-y-0',
    bg: 'bg-gray-900/50 h-full w-full relative top-full transition-all duration-75 ease-out group-hover:top-0',
  },
  pdf: {
    base: 'w-full px-4 py-2 text-sm h-10 my-3 relative text-gray-500 border border-gray-300 rounded-md',
    icon: 'text-gray-500 top-2 right-3 cursor-pointer',
  },
};

export type UploadRenderProps = {
  acceptedFiles: readonly FileWithPath[];
  fileRejections: readonly FileRejection[];
  accept: 'img' | 'pdf' | 'imgAndPdf';
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

export interface UploadProps
  extends Omit<DropzoneProps, 'accept' | 'children'> {
  /** Specify type of the files */
  accept: 'img' | 'pdf' | 'imgAndPdf';
  /** Pass children to customize file item style */
  children?(props: UploadRenderProps): React.ReactNode;
  /** Pass field label */
  label?: string;
  /** Whether disable upload */
  disabled?: boolean;
  /** The variants of the component are: */
  variant?: keyof typeof inputClasses.variant;
  /** Change color */
  color?: keyof typeof inputClasses.variant.flat.color;
  /** Pass text to show in upload field */
  text?: React.ReactNode;
  /** Pass className to style the container */
  className?: string;
  /** Pass iconClassName to style the upload icon */
  iconClassName?: string;
  /** Pass label className to style label */
  labelClassName?: string;
  /** Pass list container className to style the container of file list */
  listClassName?: string;
  /** Pass item className to style each file item */
  itemClassName?: string;
}

const acceptedFileType = {
  img: {
    'image/*': [],
  },
  pdf: {
    'application/pdf': [],
  },
  imgAndPdf: {
    'image/*': [],
    'application/pdf': [],
  },
};

/** We used `react-dropzone` package to build Upload component with drag and drop functionality.
 * See their [official documentation](https://react-dropzone.js.org/) for more info.
 */

const Upload = forwardRef<HTMLInputElement, UploadProps>(
  (
    {
      accept,
      children,
      label,
      disabled,
      color = 'DEFAULT',
      variant = 'outline',
      text,
      className,
      iconClassName,
      labelClassName,
      listClassName,
      itemClassName,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = useState<Array<File>>([]);

    const onDrop = useCallback((acceptedFiles: Array<File>) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);

    const handleDelete = (index: number) => {
      const updatedFiles = files.filter((_, i) => i !== index);
      setFiles(updatedFiles);
    };

    const {
      acceptedFiles,
      fileRejections,
      getRootProps,
      getInputProps,
      inputRef,
    } = useDropzone({
      onDrop,
      disabled,
      accept: acceptedFileType[accept],
      ...props,
    });

    return (
      <section>
        {label && (
          <label
            onClick={() => inputRef.current?.click()}
            className={clsx('mb-2 block text-base', labelClassName)}
          >
            {label}
          </label>
        )}
        <div
          {...getRootProps({
            className: clsx(
              inputClasses.base,
              inputClasses.flex,
              inputClasses.variant[variant].base,
              inputClasses.variant[variant].color[color],
              disabled && inputClasses.disabled,
              className,
            ),
          })}
        >
          <input {...getInputProps({ disabled })} ref={ref} />
          <UploadIcon
            className={clsx(
              variant !== 'outline' && !disabled
                ? inputClasses.lightTextColor[color]
                : 'text-gray-300',
              iconClassName,
            )}
          />
          {text || (
            <p className="text-center">
              <span
                className={clsx(
                  'font-medium underline',
                  variant !== 'outline' && inputClasses.darkTextColor[color],
                  disabled && '!text-gray-400',
                )}
              >
                Click to upload
              </span>{' '}
              or drag and drop
            </p>
          )}
        </div>

        {children ? (
          children({ acceptedFiles, fileRejections, accept, files, setFiles })
        ) : (
          <ul
            className={clsx(
              'mt-5',
              accept === 'img' && listClasses.container,
              listClassName,
            )}
          >
            {files.map((file: FileWithPath, index: number) => (
              <li
                className={clsx(
                  accept === 'img'
                    ? listClasses.img.base
                    : listClasses.pdf.base,
                  itemClassName,
                )}
                key={file.path}
              >
                {accept === 'img' ? (
                  <>
                    <Image
                      className="rounded-md object-cover"
                      src={URL.createObjectURL(file)}
                      alt=""
                      fill
                    />
                    <div className={listClasses.img.bg} />
                  </>
                ) : (
                  <h2>{file.path}</h2>
                )}
                <TrashIcon
                  className={clsx(
                    'absolute h-5 w-5',
                    accept === 'img'
                      ? listClasses.img.icon
                      : listClasses.pdf.icon,
                  )}
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  },
);

Upload.displayName = 'Upload';
export default Upload;
