/* eslint-disable @typescript-eslint/no-explicit-any */
export const getValidationErrors = (errors: any) => {
    const formattedErrors: Record<string, string> = {};

    errors.forEach((err: any) => {
        formattedErrors[err.field] = err.message;
    });

    return formattedErrors;
};
