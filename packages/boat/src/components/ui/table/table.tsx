import clsx from 'clsx';
import RcTable from 'rc-table';
import type { ExtractProps } from '@/types';
import Empty from '@/components/ui/empty';

const classes = {
  table:
    '[&_.rc-table-content]:overflow-x-auto [&_table]:w-full [&_.rc-table-row:hover]:bg-gray-lightest/50',
  thead:
    '[&_thead]:text-left [&_thead]:rtl:text-right [&_th.rc-table-cell]:uppercase [&_th.rc-table-cell]:text-xs [&_th.rc-table-cell]:font-medium [&_th.rc-table-cell]:tracking-wider',
  tCell:
    '[&_.rc-table-cell]:px-3 [&_th.rc-table-cell]:py-4 [&_td.rc-table-cell]:py-4',
  variants: {
    classic:
      '[&_thead]:bg-gray-100 [&_.rc-table-container]:border-x [&_.rc-table-container]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300 [&_thead]:border-y [&_thead]:border-gray-300',
    modern:
      '[&_thead]:bg-gray-100 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300',
    minimal: '[&_thead]:bg-gray-lightest [&_thead]:text-gray-dark',
    elegant:
      '[&_thead]:border-y [&_thead]:border-gray-300 [&_td.rc-table-cell]:border-b [&_td.rc-table-cell]:border-gray-300',
  },
  striped: '[&_.rc-table-row:nth-child(2n)_.rc-table-cell]:bg-gray-100/50',
};

type RCTableProps = ExtractProps<typeof RcTable>;

export interface TableProps
  extends Omit<RCTableProps, 'className' | 'emptyText'> {
  /** Set the loading status of the table */
  isLoading?: boolean;
  /** Set loading skeleton of the table */
  skeleton?: React.ReactNode;
  /** Set empty text, it will only appear when table has no data */
  emptyText?: React.ReactNode;
  /** The variants of the component are: */
  variant?: keyof typeof classes.variants;
  /** Add striping style */
  striped?: boolean;
  /** Add custom classes for extra style */
  className?: string;
}

/**
 *  React table component with useful functions. Under the hood we are using `rc-table` package,
 * you can check their official documentation for more details -> https://www.npmjs.com/package/rc-table
 */
export default function Table({
  isLoading,
  skeleton,
  striped,
  variant = 'classic',
  emptyText,
  className,
  ...props
}: TableProps) {
  if (isLoading) {
    return <>{skeleton}</>;
  }
  return (
    <RcTable
      className={clsx(
        classes.table,
        classes.thead,
        classes.tCell,
        classes.variants[variant],
        striped && classes.striped,
        className,
      )}
      emptyText={emptyText ? emptyText : <Empty />}
      {...props}
    />
  );
}

Table.displayName = 'Table';
