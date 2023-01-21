import instance from "./instance.js"


const deleteCards = async (id) => {
    try {
        const { status } = await instance.delete(`/${id}`);
        if (status === 200) {
            document.querySelector(`#card-${id}`).remove();
        } else {
            console.warn(status)
        }
    } catch (err) {
        console.error(err);
    }
}

export default deleteCards;