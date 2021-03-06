function AboutMeInfo({ question, answer, link, mail }) {
    return (
        <div className="mx-10">
            <p className="font-source tracking-wider">> Jonathan.{question}</p>
            {answer.includes("[") && link != "true" ? (
                <p className="text-black opacity-80 font-source tracking-wider">
                    &nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp;{answer}
                </p>
            ) : link == "true" && mail == "true" ? (
                <a href={`mailto:${answer}`}>
                    <p className="text-black opacity-80 font-source tracking-wider">
                        &nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp;
                        <span className="text-blue-500 font-source tracking-wider">
                            {answer}
                        </span>
                    </p>
                </a>
            ) : link == "true" && question == "resume" ? (
                <a
                    href={`https://docs.google.com/uc?export=download&id=1E4Wj-lGdidrpl0nAb5CT0nm1uajJ_6kC`}
                >
                    <p className="text-black opacity-80 font-source tracking-wider">
                        &nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp;
                        <span className="text-blue-500 font-source tracking-wider">
                            {answer}
                        </span>
                    </p>
                </a>
            ) : (
                <p className="text-black opacity-80 font-source tracking-wider">
                    &nbsp;&nbsp;&nbsp;=>&nbsp;&nbsp;"{answer}"
                </p>
            )}
        </div>
    );
}

export default AboutMeInfo;
