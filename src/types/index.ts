/* eslint-disable @typescript-eslint/no-explicit-any */

export * from '@/types/modules';

export type Id = (string | number) & { readonly Id: unique symbol };

export const toId = (id: Omit<Id, 'Id'>): Id => id as Id;

export type NotEmptyArray<T> = [T, ...Array<T>];

export type Nil = null | undefined;

export type Falsy = false | Nil | '' | 0 | 0n;

export type Primitive = Nil | boolean | number | bigint | string | symbol;

export type FunctionType = (...args: Array<any>) => any;

export type ObjectType = Array<unknown> | Record<string, unknown> | FunctionType;
