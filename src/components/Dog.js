function Dog({dogYears, colour, breed, name}) {
    // Logic goes at the top outside of the return statement.
    const styles = {
        backgroundColor: colour,
        // margin: "1%"
    }

     function claculateHumanYears (n) {
        return n * 7;
     }

    const humanYears = claculateHumanYears(dogYears);

    return (
        <div style={styles}>
    <h2>Hi, I am a dog.</h2>
    <p>My name is {name}, and I am a {breed}.</p>
        {/* Create a sentence that says how old I am in dog years and human years */}
        <p>I am {dogYears} years old in dog years. That is {humanYears} in human years</p>
    </div>
    )
}
export default Dog;