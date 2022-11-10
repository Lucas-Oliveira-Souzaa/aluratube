import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";





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

const StyledFavoritos = styled.div`
        width: 100%;
        padding: 26px;        
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;                    
    }
    h2{
        font-size: 16px;
        margin-bottom: 16px;
    }
    a {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;   
  }  
`;
function Favoritos() {
    return (
        <StyledFavoritos>
            <h2>Canais Favoritos</h2>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                  <a href="https://github.com/Lucas-Oliveira-Souzaa">Lucas Oliveira</a>
                </div>
            </section>

        </StyledFavoritos >
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






