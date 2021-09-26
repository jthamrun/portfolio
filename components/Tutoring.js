import TutoringInfo from "./TutoringInfo";

function Tutoring() {
    return (
        <div className="py-10 mx-5 md:mx-auto md:max-w-4xl" id="Tutoring">
            <div className="text-center font-karla tracking-widest">
                <h1>TUTORING</h1>
            </div>
            <div className="mt-16 space-y-20 md:space-y-32">
                <TutoringInfo
                    orientation="left"
                    imgUrl="https://i.imgur.com/udNjeNB.png"
                    language="Python, PyGame"
                    project="Tower Defense Game"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus commodo dolor, at gravida mi. Quisque lobortis congue tortor, quis dignissim risus mollis eget."
                    dlLink="https://drive.google.com/uc?export=download&id=1YmMTpPQej9B9j06h6UksiW5FglLDZHvW"
                />
                <TutoringInfo
                    orientation="left"
                    imgUrl="https://i.imgur.com/yCLdFv3.png"
                    language="Python, PyGame"
                    project="Tower Defense Game"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus commodo dolor, at gravida mi. Quisque lobortis congue tortor, quis dignissim risus mollis eget."
                    dlLink="https://drive.google.com/uc?export=download&id=1nglaxuyy-FTNPws5QQgtoHTkh_2wJmnP"
                />
            </div>
        </div>
    );
}

export default Tutoring;
