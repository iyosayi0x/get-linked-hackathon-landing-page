import client from 'src/adapters';

export const handleContact = async (args: ContactFormArguments) => {
    const res = await client({
        method: 'POST',
        url: '/contact-form',
        data: args,
    });
    const data: ContactFormData[] = await res.data;
    return data;
};
