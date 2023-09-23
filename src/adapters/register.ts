import client from 'src/adapters';

export const handleFetchCategoryList = async () => {
    const res = await client({
        method: 'GET',
        url: '/categories-list',
    });
    const data: Category[] = await res.data();
    return data;
};

export const handleRegister = async (args: RegisterArguments) => {
    const res = await client({
        method: 'POST',
        url: '/registration',
        data: args,
    });

    const data: RegisterData = await res.data();
    return data;
};
