import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavoritos } from "../src/components/Favoritos";





function HomePage() {

    const estilosDaHomePage = {
        //backgroundColor: "red" 
    };

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favoritos />


            </div>
        </>
    );
}

export default HomePage



const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px;

    }

`;

function Header() {
    return (
        <StyledHeader>

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>

        </StyledHeader >
    )
}
function Timeline(propriedades) {

    const playlistNames = Object.keys(propriedades.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>

                    </section>
                )
            })}
        </StyledTimeline>


    )
}
function Favoritos() {
    return (
        <StyledFavoritos>
            <h2>Paginas Favoritas</h2>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div className="nameInfo">
                  <a href="https://github.com/Lucas-Oliveira-Souzaa">Lucas Oliveira</a>
                </div>
                <img src={`https://github.com/AlexandreSoaresAlmeida.png`} />
                <div className="nameInfo">
                  <a href="https://github.com/AlexandreSoaresAlmeida">Alexandre Soares</a>
                </div>
            </section>
           

        </StyledFavoritos >
    )
}






