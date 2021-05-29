/* eslint-disable @typescript-eslint/no-explicit-any */
declare type Only<T, U> = {
  [P in keyof T]: T[P];
} &
  {
    [P in keyof U]?: never;
  };

declare type Either<T, U> = Only<T, U> | Only<U, T>;

// Store Types and Interfaces
declare type Action<TYPE extends string = string, PAYLOAD = any> = { payload?: PAYLOAD; type: TYPE };
