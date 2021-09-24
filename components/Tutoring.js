import TutoringInfo from "./TutoringInfo"

function Tutoring() {
    return (
        <div className="py-20 mx-10 md:mx-auto md:max-w-3xl">
            <div className="text-center font-karla tracking-widest">
                <h1>TUTORING</h1>
            </div>
            <div className="mt-16 space-y-20 md:space-y-32">
                <TutoringInfo 
                    orientation="left" 
                    imgUrl="https://previews.123rf.com/images/ragakawaw/ragakawaw1608/ragakawaw160800005/63249585-tower-defense-game-assets-part-1.jpg" language="Python, PyGame" 
                    project="Tower Defense Game" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus commodo dolor, at gravida mi. Quisque lobortis congue tortor, quis dignissim risus mollis eget." />
                <TutoringInfo 
                    orientation="right" 
                    imgUrl="https://previews.123rf.com/images/ragakawaw/ragakawaw1608/ragakawaw160800005/63249585-tower-defense-game-assets-part-1.jpg" language="Python, PyGame" 
                    project="Tower Defense Game" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus commodo dolor, at gravida mi. Quisque lobortis congue tortor, quis dignissim risus mollis eget." />
            </div>
        </div>
    )
}

export default Tutoring
