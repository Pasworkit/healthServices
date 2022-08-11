import instance from "./instance.js"

const getCards = async () => {
    try {
        const { status, data } = await instance.get('');
        if (status === 200) {
            console.log(data);
            return data;
        } else {
            console.warn(status, data)
        }
    } catch (err) {
        console.error(err);
    }
}

export default getCards;
