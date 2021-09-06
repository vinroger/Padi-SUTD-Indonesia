import Batikimg from "../components/Batikimg";
import Title from "../components/Title";
import Titleimg from "../components/Titleimg";
import Layout from './../components/Layout';
import Content from './../components/Content';
import ContentRev from './../components/ContentRev';

function events() {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    return (
        <div>
            <Layout>
            <div>
                <Titleimg imgsrc="./img/event002.jpg">
                    <h1 className= "font-bold text-4xl m-2" >Our Events</h1>
                    <h4 className="text-lg">We are each other's magnitude and bond.</h4>
                </Titleimg>
                <Title title="Discover our events!" description={lorem}>

                </Title>
                <Content title="President Visit" desc= {lorem} imgsrc="/img/event004.jpg" />
                <ContentRev title="Freshmore BBQ" desc={lorem} imgsrc="/img/event005.jpg"/>
                <Content title="Batik Day" desc= {lorem} imgsrc="/img/batik.jpg" />
                <ContentRev title="NYABU- Nyantai Bareng Anak Baru" desc={lorem} imgsrc="/img/nyabu.jpg"/>
                <Content title="Cook Off Night" desc= {lorem} imgsrc="/img/cook.jpg" />
                <ContentRev title="PPI Singapura Joint Event" desc={lorem} imgsrc="/img/ppi.jpg"/>
                
            </div>
            </Layout> 
        </div>

    )
}

export default events
