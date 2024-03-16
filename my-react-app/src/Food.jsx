function Food(){

    const food1 = "Burger";
    const food2 = "Pizza";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food;