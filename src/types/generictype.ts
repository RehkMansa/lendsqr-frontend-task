import React from "react";

export type ObjectType<T> = Record<string, T>;

export type ArrayOfObjects<T> = ObjectType<T>[];

export type InputOnchange = React.ChangeEvent<HTMLInputElement>;

export type FormSubmit = React.SyntheticEvent;

export type KeyOfType<T extends Record<string, unknown>> = keyof T;
