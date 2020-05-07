const Rating = (props) => {
    const stars = [];
    for (let i = 0; i <props.raiting; i++) {
        stars.push('★');
    }
    for (let i = 0; i <5 - props.raiting; i++) {
        stars.push('☆');
    }
    return stars.join(' ');
};

export default Rating;