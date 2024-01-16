const node = (value = null) => {
    return{
        value,
        nextNode: null,
    }
}

export default node